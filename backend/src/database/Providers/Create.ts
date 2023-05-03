import { IWorkout } from "../../types/index.js"
import { WorkoutModel } from "../models/index.js"

export const Create = async (workout: IWorkout) => {
    try {
        const newWorkout = new WorkoutModel(workout)
        await newWorkout.save()
        return newWorkout
    } catch (error) {
        return new Error('Erro ao consultar registros ' + error)
    }
}