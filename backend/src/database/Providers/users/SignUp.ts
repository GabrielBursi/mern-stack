import { UserModel } from "../../models";
import { IUser } from "../../../types";
import { PasswordCrypto } from '../../../shared/services';

export const signup = async (user: IUser) => {
    try {
        const hash = await PasswordCrypto.hashPassword(user.password)

        const newUser = new UserModel({email: user.email, password: hash})
        await newUser.save()
        return newUser
    } catch (error) {
        return new Error('Erro ao consultar registros ' + error)
    }
}