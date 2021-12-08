import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux"
import { getAllShifts, postWeekShifts } from "../../redux/Actions/actions-Horarios"
let weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]

function Mondays() {
    let mondays = []
    for (let i = 0; i < 6; i++) {
        let aux = moment().startOf('isoWeek').add(i, 'week').format('D-M-YYYY')
        mondays.push(aux)
    }
    return mondays
}

function ShiftActivate({ display,setRender,render }) {
    let today = moment().format('M-D-YYYY').split("-")
    const weekShifts = useSelector(state => state.timetable.weekShifts)
    const allShifts = useSelector(state => state.timetable.allShifts)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        weeks: "",
        weekCount: 1,
        end: []
    })


    let mondays = Mondays()
    let end = moment(data.weeks, "D-M-YYYY").endOf('isoWeek').add(data.weekCount, 'week').format('D-M-YYYY')


    useEffect(() => {
        dispatch(getAllShifts(today[2], today[1], today[0]))
    }, []);

    async function handleOnChange(e) {
        e.preventDefault()
        setData(() => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        })
        await console.log("Data.weeks:", data.weeks)
        await console.log("Data.weekCount:", data.weekCount)
    }


    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(data)

        if (data.weekCount <= 0) {
            let dayFirst = data.weeks.split("-")
            let dayLast = end.split("-")
            let startOfWeekMonthNum = parseInt(moment(data.weeks, "D-M-YYYY").endOf('Month').format('D'));
            let week = parseInt(moment(data.weeks, "D-M-YYYY").format("w",'isoWeek'))

            const params = {
                weeks: [
                    {
                        firstDay: parseInt(dayFirst[0]),
                        firstDayMonth: parseInt(dayFirst[1]),
                        firstDayMonthDays: startOfWeekMonthNum,
                        lastDay: parseInt(dayLast[0]),
                        lastDayMonth: parseInt(dayLast[1]),
                        week: week,
                        year: parseInt(dayFirst[2])
                    }
                ],
                weekDaysNames: weekDays,
                timetableId: 1
            }
            dispatch(postWeekShifts(params))
        } else {
            const params = {
                weeks: [],
                weekDaysNames: weekDays,
                timetableId: 1
            }
            for (let i = 0; i <= data.weekCount; i++) {
                let dayFirst = moment(data.weeks, "D-M-YYYY").startOf('isoWeek').add(i, 'week').format('D-M-YYYY').split("-")
                let dayLast = moment(data.weeks, "D-M-YYYY").endOf('isoWeek').add(i, 'week').format('D-M-YYYY').split("-")
                let startOfWeekMonthNum = parseInt(moment(dayFirst, "D-M-YYYY").endOf('Month').format('D'));
                let week = parseInt(moment(dayFirst, "D-M-YYYY").format("w",'isoWeek'))
                //console.log(`Semana n°${i} inicio:${dayFirst}`, `Semana n°${i} final:${dayLast}`)

                params.weeks.push({
                    firstDay: parseInt(dayFirst[0]),
                    firstDayMonth: parseInt(dayFirst[1]),
                    firstDayMonthDays: startOfWeekMonthNum,
                    lastDay: parseInt(dayLast[0]),
                    lastDayMonth: parseInt(dayLast[1]),
                    week: week,
                    year: parseInt(dayFirst[2])
                })
            }

            dispatch(postWeekShifts(params))
        }

        setRender(!render)
        display(false)
    }

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
                    <select onChange={(e) => {
                        handleOnChange(e);
                    }} value={data.weeks} name="weeks" placeholder='Selecciona una cantidad'>
                        <option value="default">Elige...</option>
                        {mondays.map((mon) => <option value={mon}>{mon}</option>
                        )}
                    </select>
                    <label htmlFor="weeksCount">Cantidad de Semanas</label>
                    <select onChange={(e) => {
                        handleOnChange(e);
                    }} value={data.weekCount} name="weekCount" placeholder='Selecciona una cantidad'>
                        <option value={0}>Una Semana</option>
                        <option value={1}>Dos Semanas</option>
                        <option value={2}>Tres Semanas</option>
                        <option value={3}>Cuatro Semanas</option>
                        <option value={4}>Cinco Semanas</option>
                        <option value={5}>Seis Semanas</option>
                        <option value={6}>Siete Semanas</option>
                        <option value={7}>Ocho Semanas</option>
                    </select>
                    <button type="submit" onClick={(e) => handleOnSubmit(e)}>Submit</button>
                    <button onClick={() => display(false)}>Cancelar</button>
                </form>
                <p>Inicio</p>
                <p>{data.weeks !== 'default' ? "Lunes " + data.weeks : "Selecciona un Valor"}</p>
                <p>Final</p>
                <p>{data.weekCount !== '' ? "Domingo " + end : "Selecciona un Valor"}</p>
            </div>
        </div>
    )
}

export default ShiftActivate
