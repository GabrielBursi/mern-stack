import { WorkoutModel } from "../../models";

export const GetAll = async (user_id: string | string[]) => {
    try {
        const workouts = await WorkoutModel.find({user_id}).exec();

        if (!workouts) {
            return new Error('ID não encontrado')
        }

        return workouts

    } catch (error) {
        return new Error('Erro ao consultar registros ' + error)
    }
}