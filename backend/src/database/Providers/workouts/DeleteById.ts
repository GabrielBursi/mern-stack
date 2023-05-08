import { WorkoutModel } from "../../models";

export const Delete = async (id: string) => {
    try {
        const workout = await WorkoutModel.findByIdAndDelete({ _id: id }).exec();

        if(!workout){
            return new Error('ID não encontrado')
        }

        return workout

    } catch (error) {
        return new Error('Erro ao consultar registros ' + error)
    }
}