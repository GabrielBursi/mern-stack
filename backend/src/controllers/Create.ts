import { Request, RequestHandler } from "express";
import { IWorkout } from "../types/index.js";
import { WorkoutsProviders } from "../database/Providers/index.js";

export const Create: RequestHandler = async (req: Request<{}, {}, IWorkout>, res) => {
    const { title, load, reps } = req.body

    const workout = await WorkoutsProviders.Create({title, load, reps})

    if(workout instanceof Error){
        return res.status(500).json({error: workout.message})
    }

    res.json(workout)
}