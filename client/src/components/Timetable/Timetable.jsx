import React, { useEffect } from "react";
import ClasesWeeklyView from "./ClasesWeeklyView";
import Calendar from "../_Universals/Calendar";
import Detail from "./Detail";
import Shifts from "./Shifts";

function Timetable() {
  const date = new Date();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Horarios</h1>
      <div name="content" style={{ display: "flex" }}>
        <div name="Column-left">
          <div name="Eventos">
            <h2>Eventos del Mes</h2>
            <Calendar year={date.getFullYear()} month={date.getMonth()} />
          </div>
          <div name="detalle">
            <h2>Detalle</h2>
            <Detail />
          </div>
        </div>
        <div name="Column-right">
          <div name="row-1">
            <h2>Hola</h2>
            <Shifts/>
          </div>
          <div name="Row-2">
            <div name="Clases Semanales">
              <h2>Clases Semanales</h2>
              <ClasesWeeklyView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timetable;
