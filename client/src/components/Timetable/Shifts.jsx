import React from 'react';
import * as json from "./Hard-code.json";


//Es para cuando creamos los shift queda aca por ahora
function getWeekNumber (month,day,year){
    var currentdate = new Date(`${month},${day},${year}`);
    var oneJan = new Date(currentdate.getFullYear(),0,1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
    return result
}

function getWeekNameDay (today){
    let options = { weekday: 'long'}
    let convert = today.toLocaleString(undefined, options)
    return convert.charAt(0).toUpperCase() + convert.slice(1)
}

function Shifts() {
    const today = new Date()
    
    return (
        <div>
            {json.shifts.filter((shift)=>shift.weekday === getWeekNameDay(today))
            .map((ofDay)=>(
                <div>
                    <p>{ofDay.availability}/{ofDay.capacity}</p>
                </div>
            ))}
            <h3>Hola</h3>
        </div>
    )
}

export default Shifts
