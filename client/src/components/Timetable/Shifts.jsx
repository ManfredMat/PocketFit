import React, { useEffect } from 'react';
import { getWeekShifts, selectShift } from "../../redux/Actions/actions-Horarios"
import { useSelector, useDispatch } from "react-redux"
import moment from 'moment';




//Es para cuando creamos los shift queda aca por ahora
function getWeekNumber(month, day, year) {
    var currentdate = new Date(`${month},${day},${year}`);
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    return result
}

function getWeekNameDay(today) {
    let options = { weekday: 'long' }
    let convert = today.toLocaleString(undefined, options)
    return convert.charAt(0).toUpperCase() + convert.slice(1)
}

function Shifts({ setShiftDetail }) {
    const today = new Date()
    let week = parseInt(moment().format("w",'isoWeek'))
    const nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + 1);
    const weekShifts = useSelector(state => state.timetable.weekShifts)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getWeekShifts(week))
    }, []);

    function shiftPreview(shift) {
        dispatch(selectShift(shift))
        setShiftDetail(true)
    }


    return (
        <div>
            <div style={{ display: "flex" }}>
                <h3>Hoy</h3>
                {weekShifts.filter((shift) => shift.weekday === getWeekNameDay(today))
                    .map((ofDay) => (
                        <button onClick={() => shiftPreview(ofDay)}>
                            <p>{ofDay.availability}/{ofDay.capacity}</p>
                            <p>{ofDay.beginning}hs a {ofDay.ending}hs</p>
                        </button>
                    ))}
            </div>
            <div style={{ display: "flex" }}>
                <h3>Mañana</h3>
                {weekShifts.filter((shift) => shift.weekday === getWeekNameDay(nextDay))
                    .map((ofDay) => (
                        <div onClick={() => shiftPreview(ofDay)}>
                            <button>
                                <p>{ofDay.availability}/{ofDay.capacity}</p>
                                <p>{ofDay.beginning}hs a {ofDay.ending}hs</p>
                            </button>
                        </div>

                    ))}
            </div>


        </div>
    )
}

export default Shifts
