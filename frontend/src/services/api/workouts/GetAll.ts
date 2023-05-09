import { Api } from "@/services/config";
import { IWorkout } from "@/types";

export const GetAll = async (accessToken: string | undefined): Promise<IWorkout[] | Error> => {
    try {
        const { data } = await Api.get("/workouts",{
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return data as IWorkout[]
    } catch (error) {
        return new Error("");
    }
};