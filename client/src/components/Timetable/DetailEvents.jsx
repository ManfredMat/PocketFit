import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../redux/Actions/actions-Activities";
import Styles from "./Styles/DetailEventsStyled";


function Detail() {
    const events = useSelector(state => state.activities.events)
    const dispatch = useDispatch()
    const labels = ["Evento", "Fecha", "Horario", "Profesor"]

    useEffect(() => {
        dispatch(getEvents())
    }, []);

    console.log(events)

    return (
        <Styles.StyledContainer>
            <Styles.table>
                <Styles.tableTr  border={true}>
            {labels.map((label) => (
                <Styles.labels>{label}</Styles.labels>
            ))}
            </Styles.tableTr>
            {events || events.length ? events.map((eve,index) => (
                index <= 2 &&
                <Styles.tableTr border={index === 2 ? false : true}>
                    <Styles.tableTd>{eve.name}</Styles.tableTd>
                    <Styles.tableTd>{eve.day}/{eve.month}</Styles.tableTd>
                    <Styles.tableTd>{eve.hour} hs</Styles.tableTd>
                    <Styles.tableTd>{eve.profesor}</Styles.tableTd>
                </Styles.tableTr>
            ))
        : <p> No hay eventos proximos </p>}
            </Styles.table>    
        </Styles.StyledContainer>
    )
}

export default Detail
