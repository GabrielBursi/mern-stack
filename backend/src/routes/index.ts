import { Router } from 'express'
import { WorkoutsControllers } from '../controllers'

export const router = Router()

router.get('/workouts', WorkoutsControllers.GetAll)
router.post('/workouts', WorkoutsControllers.Create)
router.get('/workouts/:id', WorkoutsControllers.GetById)
router.delete('/workouts/:id', WorkoutsControllers.DeleteById)
router.patch('/workouts/:id', WorkoutsControllers.UpdateById)