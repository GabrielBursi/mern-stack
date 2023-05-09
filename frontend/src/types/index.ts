import React from "react"

export type Children = {
    children: React.ReactNode
}

export interface IWorkout {
    _id: string,
    title: string,
    reps: number,
    load: number,
    createdAt: string
}

export interface IUser {
    email: string,
    password: string
}

export interface ApiDataUser {
    accessToken: string,
    user: IUser
}