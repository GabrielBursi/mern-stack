import { Request, RequestHandler } from "express"
import { StatusCodes } from "http-status-codes"
import { IUser } from "../../types"
import { UsersProviders } from "../../database/Providers"
import { JWTService } from "../../shared/services"

export const signupUser: RequestHandler = async (req: Request<{}, {}, IUser>, res) => {

    const newUser = await UsersProviders.signup(req.body)

    if (newUser instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: newUser.message
            }
        });
    }

    const accessToken = JWTService.signIn({ _id: `${newUser._id}` });
    if (accessToken === 'JWT_SECRET_NOT_FOUND')
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'Erro ao gerar token de acesso',
            },
        });

    return res.status(StatusCodes.CREATED).json({accessToken, newUser})
}
