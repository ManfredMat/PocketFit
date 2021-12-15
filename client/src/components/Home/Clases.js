import React from "react";
import Styles from "./ClasesStyled";
import { useSelector, useDispatch } from "react-redux";

const labelsNames = ["Clase", "Horario", "Profe"];

function Clases({day}) {
  const lessons = useSelector((state) => state.timetable.lessons);


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Styles.GlobalStyle />
      <Styles.StyledContainer>
        {labelsNames.map((label, index) => (
          <div>{label}</div>
        ))}
        {lessons
          .filter((classs) => classs.nameday === capitalizeFirstLetter(day))
          .map((c) => (
            <>
              <div>{c.name}</div>
              <div>{c.hour}</div>
              <div>{c.profesor}</div>
            </>
          ))}
      </Styles.StyledContainer>
    </>
  );
}

export default Clases;
