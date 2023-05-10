import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { WorkoutsProviders } from "../../database/Providers";

export const GetAll: RequestHandler = async (req, res) => {

    const { user_id } = req.headers
    if(!user_id){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'ID não encontrado.'
            }
        });
    }

    const workout = await WorkoutsProviders.GetAll(user_id)

    if (workout instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: workout.message
            }
        });
    }

    res.status(StatusCodes.OK).json(workout)
}