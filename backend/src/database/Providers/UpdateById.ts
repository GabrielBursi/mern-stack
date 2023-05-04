import { IWorkout } from "../../types";
import { WorkoutModel } from "../models";

export const Update = async (id: string, newWorkout: IWorkout) => {
    try {
        const workout = await WorkoutModel.findByIdAndUpdate({_id: id}, { ...newWorkout }, {new: true}).exec();

        if (!workout) {
            return new Error('ID não encontrado')
        }

        return workout

    } catch (error) {
        return new Error('Erro ao consultar registros ' + error)
    }
}