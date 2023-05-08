import { Request, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { WorkoutsProviders } from "../../database/Providers";
import { IWorkout, Param } from "../../types";

export const UpdateById: RequestHandler = async (req: Request<Param, {}, IWorkout>, res) => {
    const { id } = req.params
    const workout = req.body

    const newWorkout = await WorkoutsProviders.Update(id || '', workout)

    if (newWorkout instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: newWorkout.message
            }
        });
    }

    res.status(StatusCodes.OK).json(newWorkout)
}