import { Schema, model } from "mongoose";
import { IWorkout } from "../../types";


const workoutSchema = new Schema<IWorkout>({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export const WorkoutModel = model('workout', workoutSchema)