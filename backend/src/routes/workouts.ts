import { Router } from 'express'
import { WorkoutsControllers } from '../controllers'

export const routerWorkouts = Router()

routerWorkouts.get('/workouts', WorkoutsControllers.GetAll)
routerWorkouts.post('/workouts', WorkoutsControllers.Create)
routerWorkouts.get('/workouts/:id', WorkoutsControllers.GetById)
routerWorkouts.delete('/workouts/:id', WorkoutsControllers.DeleteById)
routerWorkouts.patch('/workouts/:id', WorkoutsControllers.UpdateById)