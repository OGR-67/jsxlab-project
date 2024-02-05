# JSXLab

This package is a JUPYTER Notebook clone but for JSX.  It allows you to write and execute JSX code in a notebook-like environment. It also supports markdown cells and diagram cells.

## Features

- [x] JSX support
- [x] React support
- [x] Code execution and preview
- [x] Code formatting
- [x] Auto import external libraries
- [x] Markdown Cells
- [x] Diagram Cells

## Usage

You can download the package from npm or execute it with npx.

```bash
npm install -g jsxlab
jsxlab serve [filename] [options]
```

or

```bash

npx jsxlab serve [filename] [options]
```

You can just run the command without any arguments. It will create a new `notebook.js` file in the current directory. You will be prompted to follow the given link to open the notebook in your browser.

## Options

- `[filename]`: The name of the file to create. Default is `notebook.js`.
- `--port` or `-p`: The port to run the server on. Default is `4005`.
