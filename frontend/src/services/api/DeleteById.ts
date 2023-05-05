import { IWorkout } from "@/types";
import { Api } from "../config";

export const DeleteById = async (id: string): Promise<IWorkout | Error> => {
    try {
        const { data } = await Api.delete(`/workouts/${id}`);
        return data as IWorkout;
    } catch (error) {
        return new Error("erro" + error);
    }
};