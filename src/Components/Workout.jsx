import { Link } from "react-router-dom"
import WorkoutDetails from "./WorkoutDetails"

export default function Workout({ workout }) {
    return (
        <div>
            <Link to={`/workouts/${workout.id}`}>{workout.type}</Link>
        </div>
    )
}