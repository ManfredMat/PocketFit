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
    }, [dispatch]);

    console.log(events)

    return (
        <Styles.StyledContainer>
            <Styles.Table>
                <Styles.TableTr  border={true}>
            {labels.map((label) => (
                <Styles.Labels>{label}</Styles.Labels>
            ))}
            </Styles.TableTr>
            {events || events.length ? events.map((eve,index) => (
                index <= 2 &&
                <Styles.TableTr border={index === 2 ? false : true}>
                    <Styles.TableTd>{eve.name}</Styles.TableTd>
                    <Styles.TableTd>{eve.day}/{eve.month}</Styles.TableTd>
                    <Styles.TableTd>{eve.hour} hs</Styles.TableTd>
                    <Styles.TableTd>{eve.profesor}</Styles.TableTd>
                </Styles.TableTr>
            ))
        : <p> No hay eventos proximos </p>}
            </Styles.Table>    
        </Styles.StyledContainer>
    )
}

export default Detail
