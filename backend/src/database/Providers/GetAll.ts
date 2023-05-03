import { WorkoutModel } from "../models/index.js";

export const GetAll = async () => {
    try {
        const workouts = await WorkoutModel.find().exec();

        if (!workouts) {
            return new Error('ID não encontrado')
        }

        return workouts

    } catch (error) {
        return new Error('Erro ao consultar registros ' + error)
    }
}