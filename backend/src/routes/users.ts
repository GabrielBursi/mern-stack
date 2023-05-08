import { Router } from "express";
import { UsersControllers } from "../controllers";

export const routerUsers = Router()

routerUsers.post('/login', UsersControllers.validationBodyUser, UsersControllers.loginUser)
routerUsers.post('/signup', UsersControllers.validationBodyUser, UsersControllers.signupUser)