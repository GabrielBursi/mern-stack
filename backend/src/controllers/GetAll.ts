import { RequestHandler } from "express";
import { WorkoutsProviders } from "../database/Providers";

export const GetAll: RequestHandler = async (req, res) => {
    const workout = await WorkoutsProviders.GetAll()

    if (workout instanceof Error) {
        return res.status(500).json({ error: workout.message })
    }

    res.json(workout)
}