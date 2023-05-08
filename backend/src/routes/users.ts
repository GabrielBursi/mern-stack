import { Router } from "express";
import { UsersControllers } from "../controllers";

export const routerUsers = Router()

routerUsers.post('/login', UsersControllers.loginUser)
routerUsers.post('/signup', UsersControllers.signupUser)