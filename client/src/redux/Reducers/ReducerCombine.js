import {combineReducers} from "redux"
import ReducerLogin from "./ReducerLogin.js"
import ReducerUsers from "./ReducerUsers.js"

const rootReducer = combineReducers({
    session: ReducerLogin,
    users: ReducerUsers
})

export default rootReducer