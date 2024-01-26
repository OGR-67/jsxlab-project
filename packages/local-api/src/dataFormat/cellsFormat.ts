import { Cell } from "@jsxlab/local-client/src/store/slices/cellsSlice";

const commentString = (str: string): string => {
    return `/*${str}*/`;
};

const uncommentString = (str: string): string => {
    return str.replace(/^\/\*/, "").replace(/\*\/$/, "");
};

export const cellsStringToData = (cellsString: string): Cell[] => {
    const elements = cellsString.split(/\/\*\[(.*?)\]\*\//);

    const cells: Cell[] = [];
    for (let i = 1; i < elements.length; i += 2) {
        const [type, id] = uncommentString(elements[i]).split(":");
        const content = uncommentString(elements[i + 1].trim());

        cells.push({
            id,
            type: type as Cell["type"],
            content
        });
    }
    return cells;
};

export const dataToCellsString = (data: Cell[]): string => {
    const formatedData = data.map((cell) => {
        const title = commentString(`[${cell.type}:${cell.id}]`);
        let content: string;
        if (cell.type === "code") {
            content = cell.content;
        } else {
            content = commentString(cell.content);
        }
        return `${title}\n${content}`;
    });
    return formatedData.join("\n\n");
};