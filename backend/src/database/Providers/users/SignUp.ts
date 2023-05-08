import bcrypt from 'bcrypt'
import { UserModel } from "../../models";
import { IUser } from "../../../types";

export const signup = async (user: IUser) => {
    try {

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password, salt)

        const newUser = new UserModel({email: user.email, password: hash})
        await newUser.save()
        return newUser
    } catch (error) {
        return new Error('Erro ao consultar registros ' + error)
    }
}