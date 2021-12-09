import React, { useEffect } from "react";
import * as json from "./Hard-code.json";
import {useSelector, useDispatch} from "react-redux"
import {getLessons} from '../../redux/Actions/actions-Activities';
import Styles from "./Styles/ClasesWeeklyViewStyled";



var weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

function ClasesWeeklyView() {
    const lessons = useSelector(state => state.activities.lessons)
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLessons())
  }, []);

  console.log(lessons)

  return (
    <Styles.StyledGrid
    >
      {weekDays.map((day) => (
        <div>
          <Styles.StyledDaysContainers>{day}</Styles.StyledDaysContainers>
          <Styles.StyledContainer>
            {lessons
              .filter((cla) => cla.nameday === day)
              .sort(function (a, b) {
                if (a.hour > b.hour) return 1;
                if (a.hour < b.hour) return -1;
                return 0;
              })
              .map((cla) => (
                <Styles.StyledClasesContainers>
                  <Styles.TitleH3Styled>{cla.name}</Styles.TitleH3Styled>
                  <p>{cla.hour} hs</p>
                </Styles.StyledClasesContainers>
              ))}
          </Styles.StyledContainer>
        </div>
      ))}
    </Styles.StyledGrid>
  );
}

export default ClasesWeeklyView;
