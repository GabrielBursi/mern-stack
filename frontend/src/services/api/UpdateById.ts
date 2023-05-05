import { Api } from "../config";
import { IWorkout } from "@/types";

export const UpdateById = async (id: string, workout: IWorkout): Promise<IWorkout | Error> => {
    try {
        const { data } = await Api.put(`/workouts/${id}`, workout);
        return data as IWorkout;
    } catch (error) {
        return new Error("erro" + error);
    }
};