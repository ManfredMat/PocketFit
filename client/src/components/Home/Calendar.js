import React from "react";
import {prueba} from "../../redux/Actions/actions-Prueba"
import {useSelector, useDispatch} from "react-redux"

function Calendar({ year, month }) {
  const pruebaEstado = useSelector(state => state.counter)
  const dispatch = useDispatch()
  var daysMonth = new Date(year, month, 0).getDate();
  let firstDay = new Date(year, month, 1).getDay();
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  var weekDays = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  dispatch(prueba("hola")) 

  return (
    <div className="hola">

      {weekDays.map((day) => (
        <div>{day}</div>
      ))}

      {Array.from(range(-firstDay + 2, daysMonth, 1)).map((day) =>
        day >= 1 ? <div className="hola">{day}</div> : <div>x</div>
      )}
    </div>
  );
}

export default Calendar;
