import {combineReducers} from "redux"
import reducerPlantilla from "./Reducer-Plantilla.js"

const rootReducer = combineReducers({
    state: reducerPlantilla
})

export default rootReducer