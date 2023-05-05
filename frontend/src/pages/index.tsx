import { GetStaticProps } from "next"
import { useState } from "react";
import ApiServices from "@/services/api";
import { IWorkout } from "@/types";
import WorkoutDetails from "@/components/WorkoutDetails";
import WorkoutForm from "@/components/WorkoutForm";

interface HomeProps {
  workouts: IWorkout[],
  hasError: boolean | undefined
}

export default function Home({workouts, hasError}: HomeProps) {

  const [stateWorkouts, setStateWorkouts] = useState<IWorkout[]>(workouts);
  const [error, setError] = useState(hasError);

  const handleWorkouts = async () => {
    const updatedWorkouts = await ApiServices.GetAll();
    if(updatedWorkouts instanceof Error){
      return setError(true)
    }
    setStateWorkouts(updatedWorkouts);
  };

  return (
    <div className="home">
      <div className="workouts">
        {!error && stateWorkouts
          .sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())
          .map(workout => (
            <WorkoutDetails workout={workout} key={workout._id} handleWorkoutDeleted={handleWorkouts}/>
          ))
        }
      </div>
      <WorkoutForm handleWorkoutCreated={handleWorkouts}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const workouts = await ApiServices.GetAll()
  const hasError = true

  if (workouts instanceof Error) {
    return {
      props: {
        hasError,
      },
      revalidate: 60
    }
  } 

  return {
    props:{
      workouts,
    },
    revalidate: 60
  }
}