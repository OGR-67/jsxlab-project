import express from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
    id: string;
    content: string;
    type: "markdown" | "code" | "diagram";
}

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
            const result = await fs.readFile(fullPath, { encoding: "utf-8" });

            res.send(JSON.parse(result));
        } catch (err) {
            if (isLocalApiError(err) && err.code === "ENOENT") {
                await fs.writeFile(fullPath, '[{"id":"1","content":"const a = 1; show(a);","type":"code"}]', "utf-8");
                res.json([{ id: "1", content: "", type: "code" } as Cell]);
                return;
            }
            throw err;
        }
    });

    router.post("/cells", async (req, res) => {
        const { cells }: { cells: Cell[]; } = req.body;
        await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");

        res.send({ status: "ok" });
    });

    return router;
};