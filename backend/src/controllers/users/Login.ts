import { Request, RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
import { IUser } from "../../types";
import { JWTService, PasswordCrypto } from "../../shared/services";
import { UsersProviders } from "../../database/Providers";

export const loginUser: RequestHandler = async (req: Request<{}, {}, IUser>, res) => {
    const { email, password } = req.body

    const user = await UsersProviders.login(email)

    if (user instanceof Error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'Email ou senha incorretos.'
            }
        });

    const compareHashPassword = await PasswordCrypto.verifyPassword(password, user.password)
    if (!compareHashPassword)
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Email ou senha incorretos.'
            }
        });

    const accessToken = JWTService.signIn({ _id: `${user._id}` })
    if (accessToken === 'JWT_SECRET_NOT_FOUND')
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'Erro ao gerar token de acesso'
            }
        });

    return res.status(StatusCodes.OK).json({accessToken, user})
}
