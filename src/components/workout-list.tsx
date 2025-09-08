import type { Workout } from "../types/workout";
import { WorkoutResume } from "./workout-resume";

interface WorkoutListProps {
  workoutList: Workout[];
}

export function WorkoutList({ workoutList }: WorkoutListProps) {
  return (
    <>
      <h2>Lista de treinos</h2>

      {workoutList.map((value) => {
        return <WorkoutResume workout={value} />;
      })}
    </>
  );
}
