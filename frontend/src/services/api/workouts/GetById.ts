import { Api } from "@/services/config";
import { IWorkout } from "@/types";

export const GetById = async (id: string): Promise<IWorkout | Error> => {
    try {
        const { data } = await Api.get(`/workouts/${id}`);
        return data as IWorkout
    } catch (error) {
        return new Error("");
    }
};