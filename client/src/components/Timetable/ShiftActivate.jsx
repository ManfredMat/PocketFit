import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux"
import { getAllShifts } from "../../redux/Actions/actions-Horarios"
let weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]

function ShiftActivate({ display }) {
    const weekShifts = useSelector(state => state.timetable.weekShifts)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        week: "",
        weekCount:""
    })

    let today = moment().format('M-D-YYYY').split("-")
    let startOfWeek = moment().startOf('week').add(1, 'days').format('M-DD-YYYY').split("-");
    let startOfWeekMonthNum = parseInt(moment().endOf('Month').format('D'));
    let endOfWeek = moment().endOf('week').add(1, 'days').format('M-D-YYYY').split("-");
    let week = parseInt(moment().format("w"))

    useEffect(() => {
        dispatch(getAllShifts(today[2], today[1], today[0]))
    }, []);

    const handleOnChange = (e) => {
        e.preventDefault()
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }


    const handleOnSubmit = () => {

    }


    console.log(weekShifts)
    return (
        <div style={{
            display: "flex", position: "absolute", width: "-webkit-fill-available", height: "100vh", backgroundColor: "#00000070", top: 0, alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                display: "flex", width: "40%", height: "25%", padding: "2em", flexDirection: "column",
                alignItems: "flex-start", backgroundColor: "grey"
            }}>
                <h2>Activar Turnos</h2>
                <form>
                    <label htmlFor="weeks">Desde</label>
                    <select value={data.week} name="weeks" placeholder='Selecciona una cantidad'>
                        <option value="last">Ultimo Turno</option>
                        <option value="select">Elegir dia...</option>
                    </select>
                    <label htmlFor="weeksCount">Cantidad de Semanas</label>
                    <select name="weeks" placeholder='Selecciona una cantidad'>
                        <option value="1">Una Semana</option>
                        <option value="2">Dos Semana</option>
                        <option value="3">Tres Semana</option>
                        <option value="4">Cuatro Semana</option>
                        <option value="5">Cinco Semana</option>
                        <option value="6">Seis Semana</option>
                        <option value="7">Siete Semana</option>
                        <option value="8">Ocho Semana</option>
                    </select>
                    <button type="submit">Submit</button>
                    <button onClick={() => display(false)}>Cancelar</button>
                </form>
                <p>Inicio</p>
                <p>!fecha</p>
                <p>Final</p>
                <p>!fecha</p>
            </div>
        </div>
    )
}

export default ShiftActivate
