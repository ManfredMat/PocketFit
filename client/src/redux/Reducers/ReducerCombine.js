import {combineReducers} from "redux"
import ReducerLogin from "./ReducerLogin.js"
import ReducerUsers from "./ReducerUsers.js"
import reducerHorario from "./ReducerHorarios.js"

const rootReducer = combineReducers({
    session: ReducerLogin,
    users: ReducerUsers,
    timetable: reducerHorario
})

export default rootReducer