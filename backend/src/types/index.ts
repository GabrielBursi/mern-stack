export interface IWorkout {
    title: string,
    reps: number,
    load: number
}

export interface Param {
    id?: string
}

export interface IUser {
    email: string,
    password: string
}