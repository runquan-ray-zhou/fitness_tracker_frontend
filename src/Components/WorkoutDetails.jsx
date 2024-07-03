import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"

const API = import.meta.env.VITE_API_URL

export default function WorkoutDetails() {

    const [ workout, setWorkout ] = useState([
        {
            type: "",
            durationInMinutes: 0,
            caloriesBurned: 0,
            date: ""
        }
    ])
    let { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/workouts/${id}`)
        .then((res) => {
            return res.json()
        })
        .then(resJSON => {
            console.log(resJSON)
            setWorkout(resJSON)
        })
        .catch(() => {
            navigate("/notfound")
        })
    }, [id, navigate])

    return (
        <div>
            <h1>Workout Details</h1>
            <p>{workout.type}</p>
            <p>{workout.durationInMinutes}</p>
            <Link to={`/workouts/${id}/edit`}>
            <button>Edit</button>
            </Link>
            <button>Delete</button>
        </div>
    )
}