import { IWorkout } from "@/types";
import { Api } from "../config";

export const GetAll = async (): Promise<IWorkout[] | Error> => {
    try {
        const { data } = await Api.get("/workouts");
        return data as IWorkout[]
    } catch (error) {
        return new Error("");
    }
};