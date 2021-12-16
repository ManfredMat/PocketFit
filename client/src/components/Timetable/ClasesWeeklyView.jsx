import React, { useEffect, useState } from "react";
import * as json from "./Hard-code.json";
import { useSelector, useDispatch } from "react-redux";
import { getLessons } from "../../redux/Actions/actions-Activities";
import Styles from "./Styles/ClasesWeeklyViewStyled";
import ClassesDetail from "../Activities/ClassesDetail";

var weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function ClasesWeeklyView({setClaseDetalle,setClaseId, claseDetalle, setOverFlow}) {
  const lessons = useSelector((state) => state.activities.lessons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLessons())
  }, [dispatch]);

  return (
    <Styles.StyledGrid>
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
                <Styles.StyledClasesContainers
                  onClick={() => {
                    setClaseId(cla.id);
                    setClaseDetalle(!claseDetalle);
                    setOverFlow(true);
                  }}
                >
                  <Styles.TitleH3Styled>{cla.name}</Styles.TitleH3Styled>
                  <p>{cla.hour} hs</p>
                </Styles.StyledClasesContainers>
              ))}
          </Styles.StyledContainer>
        </div>
      ))}


      {/* {claseDetalle && <ClassesDetail id={claseId} display={setClaseDetalle} />} */}


    </Styles.StyledGrid>
  );
}

export default ClasesWeeklyView;
