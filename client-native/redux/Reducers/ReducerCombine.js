import {combineReducers} from "redux"
import reducerPlantilla from "./Reducer-Plantilla.js"

const rootReducer = combineReducers({
    plantilla : reducerPlantilla
})

export default rootReducer