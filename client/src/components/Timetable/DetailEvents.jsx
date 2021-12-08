import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../redux/Actions/actions-Activities"


function Detail() {
    const events = useSelector(state => state.activities.events)
    const dispatch = useDispatch()
    const labels = ["Evento", "Fecha", "Horario", "Profesor"]

    useEffect(() => {
        dispatch(getEvents())
    }, []);

    console.log(events)

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem ",
          }}>
            {labels.map((label) => (
                <div>{label}</div>
            ))}
            {events.map((eve) => (
                <>
                    <div>{eve.name}</div>
                    <div>{eve.day}/{eve.month}</div>
                    <div>{eve.hour} hs</div>
                    <div>{eve.profesor}</div>
                </>
            ))}
        </div>
    )
}

export default Detail
