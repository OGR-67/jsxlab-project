import path from "path";
import { Command } from "commander";
import { serve } from "@jsxlab/local-api";

interface LocalApiError {
  code: string;
}
const isLocalApiError = (err: unknown): err is LocalApiError => {
  return (err as LocalApiError).code === "EADDRINUSE";
};
const isProduction = process.env.NODE_ENV === "production";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "4005",)
  .action(async (givenPath, options: { port: string, dev: boolean; }) => {
    try {
      const filename = givenPath || "notebook.js";
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(options.port), path.basename(filename), dir, !isProduction);
      console.log(`
        Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file.
        `);
    } catch (err) {
      if (isLocalApiError(err)) {
        if (err.code === "EADDRINUSE") {
          console.error("Port is in use. Try running on a different port using the -p option.");
        } else if (err instanceof Error) {
          console.error("Here is the error you received:", err.message);
        }
        process.exit(1);
      }
    }
  });
