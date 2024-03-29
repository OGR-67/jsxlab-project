import { OnLoadArgs, PluginBuild, OnLoadResult } from "esbuild-wasm";
import localforage from "localforage";
import axios from "axios";

const fileCache = localforage.createInstance({
  name: "filecache",
});

export const fetchPlugin = (inputCode: string) => {
  return {
    name: "fetch-plugin",
    setup(build: PluginBuild) {
      build.onLoad({ filter: /^index\.js$/ }, () => {
        return {
          loader: "tsx",
          contents: inputCode,
        };
      });

      build.onLoad({ filter: /.*/ }, async (args: OnLoadArgs) => {
        const cachedResult = await fileCache.getItem<Promise<OnLoadResult>>(
          args.path,
        );
        if (cachedResult) return cachedResult;
      });

      build.onLoad({ filter: /.css$/ }, async (args: OnLoadArgs) => {
        const { data, request } = await axios.get(args.path);

        const escaped = data
          .replace(/\n/g, "")
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");

        const contents = `
              const style = document.createElement('style');
              style.innerText = "${escaped}";
              document.head.appendChild(style);
            `;

        const result: OnLoadResult = {
          loader: "tsx",
          contents: contents,
          resolveDir: new URL("./", request.responseURL).pathname,
        };

        await fileCache.setItem(args.path, result);
        return result;
      });

      build.onLoad({ filter: /.*/ }, async (args: OnLoadArgs) => {
        const { data, request } = await axios.get(args.path);

        const result: OnLoadResult = {
          loader: "tsx",
          contents: data,
          resolveDir: new URL("./", request.responseURL).pathname,
        };

        await fileCache.setItem(args.path, result);
        return result;
      });
    },
  };
};
