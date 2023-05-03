import { Request, RequestHandler } from "express";
import { Param } from "../types/index.js";
import { WorkoutsProviders } from "../database/Providers/index.js";

export const DeleteById: RequestHandler = async (req: Request<Param>, res) => {
    const { id } = req.params

    const workout = await WorkoutsProviders.Delete(id || '')

    if (workout instanceof Error) {
        return res.status(500).json({ error: workout.message })
    }

    res.json(workout)
}