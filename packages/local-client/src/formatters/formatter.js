import * as prettier from "https://unpkg.com/prettier@3.2.4/standalone.mjs";
import parser from "https://unpkg.com/prettier@3.2.4/plugins/typescript.mjs";
import estree from "https://unpkg.com/prettier@3.2.4/plugins/estree.mjs";

export const format = async (unformatedCode) => {
  const formatted = await prettier.format(unformatedCode, {
    parser: "typescript",
    plugins: [parser, estree],
    tabs: false,
    tabWidth: 4,
  });

  return formatted.replace(/\n$/, "");
};
