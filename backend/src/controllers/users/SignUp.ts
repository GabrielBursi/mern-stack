import { RequestHandler } from "express"

export const signupUser: RequestHandler = async (req, res) => {
    res.json({ mssg: 'signup user' })
}
