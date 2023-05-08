import * as yup from "yup";
import { UpdateById } from './UpdateById';
import { Create } from './Create';
import { GetById } from './GetById';
import { GetAll } from './GetAll';
import { DeleteById } from './DeleteById';
import { validation } from "../../shared/middleware";
import { IWorkout, Param } from "../../types";

const paramsSchemaValidation: yup.ObjectSchema<Param> = yup.object().shape({
    id: yup.string().required(),
})

export const idWorkoutValidation = validation({
    params: paramsSchemaValidation,
})

const bodySchemaValidation: yup.ObjectSchema<IWorkout> = yup.object().shape({
    title: yup.string().required(),
    load: yup.number().required(),
    reps: yup.number().required(),
})

export const createWorkoutValidation = validation({
    body: bodySchemaValidation,
})

export const  WorkoutsControllers = {
    GetAll,
    GetById,
    Create,
    UpdateById,
    DeleteById,
    idWorkoutValidation,
    createWorkoutValidation
}