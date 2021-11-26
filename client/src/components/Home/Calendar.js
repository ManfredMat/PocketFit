import React from "react";

function Calendar({ year, month }) {
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

  return (
    <div className="w-38 grid grid-cols-7 gap-2 ">
      {weekDays.map((day) => (
        <div>{day}</div>
      ))}

      {Array.from(range(-firstDay + 2, daysMonth, 1)).map((day) =>
        day >= 1 ? <div className="h-20 w-20 bg-pink-200">{day}</div> : <div>x</div>
      )}
    </div>
  );
}

export default Calendar;
