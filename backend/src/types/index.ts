export interface IWorkout {
    title: string,
    reps: number,
    load: number,
    user_id?: string | string[]
}

export interface Param {
    id?: string
}

export interface IUser {
    email: string,
    password: string
}