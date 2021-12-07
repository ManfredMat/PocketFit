import React, { useEffect } from 'react'
import moment from 'moment';
import { getWeekShifts, selectShift } from "../../redux/Actions/actions-Horarios"
import { useSelector, useDispatch } from "react-redux"

import ShiftsPreview from "./ShiftsPreview";



function ShiftWeeklyView({ render, week }) {

    const [shiftDetail, setShiftDetail] = React.useState(false)
    const weekShifts = useSelector(state => state.timetable.weekShifts)
    const dispatch = useDispatch()
    let weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
    const weekNumsData = weekNums(weekShifts)
    let firstDay = moment(week,"w").add(1, 'd').format('D/M')
    //.startOf('isoWeek')
    let lastDay = moment(week, "w").endOf("week").add(1, 'd').format('D/M')
    console.log(lastDay)

    function weekNums(weekShiftsActual) {
        let weekNums = []
        weekShiftsActual.filter((shift) => !weekNums.includes(shift.day.toLocaleString()) && weekNums.push(shift.day.toLocaleString()))
        weekNums.sort((a, b) => a - b)
        return weekNums
    }

    useEffect(() => {
        dispatch(getWeekShifts(week))
    }, [week]);

    function shiftPreview(shift) {
        dispatch(selectShift(shift))
        setShiftDetail(true)
    }


    return (render && (
        <div>
            <h2>Semana</h2>
            <h3>{firstDay} al {lastDay}</h3>
            <div style={{ display: "flex" }}>
                {weekDays.map((dayName, index) => (
                    <div>
                        <h3 style={{ textAlign: "center" }}>{dayName}</h3>
                        <h4 style={{ textAlign: "center" }}>{weekNumsData[index]}</h4>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {weekShifts.length ? weekShifts.filter((shift) => shift.weekday === dayName)
                                .map((day) => (
                                    <button onClick={() => shiftPreview(day)}>
                                        <p>{day.availability}/{day.capacity}</p>
                                        <p>{day.beginning}hs a {day.ending}hs</p>
                                    </button>
                                ))
                                : <p>No hay shifts este dia</p>}
                        </div>
                    </div>
                ))}
            </div>

            {shiftDetail &&
                <ShiftsPreview display={setShiftDetail} />}
        </div>
    ))
}

export default ShiftWeeklyView
