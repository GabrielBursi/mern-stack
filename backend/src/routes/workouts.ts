import { Router } from 'express'
import { WorkoutsControllers } from '../controllers'
import { ensureAuthenticated } from '../shared/middleware'

export const routerWorkouts = Router()

routerWorkouts.get('/workouts', ensureAuthenticated, WorkoutsControllers.GetAll)
routerWorkouts.post('/workouts', ensureAuthenticated, WorkoutsControllers.createWorkoutValidation, WorkoutsControllers.Create)
routerWorkouts.get('/workouts/:id', ensureAuthenticated, WorkoutsControllers.idWorkoutValidation, WorkoutsControllers.GetById)
routerWorkouts.delete('/workouts/:id', ensureAuthenticated, WorkoutsControllers.idWorkoutValidation, WorkoutsControllers.DeleteById)
routerWorkouts.patch('/workouts/:id', ensureAuthenticated, WorkoutsControllers.idWorkoutValidation, WorkoutsControllers.UpdateById)