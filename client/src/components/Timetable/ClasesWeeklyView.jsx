import React, { useEffect } from "react";
import * as json from "./Hard-code.json";
import {useSelector, useDispatch} from "react-redux"
import {getLessons} from '../../redux/Actions/actions-Horarios';


var weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

function ClasesWeeklyView() {
    const lessons = useSelector(state => state.timetable.lessons)
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLessons())
  }, []);

  console.log(lessons)

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "2rem ",
      }}
    >
      {weekDays.map((day) => (
        <div>
          <div>{day}</div>
          <div>
            {lessons
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
