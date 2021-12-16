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
        <Styles.table>
        <Styles.tableTr border={true}>
        {labelsNames.map((label, index) => (
          <Styles.labels>{label}</Styles.labels>
        ))}
        </Styles.tableTr>
        {lessons
          .filter((classs) => classs.nameday === capitalizeFirstLetter(day))
          .map((c,index) => (
            <Styles.tableTr border={index === 2 ? false : true}>
              <Styles.tableTd>{c.name}</Styles.tableTd>
              <Styles.tableTd>{c.hour}</Styles.tableTd>
              <Styles.tableTd>{c.profesor}</Styles.tableTd>
            </Styles.tableTr>
          ))}
        </Styles.table>
        
      </Styles.StyledContainer>
    </>
  );
}

export default Clases;
