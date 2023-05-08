import { Request, RequestHandler } from "express";
import { WorkoutsProviders } from "../../database/Providers";
import { IWorkout } from "../../types";

export const Create: RequestHandler = async (req: Request<{}, {}, IWorkout>, res) => {
    const { title, load, reps } = req.body

    const workout = await WorkoutsProviders.Create({title, load, reps})

    if(workout instanceof Error){
        return res.status(500).json({error: workout.message})
    }

    res.json(workout)
}