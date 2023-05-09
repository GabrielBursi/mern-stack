import { Api } from "@/services/config"
import { IWorkout } from "@/types"

export const Create = async (workout: Omit<IWorkout, '_id' | 'createdAt'>, accessToken: string | undefined): Promise<IWorkout | Error> => {
    try {
        const { data } = await Api.post('/workouts', workout, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        return data as IWorkout
    } catch (error) {
        return new Error('error' + error)
    }
}