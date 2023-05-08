import { UserModel } from "../../models";

export const login = async (email: string) => {
    try {
        const user = await UserModel.findOne({ email }).exec()

        if (!user) {
            return new Error('Usuário não encontrado')
        }

        return user

    } catch (error) {
        return new Error('Erro ao consultar o registro');
    }
}