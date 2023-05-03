import { Request, RequestHandler } from "express";
import { WorkoutsProviders } from "../database/Providers/index.js";
import { Param } from "../types/index.js";

export const GetById: RequestHandler = async (req: Request<Param>, res) => {
    const { id } = req.params

    const workout = await WorkoutsProviders.GetById(id || '')

    if (workout instanceof Error) {
        return res.status(500).json({ error: workout.message })
    }

    res.json(workout)
}