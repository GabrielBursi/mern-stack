import React, { useContext, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { WorkoutServices } from '@/services/api'
import { IWorkout } from '@/types'
import { UserContext } from '@/context'

interface WorkoutDetailsProps {
    workout: IWorkout,
    handleWorkoutDeleted: () => Promise<void>
}

export default function WorkoutDetails({workout, handleWorkoutDeleted}: WorkoutDetailsProps) {

    const [error, setError] = useState<string>();
    const { user } = useContext(UserContext)

    const handleDelete = async () => {
        const response = await WorkoutServices.DeleteById(workout._id, user?.accessToken)

        if (response instanceof Error) {
            setError(response.message)
            return
        }

        setError(undefined)
        handleWorkoutDeleted()
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Peso (kg): </strong>{workout.load}</p>
            <p><strong>Número de repetições: </strong>{workout.reps}</p>
            <p>{new Date(workout.createdAt).toLocaleDateString('pt-BR')}</p>
            <span onClick={handleDelete}>
                <AiOutlineDelete size={'1.5rem'} color='red'/>
            </span>
            {error && <div className="error">{error}</div>}
        </div>

    )
}
