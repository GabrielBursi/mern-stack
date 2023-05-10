import { Request, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { WorkoutsProviders } from "../../database/Providers";
import { IWorkout } from "../../types";

export const Create: RequestHandler = async (req: Request<{}, {}, IWorkout>, res) => {
    const { title, load, reps } = req.body
    const { user_id } = req.headers

    const workout = await WorkoutsProviders.Create({title, load, reps, user_id })

    if(workout instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: workout.message
            }
        });
    }

    res.status(StatusCodes.CREATED).json(workout)
}