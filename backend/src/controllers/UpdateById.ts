import { Request, RequestHandler } from "express";
import { WorkoutsProviders } from "../database/Providers";
import { IWorkout, Param } from "../types";

export const UpdateById: RequestHandler = async (req: Request<Param, {}, IWorkout>, res) => {
    const { id } = req.params
    const workout = req.body

    const newWorkout = await WorkoutsProviders.Update(id || '', workout)

    if (newWorkout instanceof Error) {
        return res.status(500).json({ error: newWorkout.message })
    }

    res.json(newWorkout)
}