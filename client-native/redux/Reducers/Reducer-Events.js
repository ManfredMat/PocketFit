import { GET_EVENTS } from "../Actions/actions-Events";


const initialState = {
    events: [],
    holidays: []
};

function reducerEvents(state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            let orderedEvents = [];
            let orderedHolidays = [];
            let events = action.payload.filter((event) => event.kindOfEvent === "Evento");
            let holidays = action.payload.filter((holiday) => holiday.kindOfEvent === "Feriado");

            let actualDate = new Date();

            //igualo fechas
            events.map(event => {
                event.eventDate = new Date(`${actualDate.getFullYear()}-${event.month}-${event.day}`);
            })

            holidays.map(holiday => {
                holiday.holidayDate = new Date(`${actualDate.getFullYear()}-${holiday.month}-${holiday.day}`);
            })

            //filtro eventos pasados de la fecha actual
            events = events.filter((event) => event.eventDate > actualDate);

            holidays = holidays.filter((holiday) => holiday.holidayDate > actualDate);

            //los ordeno
            events.sort((a, b) => {
                if (a.eventDate < b.eventDate) {
                    return -1
                } else {
                    return 1;
                }

            });

            holidays.sort((a, b) => {
                if (a.holidayDate < b.holidayDate) {
                    return -1
                } else {
                    return 1;
                }

            });

            //pusheo los primeros 3
            for (let i = 0; i < 3; i++) {
                events[i] && orderedEvents.push(events[i]);
                holidays[i] && orderedHolidays.push(holidays[i]);    
            };


            return {
                ...state,
                events: orderedEvents,
                holidays: orderedHolidays
            };

        default:
            return state;
    }
}

export default reducerEvents;