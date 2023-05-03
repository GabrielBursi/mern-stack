import { WorkoutModel } from "../models/index.js";

export const GetById = async (id: string) => {
    try {
        const workout = await WorkoutModel.findById({ _id: id }).exec();

        if (!workout) {
            return new Error('ID não encontrado')
        }

        return workout

    } catch (error) {
        return new Error('Erro ao consultar registros ' + error)
    }
}