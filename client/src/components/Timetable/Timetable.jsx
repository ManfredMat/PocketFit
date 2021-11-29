import React, { useEffect } from "react";
import ClasesWeeklyView from "./ClasesWeeklyView";

function Timetable() {

  return (
    <div>
      <h1>Horarios</h1>
      <div name="Row-1">
        <div name="Clases Semanales">
          <h2>Clases Semanales</h2>
          <ClasesWeeklyView />
        </div>
      </div>
    </div>
  );
}

export default Timetable;
