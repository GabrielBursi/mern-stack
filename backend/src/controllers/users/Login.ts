import { RequestHandler } from "express"

export const loginUser: RequestHandler = async (req, res) => {
    res.json({ mssg: 'login user' })
}
