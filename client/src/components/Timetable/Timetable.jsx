import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ClasesWeeklyView from "./ClasesWeeklyView";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from 'react-redux';
import Detail from "./DetailEvents";
import Shifts from "./Shifts";
import ScheduleShift from "./ScheduleShift";
import ShiftsConfig from "./ShiftsConfig";
import ShiftsPreview from "./ShiftsPreview";
import { getTimetable } from '../../redux/Actions/actions-Horarios';


function Timetable() {
  const [configTurnos, setconfigTurnos] = React.useState(false)
  const [takeShift, setTakeShift] = React.useState(false)
  const [shiftDetail, setShiftDetail] = React.useState(false)
  const date = new Date();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimetable())
}, []);

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
              </div>
              <Shifts setShiftDetail={setShiftDetail}/>
              <Link to="/session/timetable/ShiftsDetails">
              <button>Ver detalle</button>
              </Link>
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
