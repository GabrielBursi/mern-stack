import { Api } from "@/services/config"
import { ApiDataUser, IUser } from "@/types"

export const Create = async (user: IUser): Promise<ApiDataUser | Error> => {
    try {
        const { data } = await Api.post('/signup', user)
        return data as ApiDataUser
    } catch (error) {
        return new Error('error' + error)
    }
}