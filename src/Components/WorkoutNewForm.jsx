import { useState, useEffect } from 'react'

export default function WorkoutNewForm() {
    const [workout, seWorkoutDetails] = useState({})
    
    return (
        <div>
            Workout New Form
            <form>
                <label htmlFor="">Type:
                    <input
                    id="type"
                    type="text"
                    value={workout.type}
                    required
                     />
                </label>
                <label htmlFor="">Duration
                    <input
                    id="durationInMinutes"
                    type="number"
                    value={workout.durationInMinutes}
                    required
                     />
                </label>
                <label htmlFor="">Calories Burned
                    <input
                    id="caloriesBurned"
                    type="number"
                    value={workout.caloriesBurned}
                    required
                     />
                </label>
                <label htmlFor="">Date
                    <input
                    id="data"
                    type="text"
                    value={workout.date}
                    required
                     />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}