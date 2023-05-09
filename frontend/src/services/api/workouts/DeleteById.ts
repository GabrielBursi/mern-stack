import { Api } from "@/services/config";
import { IWorkout } from "@/types";

export const DeleteById = async (id: string, accessToken: string | undefined): Promise<IWorkout | Error> => {
    try {
        const { data } = await Api.delete(`/workouts/${id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return data as IWorkout;
    } catch (error) {
        return new Error("erro" + error);
    }
};