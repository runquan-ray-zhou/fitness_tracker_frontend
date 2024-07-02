import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            NavBar
            <button>
                <Link to="/workouts/new">New Workout</Link>
            </button>
        </div>
    )
}