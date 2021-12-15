import { GET_GENERAL_ROUTINE } from "../Actions/actions-Routine";


const initialState = {
    todayRoutine: []
};

function reducerRoutine(state = initialState, action) {
    switch (action.type) {
        case GET_GENERAL_ROUTINE:
            const day = new Date().getDay().toString();
            let todayRoutine = [];
            switch (day) {
                case "1":
                    todayRoutine = action.payload.monday
                    break;

                case "2":
                    todayRoutine = action.payload.tuesday
                    break;

                case "3":
                    todayRoutine = action.payload.wendsday
                    break;

                case "4":
                    todayRoutine = action.payload.thursday
                    break;

                case "5":
                    todayRoutine = action.payload.friday
                    break;

                case "6":
                    todayRoutine = action.payload.saturday
                    break;

                case "7":
                    todayRoutine = "Domingo"
                    break;   
            
                default:
                    todayRoutine = "Sin Rutina";
            }

            return {
                ...state,
                todayRoutine: todayRoutine
            }


        default:
            return state;
    }
}

export default reducerRoutine;