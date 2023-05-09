import { Api } from "@/services/config"
import { ApiDataUser, IUser } from "@/types"

export const Login = async (user: IUser): Promise<ApiDataUser | Error> => {
    try {
        const { data } = await Api.post('/login', user)
        return data as ApiDataUser
    } catch (error) {
        return new Error('error' + error)
    }
}