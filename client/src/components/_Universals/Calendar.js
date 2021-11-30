import React from "react";
import { prueba } from "../../redux/Actions/actions-Prueba (NO MODIFICAR) copy";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./CalendarStyled";

function Calendar({ year, month }) {
  const pruebaEstado = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  var daysMonth = new Date(year, month, 0).getDate();
  let firstDay = new Date(year, month, 1).getDay();

  //Function to create an array with all the days of the month
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  var weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  return (
    <Styles.StyledContainer>
      <Styles.GlobalStyle />
      <Styles.StyledGrid>
        {weekDays.map((day) => (
          <div>{day}</div>
        ))}

        {Array.from(range(-firstDay + 2, daysMonth, 1)).map((day) =>
          day >= 1 ? <div>{day}</div> : <div>x</div>
        )}
      </Styles.StyledGrid>
    </Styles.StyledContainer>
  );
}

export default Calendar;
