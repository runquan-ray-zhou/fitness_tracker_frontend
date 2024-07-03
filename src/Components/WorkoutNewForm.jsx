import { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

export default function WorkoutNewForm() {

    let navigate = useNavigate()

    const [workout, setWorkoutDetails] = useState(
        {
            type: "",
            durationInMinutes: 0,
            caloriesBurned: 0,
            date: ""
        }
    )

    function handleTextChange(event){
        setWorkoutDetails({...workout, [event.target.id]: [event.target.value]})
    } 

    function addWorkout() {
        fetch(`${API}/workouts`, {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate("/workouts")
        })
        .catch((error) => console.error(error))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        addWorkout()
        setWorkoutDetails(
            {
                type: "",
                durationInMinutes: 0,
                caloriesBurned: 0,
                date: ""
            }
        )
    }

    return (
        <div>
            Workout New Form
            <form onSubmit={handleSubmit}>
                <label htmlFor="type">Type:
                    <input
                    id="type"
                    type="text"
                    value={workout.type}
                    onChange={handleTextChange}
                    required
                     />
                </label>
                <label htmlFor="durationInMinutes">Duration
                    <input
                    id="durationInMinutes"
                    type="number"
                    value={workout.durationInMinutes}
                    onChange={handleTextChange}
                    required
                     />
                </label>
                <label htmlFor="caloriesBurned">Calories Burned
                    <input
                    id="caloriesBurned"
                    type="number"
                    value={workout.caloriesBurned}
                    onChange={handleTextChange}
                    required
                     />
                </label>
                <label htmlFor="date">Date
                    <input
                    id="date"
                    type="text"
                    value={workout.date}
                    onChange={handleTextChange}
                    required
                     />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}