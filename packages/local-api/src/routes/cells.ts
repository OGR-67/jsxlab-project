import { Cell } from "@jsxlab/local-client/src/store/slices/cellsSlice";
import express from "express";
import fs from "fs/promises";
import path from "path";
import { cellsStringToData, dataToCellsString } from "../dataFormat/cellsFormat";

interface LocalApiError {
    code: string;
}

export const createCellsRouter = (filename: string, dir: string) => {
    const router = express.Router();
    router.use(express.json());
    const fullPath = path.join(dir, filename);

    router.get("/cells", async (req, res) => {
        const isLocalApiError = (err: unknown): err is LocalApiError => {
            return typeof (err as LocalApiError).code === "string";
        };
        try {
            const result: string = await fs.readFile(fullPath, { encoding: "utf-8" });

            res.status(200).json(cellsStringToData(result));
        } catch (err) {
            if (isLocalApiError(err) && err.code === "ENOENT") {
                await fs.writeFile(fullPath, "", "utf-8");
                res.json([]);
                return;
            }
            throw err;
        }
    });

    router.post("/cells", async (req, res): Promise<void> => {
        const { cells }: { cells: Cell[]; } = req.body;
        await fs.writeFile(fullPath, dataToCellsString(cells), "utf-8");

        res.send({ status: "ok" });
    });

    return router;
};