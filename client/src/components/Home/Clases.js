import React from "react";
import Styles from "./ClasesStyled";
import { useSelector } from "react-redux";

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
        <Styles.Table>
        <Styles.TableTr border={true}>
        {labelsNames.map((label, index) => (
          <Styles.Labels>{label}</Styles.Labels>
        ))}
        </Styles.TableTr>
        {lessons
          .filter((classs) => classs.nameday === capitalizeFirstLetter(day))
          .map((c,index) => (
            <Styles.TableTr border={index === 2 ? false : true}>
              <Styles.TableTd>{c.name}</Styles.TableTd>
              <Styles.TableTd>{c.hour}</Styles.TableTd>
              <Styles.TableTd>{c.profesor}</Styles.TableTd>
            </Styles.TableTr>
          ))}
        </Styles.Table>
        
      </Styles.StyledContainer>
    </>
  );
}

export default Clases;
