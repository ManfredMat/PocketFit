import React from "react";
import * as json from "./Hard-code.json";

var weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

function ClasesWeeklyView() {
  console.log(json.clases);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr",
        gap: "2rem ",
      }}
    >
      {weekDays.map((day) => (
        <div>
          <div>{day}</div>
          <div>
            {json.clases
              .filter((cla) => cla.nameday === day)
              .sort(function (a, b) {
                if (a.hour > b.hour) return 1;
                if (a.hour < b.hour) return -1;
                return 0;
              })
              .map((cla) => (
                <div>
                  <h3>{cla.name}</h3>
                  <p>{cla.hour} hs</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClasesWeeklyView;
