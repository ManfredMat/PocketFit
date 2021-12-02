import React, { useEffect } from "react";
import ClasesWeeklyView from "./ClasesWeeklyView";
import Calendar from "../_Universals/Calendar";
import Detail from "./Detail";
import Shifts from "./Shifts";
import ScheduleShift from "./ScheduleShift";
import ShiftsConfig from "./ShiftsConfig";
import ShiftsPreview from "./ShiftsPreview";

function Timetable() {
  const [configTurnos, setconfigTurnos] = React.useState(false)
  const [takeShift, setTakeShift] = React.useState(false)
  const [shiftDetail, setShiftDetail] = React.useState(false)
  const date = new Date();

  console.log(configTurnos)
  return (
    <div style={{ position: "relative", width: "-webkit-fill-available", height: "-webkit-fill-available" }}>
      <div style={{ padding: "1rem", position: "relative" }}>
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
              <div>
                <h2>Turnos</h2>

                <button onClick={() => setTakeShift(!takeShift)}>Agendar Turno</button>
                <button onClick={() => setconfigTurnos(!configTurnos)}>Configurar Turnos</button>
                {console.log(configTurnos)}
              </div>
              <Shifts setShiftDetail={setShiftDetail}/>
              <button>Ver detalle</button>
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
      {takeShift &&
        <ScheduleShift display={setTakeShift} />}
      {configTurnos &&
        <ShiftsConfig display={setconfigTurnos} />}
        {shiftDetail &&
        <ShiftsPreview display={setShiftDetail} />}
    </div>
  );
}

export default Timetable;
