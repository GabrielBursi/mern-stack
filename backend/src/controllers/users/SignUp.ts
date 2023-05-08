import { Request, RequestHandler } from "express"
import { IUser } from "../../types"
import { UsersProviders } from "../../database/Providers"

export const signupUser: RequestHandler = async (req: Request<{}, {}, IUser>, res) => {

    const newUser = await UsersProviders.signup(req.body)

    if (newUser instanceof Error) {
        return res.status(500).json({ error: newUser.message })
    }

    res.json(newUser)
}
