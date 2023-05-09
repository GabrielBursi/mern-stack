import React, { FormEvent, useState } from 'react'
import { WorkoutServices } from '@/services/api';
import { IWorkout } from '@/types'

interface WorkoutFormProps {
    handleWorkoutCreated: () => Promise<void>
}

export default function WorkoutForm({ handleWorkoutCreated }: WorkoutFormProps) {

    const [workout, setWorkout] = useState<Omit<IWorkout, '_id' | 'createdAt'>>({load: 0, reps: 0, title: ''});
    const [error, setError] = useState<string>()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const newWorkout: Omit<IWorkout, '_id' | 'createdAt'> = { 
            title: workout.title, 
            load: Number(workout.load) , 
            reps: Number(workout.reps) 
        }

        const response = await WorkoutServices.Create(newWorkout)

        if (response instanceof Error) {
            setError(response.message)
            return
        }

        setWorkout({ load: 0, reps: 0, title: '' })
        handleWorkoutCreated()

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Adicione um novo treino</h3>

            <label>Nome do Exercício:</label>
            <input
                placeholder='Digite o nome'
                type="text"
                onChange={(e) => setWorkout({...workout, title: e.target.value})}
                value={workout.title}
            />

            <label>Peso (em kg):</label>
            <input
                placeholder='Digite o peso'
                type="number"
                onChange={(e) => setWorkout({...workout, load: Number(e.target.value)})}
                value={workout.load}
            />

            <label>Número de repetições:</label>
            <input
                placeholder='Digite as repetições'
                type="number"
                onChange={(e) => setWorkout({...workout, reps: Number(e.target.value)})}
                value={workout.reps}
            />

            <button type='submit'>Adicionar Treino</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
