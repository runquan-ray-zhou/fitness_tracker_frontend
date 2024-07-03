import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <Link to="/workouts">Index</Link>
            <button>
                <Link to="/workouts/new">New Workout</Link>
            </button>
        </div>
    )
}