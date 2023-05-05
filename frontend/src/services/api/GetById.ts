import { IWorkout } from "@/types";
import { Api } from "../config";

export const GetById = async (id: string): Promise<IWorkout | Error> => {
    try {
        const { data } = await Api.get(`/workouts/${id}`);
        return data as IWorkout
    } catch (error) {
        return new Error("");
    }
};