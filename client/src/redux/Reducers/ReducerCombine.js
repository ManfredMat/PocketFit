import {combineReducers} from "redux"
import ReducerLogin from "./ReducerLogin.js"
import ReducerUsers from "./ReducerUsers.js"
import reducerHorario from "./ReducerHorarios.js"
import reducerActivities from "./ReducerActivities.js"
import reducerExercise from "./ReducerExercise.js"

const rootReducer = combineReducers({
    session: ReducerLogin,
    users: ReducerUsers,
    timetable: reducerHorario,
    activities: reducerActivities,
    exercise: reducerExercise
})

export default rootReducer