import { GetServerSideProps } from "next"
import { useContext, useState } from "react";
import { IWorkout } from "@/types";
import WorkoutDetails from "@/components/WorkoutDetails";
import WorkoutForm from "@/components/WorkoutForm";
import { WorkoutServices } from "@/services/api";
import { UserContext } from "@/context";

interface HomeProps {
  workouts: IWorkout[],
  hasError: boolean | undefined
}

export default function Home({workouts, hasError}: HomeProps) {

  const [stateWorkouts, setStateWorkouts] = useState<IWorkout[]>(workouts);
  const [error, setError] = useState(hasError);

  const { user } = useContext(UserContext)

  const handleWorkouts = async () => {
    const updatedWorkouts = await WorkoutServices.GetAll(user?.accessToken);
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const accessToken = req.cookies.accessToken;
  const workouts = await WorkoutServices.GetAll(accessToken);
  const hasError = true;

  console.log(accessToken);

  if (workouts instanceof Error) {
    return {
      props: {
        hasError,
      }
    }
  } 

  return {
    props:{
      workouts,
    }
  }
}
