import { Request, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { WorkoutsProviders } from "../../database/Providers";
import { Param } from "../../types";

export const DeleteById: RequestHandler = async (req: Request<Param>, res) => {
    const { id } = req.params

    const workout = await WorkoutsProviders.Delete(id || '')

    if (workout instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: workout.message
            }
        });
    }

    res.status(StatusCodes.NO_CONTENT).json(workout)
}