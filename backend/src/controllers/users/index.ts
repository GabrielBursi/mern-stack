import * as yup from "yup";
import { signupUser } from './SignUp';
import { loginUser } from './Login';
import { IUser } from '../../types';
import { validation } from '../../shared/middleware';

const bodySchemaValidation: yup.ObjectSchema<IUser> = yup.object().shape({
    email: yup.string().email().required().min(5),
    password: yup.string().required().min(6),
})

export const validationBodyUser = validation({
    body: bodySchemaValidation,
})

export const UsersControllers = {
    loginUser,
    signupUser,
    validationBodyUser
}