import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux"
import { getAllShifts } from "../../redux/Actions/actions-Horarios"


function Mondays() {
    let mondays = []
    for (let i = 1; i < 5; i++) {
        let aux = moment().startOf('isoWeek').add(i, 'week').format('D-M-YYYY')
        mondays.push(aux)
    }
    return mondays
}

function ShiftActivate({ display }) {
    let today = moment().format('M-D-YYYY').split("-")
    const weekShifts = useSelector(state => state.timetable.weekShifts)

    const dispatch = useDispatch()
    const [data, setData] = useState({
        weeks: "",
        weekCount: 1
    })


    
    let mondays = Mondays()
    let end = moment(data.weeks,"D-M-YYYY").endOf('isoWeek').add(data.weekCount, 'week').format('D-M-YYYY')

    console.log(end)
    /*     function lastShiftGenerate (){
            var last = [parseInt(today[1]),parseInt(today[0]),parseInt(today[2])]
            allShifts.forEach((shift,index)=>{
            if(shift.day >= last[0] && shift.month >= last[1] && shift.year >= last[2]){
                last = [shift.day,shift.month,shift.year]
            }})
            return last
        }

        let lastShift = lastShiftGenerate()

        console.log("Lastweek:",lastShift)
        */

    useEffect(() => {
        dispatch(getAllShifts(today[2], today[1], today[0]))
    }, [dispatch , today]);

    function handleOnChange(e) {
        e.preventDefault()
        setData(() => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        })
        console.log(e.target.value)
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
                    <select onChange={(e) => {
                        handleOnChange(e);
                    }} value={data.weeks} name="weeks" placeholder='Selecciona una cantidad'>
                        <option value="default">Elige...</option>
                        {mondays.map((mon) => <option value={mon}>{mon}</option>
                        )}
                    </select>
                    {/* <p>Ultimo Turno: {`${lastShift[0]}/${lastShift[1]}/${lastShift[2]}`}</p> */}
                    <label htmlFor="weeksCount">Cantidad de Semanas</label>
                    <select onChange={(e) => {
                        handleOnChange(e);
                    }} value={data.weekCount} name="weekCount" placeholder='Selecciona una cantidad'>
                        <option value={1}>Una Semanas</option>
                        <option value={2}>Dos Semanas</option>
                        <option value={3}>Tres Semanas</option>
                        <option value={4}>Cuatro Semanas</option>
                        <option value={5}>Cinco Semanas</option>
                        <option value={6}>Seis Semanas</option>
                        <option value={7}>Siete Semanas</option>
                        <option value={8}>Ocho Semanas</option>
                    </select>
                    <button type="submit">Submit</button>
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
