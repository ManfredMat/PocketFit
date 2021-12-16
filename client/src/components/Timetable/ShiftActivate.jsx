import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  getAllShifts,
  postWeekShifts,
} from "../../redux/Actions/actions-Horarios";
import Styles from "./Styles/ShiftActivateStyled";

let weekDays = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

function Mondays() {
  let mondays = [];
  for (let i = 0; i < 6; i++) {
    let aux = moment().startOf("isoWeek").add(i, "week").format("D-M-YYYY");
    mondays.push(aux);
  }
  return mondays;
}

function ShiftActivate({ display, setRender, render , setOverFlow}) {
  let today = moment().format("M-D-YYYY").split("-");
  const dispatch = useDispatch();
  const [data, setData] = useState({
    weeks: "",
    weekCount: "",
    end: [],
  });

  let mondays = Mondays();
  let end = moment(data.weeks, "D-M-YYYY")
    .endOf("isoWeek")
    .add(data.weekCount, "week")
    .format("D-M-YYYY");

  useEffect(() => {
    dispatch(getAllShifts(today[2], today[1], today[0]));
    //eslint-disable-next-line
  }, []);

  async function handleOnChange(e) {
    e.preventDefault();
    setData(() => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
    await console.log("Data.weeks:", data.weeks);
    await console.log("Data.weekCount:", data.weekCount);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    if (data.weekCount <= 0) {
      let dayFirst = data.weeks.split("-");
      let dayLast = end.split("-");
      let startOfWeekMonthNum = parseInt(
        moment(data.weeks, "D-M-YYYY").endOf("Month").format("D")
      );
      let week = parseInt(
        moment(data.weeks, "D-M-YYYY").format("w", "isoWeek")
      );

      const params = {
        weeks: [
          {
            firstDay: parseInt(dayFirst[0]),
            firstDayMonth: parseInt(dayFirst[1]),
            firstDayMonthDays: startOfWeekMonthNum,
            lastDay: parseInt(dayLast[0]),
            lastDayMonth: parseInt(dayLast[1]),
            week: week,
            year: parseInt(dayFirst[2]),
          },
        ],
        weekDaysNames: weekDays,
        timetableId: 1,
      };
      dispatch(postWeekShifts(params));
    } else {
      const params = {
        weeks: [],
        weekDaysNames: weekDays,
        timetableId: 1,
      };
      for (let i = 0; i <= data.weekCount; i++) {
        let dayFirst = moment(data.weeks, "D-M-YYYY")
          .startOf("isoWeek")
          .add(i, "week")
          .format("D-M-YYYY")
          .split("-");
        let dayLast = moment(data.weeks, "D-M-YYYY")
          .endOf("isoWeek")
          .add(i, "week")
          .format("D-M-YYYY")
          .split("-");
        let startOfWeekMonthNum = parseInt(
          moment(dayFirst, "D-M-YYYY").endOf("Month").format("D")
        );
        let week = parseInt(
          moment(dayFirst, "D-M-YYYY").format("w", "isoWeek")
        );
        //console.log(`Semana n°${i} inicio:${dayFirst}`, `Semana n°${i} final:${dayLast}`)

        params.weeks.push({
          firstDay: parseInt(dayFirst[0]),
          firstDayMonth: parseInt(dayFirst[1]),
          firstDayMonthDays: startOfWeekMonthNum,
          lastDay: parseInt(dayLast[0]),
          lastDayMonth: parseInt(dayLast[1]),
          week: week,
          year: parseInt(dayFirst[2]),
        });
      }

      dispatch(postWeekShifts(params));
    }

    setRender(!render);
    display(false);
    setOverFlow(false);
  };

  return (
    <Styles.BodyStyled>
      <Styles.BoxStyle>
        <Styles.TitleH2Styled>Activar Turnos</Styles.TitleH2Styled>
        <Styles.CloseButton onClick={() => {display(false);setOverFlow(false)}}>
          x
        </Styles.CloseButton>
        <Styles.Content>
          <Styles.Form>
            <Styles.FormContent>
              <Styles.TitleLabelStyled htmlFor="weeks">Desde</Styles.TitleLabelStyled>
              <Styles.Select
                onChange={(e) => {
                  handleOnChange(e);
                }}
                value={data.weeks}
                name="weeks"
                placeholder="Selecciona una cantidad"
              >
                <option value="">Elige...</option>
                {mondays.map((mon) => (
                  <option value={mon}>{mon}</option>
                ))}
              </Styles.Select>
              <Styles.TitleLabelStyled htmlFor="weeksCount">Cantidad de Semanas</Styles.TitleLabelStyled>
              <Styles.Select
                onChange={(e) => {
                  handleOnChange(e);
                }}
                value={data.weekCount}
                name="weekCount"
                placeholder="Selecciona una cantidad"
              >
                <option value={""}>Elige...</option>
                <option value={0}>Una Semana</option>
                <option value={1}>Dos Semanas</option>
                <option value={2}>Tres Semanas</option>
                <option value={3}>Cuatro Semanas</option>
                <option value={4}>Cinco Semanas</option>
                <option value={5}>Seis Semanas</option>
                <option value={6}>Siete Semanas</option>
                <option value={7}>Ocho Semanas</option>
              </Styles.Select>
            </Styles.FormContent>

            <div>
              <Styles.GreenButton
                type="submit"
                onClick={(e) => handleOnSubmit(e)}
              >
                Submit
              </Styles.GreenButton>
              <Styles.GreenDarkButton onClick={() => {display(false); setOverFlow(false);}}>
                Cancelar
              </Styles.GreenDarkButton>
            </div>
          </Styles.Form>
          <Styles.DaysContainer>
            <div>
              <Styles.TitleH3Styled>Inicio</Styles.TitleH3Styled>
                {data.weeks !== ""
                  ? <><Styles.InicioDay>Lunes</Styles.InicioDay> <Styles.FinalDay>{data.weeks}</Styles.FinalDay></>
                  : <><Styles.InicioDay>Lunes</Styles.InicioDay> <Styles.FinalDay>Selecciona un Valor</Styles.FinalDay></>}
            </div>
            <div>
              <Styles.TitleH3Styled>Final</Styles.TitleH3Styled>
              <p>
                {data.weekCount !== ""
                  ? <><Styles.InicioDay>Domingo</Styles.InicioDay> <Styles.FinalDay>{end}</Styles.FinalDay></>
                  :  <><Styles.InicioDay>Domingo</Styles.InicioDay> <Styles.FinalDay>Selecciona un Valor</Styles.FinalDay></>}
              </p>
            </div>
          </Styles.DaysContainer>
        </Styles.Content>
      </Styles.BoxStyle>
    </Styles.BodyStyled>
  );
}

export default ShiftActivate;
