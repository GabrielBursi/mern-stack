import { IWorkout } from "../../types"
import { WorkoutModel } from "../models"

export const Create = async (workout: IWorkout) => {
    try {
        const newWorkout = new WorkoutModel(workout)
        await newWorkout.save()
        return newWorkout
    } catch (error) {
        return new Error('Erro ao consultar registros ' + error)
    }
}