import axios from "axios";

export const GET_EXERCISES = "GET_EXERCISES";

export const GET_EXERCISE_BY_ID = "GET_EXERCISE_BY_ID";

export function get_exercises(){
    return async function (dispatch) {
        await axios.get("http://localhost:3001/api/exercises")
        .then((exercises) => {
            dispatch({
                type: GET_EXERCISES,
                payload : exercises.data
            })
        })
    }
}
export function get_exercise_by_id(id){
    return async function (dispatch) {
        await axios.get("http://localhost:3001/api/exercises/" + id)
        .then((exercise) => {
            dispatch({
                type: GET_EXERCISE_BY_ID,
                payload : exercise.data
            })
        })
    }
}
export function create_exercise(exercise){
    return async function () {
        await axios.post("http://localhost:3001/api/exercises/",exercise)
    }
}