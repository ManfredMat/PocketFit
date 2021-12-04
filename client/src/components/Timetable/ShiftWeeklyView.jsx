import React, { useEffect } from 'react'
import moment from 'moment';
import { getWeekShifts, selectShift } from "../../redux/Actions/actions-Horarios"
import { useSelector, useDispatch } from "react-redux"

import ShiftsPreview from "./ShiftsPreview";


function getWeekNameDay(today) {
    let options = { weekday: 'long' }
    let convert = today.toLocaleString(undefined, options)
    return convert.charAt(0).toUpperCase() + convert.slice(1)
}

function ShiftWeeklyView() {

    const [shiftDetail, setShiftDetail] = React.useState(false)
    const weekShifts = useSelector(state => state.timetable.weekShifts)
    const dispatch = useDispatch()
    let weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
    //const weekNumsData = weekNums(weekShifts)
    let startOfWeek = moment().startOf('week').add(1, 'days').format('M-DD-YYYY').split("-");
    let startOfWeekMonthNum = parseInt(moment().endOf('Month').format('D'));
    let endOfWeek = moment().endOf('week').add(1, 'days').format('M-D-YYYY').split("-");
    let week = parseInt(moment().format("w"))


   /*  function weekNums(weekShiftsActual) {
        let weekNums = []
        weekShiftsActual.filter((shift) => !weekNums.includes(shift.day.toLocaleString()) && weekNums.push(shift.day.toLocaleString()))
        return weekNums
    } */
    
    useEffect(() => {
        dispatch(getWeekShifts(startOfWeek[1],startOfWeek[0],startOfWeekMonthNum,endOfWeek[1],endOfWeek[0],week,startOfWeek[2],weekDays,1))
    }, []);

    function shiftPreview(shift) {
        dispatch(selectShift(shift))
        setShiftDetail(true)
    }


    return (
        <div>
             <div style={{ display: "flex" }}>
                {weekDays.map((dayName, index) => (
                    <div>
                        <h3 style={{textAlign:"center"}}>{dayName}</h3>
                        {/* <h4>{weekNumsData[index]}</h4> */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {weekShifts.length ? weekShifts.filter((shift) => shift.weekday === dayName)
                                .map((day) => (
                                    <button onClick={() => shiftPreview(day)}>
                                        <p>{day.day}</p>
                                        <p>{day.availability}/{day.capacity}</p>
                                        <p>{day.beginning}hs a {day.ending}hs</p>
                                    </button>
                                ))
                            : <p>No hay shifts</p>}
                        </div>
                    </div>
                ))}
            </div>

            {shiftDetail &&
                <ShiftsPreview display={setShiftDetail} />} 
        </div>
    )
}

export default ShiftWeeklyView
