import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/Actions/actions-users";
import {
  getTimetable,
  getAllShifts,
  postShift,
  postShiftClean,
} from "../../redux/Actions/actions-Horarios";
import moment from "moment";
import Styles from "./Styles/ScheduleShiftStyled";

function ScheduleShift({ display, setOverFlow }) {
  let today = moment().format("M-D-YYYY").split("-");
  const users = useSelector((state) => state.users.users);
  const putShiftUser = useSelector((state) => state.timetable.putShiftUser);
  const allShifts = useSelector((state) => state.timetable.allShifts);
  const days = [];
  allShifts.forEach((shift) => {
    if (!days.includes(`${shift.day}-${shift.month}-${shift.year}`)) {
      days.push(`${shift.day}-${shift.month}-${shift.year}`);
    }
  });
  const [data, setData] = useState({
    client: "default",
    intervalo: "default",
    date: "default",
  });

  console.log(users);

  function handleOnChange(e) {
    e.preventDefault();
    setData(() => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });

    console.log(data.intervalo);
    console.log(allShifts);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const body = {
      idUser: data.client,
      idShift: parseInt(data.intervalo),
    };

    dispatch(postShift(body));
    console.log("body:", body);
    console.log(putShiftUser)
  };

  const handleOnShiftClean = (e) => {
    e.preventDefault();
    dispatch(postShiftClean());
    setData({
      client: "default",
      intervalo: "default",
      date: "default",
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllShifts(today[2], today[0], today[1]));
    dispatch(getUsers());
    dispatch(getTimetable());
    //eslint-disable-next-line
  }, []);

  return (
    <Styles.BodyStyled>
      <Styles.BoxStyle>
        <div>
          {putShiftUser.length >= 1 ? (
            <Styles.ContenedorCreated>
              <Styles.TitleH3Styled>Turno Creado</Styles.TitleH3Styled>
              <Styles.DaysContainer>
                <Styles.InicioDay style={{ width: "auto" }}>
                  Cliente
                </Styles.InicioDay>
                <Styles.FinalDay style={{ width: "auto" }}>
                  {putShiftUser.map((shift) =>
                    shift.users
                      ? shift.users.map(
                          (user) => `${user.name} ${user.lastname}`
                        )
                      : "No se creo"
                  )}
                </Styles.FinalDay>
                <Styles.InicioDay style={{ width: "auto", marginTop: "0.8em" }}>
                  Dia{" "}
                </Styles.InicioDay>
                <Styles.FinalDay style={{ width: "auto" }}>
                  {" "}
                  {putShiftUser.map((shift) => shift.day)}/
                  {putShiftUser.map((shift) => shift.month)}/
                  {putShiftUser.map((shift) => shift.year)}
                </Styles.FinalDay>
              </Styles.DaysContainer>

              <Styles.ButtonContainer>
              <Styles.GreenButton
                onClick={() => {
                  display(false);
                  setOverFlow(false);
                  dispatch(postShiftClean());
                }}
              >
                Continuar
              </Styles.GreenButton>
              <Styles.GreenDarkButton onClick={(e) => handleOnShiftClean(e)}>Crear Otro</Styles.GreenDarkButton>
              </Styles.ButtonContainer>
              
            </Styles.ContenedorCreated>
          ) : (
            <>
              <Styles.TitleH2Styled>Agendar Turno</Styles.TitleH2Styled>
              <Styles.CloseButton onClick={() => {
                        display(false);
                        setOverFlow(false);
                      }}>
                x
              </Styles.CloseButton>
              <Styles.Content>
                <Styles.Form>
                  <Styles.FormContent>
                    <Styles.TitleLabelStyled>Cliente</Styles.TitleLabelStyled>
                    <div
                      style={{
                        backgroundColor: "var(--green)",
                        paddingRight: "1em",
                        borderRadius: "2em",
                        display: "flex",
                      }}
                    >
                      <Styles.Select
                        placeholder="Escribe un Nombre"
                        name="client"
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                        value={data.client}
                      >
                        <option value="default">Elige un cliente...</option>
                        {users.map((user) => (
                          <option value={user.id}>
                            {user.name + " " + user.lastname}
                          </option>
                        ))}
                      </Styles.Select>
                    </div>

                    <Styles.TitleLabelStyled>Fecha</Styles.TitleLabelStyled>
                    <div
                      style={{
                        backgroundColor: "var(--green)",
                        paddingRight: "1em",
                        borderRadius: "2em",
                        display: "flex",
                      }}
                    >
                      <Styles.Select
                        type="date"
                        name="date"
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                        value={data.date}
                      >
                        <option value="default">Elige una fecha...</option>
                        {days.map((date) => (
                          <option value={date}>{date}</option>
                        ))}
                        {/* {days.map((shift) => <option value={shift.id}>{`${shift.weekday} ${shift.day}/${shift.month}/${shift.year}`}</option>
                        )} */}
                      </Styles.Select>
                    </div>

                    <Styles.TitleLabelStyled>Horarios</Styles.TitleLabelStyled>
                    <div
                      style={{
                        backgroundColor: "var(--green)",
                        paddingRight: "1em",
                        borderRadius: "2em",
                        display: "flex",
                      }}
                    >
                      <Styles.Select
                        placeholder="Selecciona un horario"
                        name="intervalo"
                        value={data.intervalo}
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                      >
                        <option value="default">Elige un horario...</option>
                        {allShifts
                          .filter(
                            (shift, index) =>
                              data.date ===
                              `${shift.day}-${shift.month}-${shift.year}`
                          )
                          .sort(function (a, b) {
                            if (parseInt(a.beginning) > parseInt(b.beginning)) return 1;
                            if (parseInt(a.beginning) < parseInt(b.beginning)) return -1;
                            return 0;})
                          .map((shift) => (
                            <option value={shift.id}>
                              {shift.beginning + "hs -" + shift.ending + " hs"}
                            </option>
                          ))}
                      </Styles.Select>
                    </div>
                  </Styles.FormContent>
                  <div>
                    <Styles.GreenButton
                      type="submit"
                      onClick={
                        putShiftUser.length >= 1
                          ? ((e) => e.preventDefault(), console.log("Holas"))
                          : (e) => handleOnSubmit(e)
                      }
                    >
                      Crear
                    </Styles.GreenButton>
                    <Styles.GreenDarkButton
                      onClick={() => {
                        display(false);
                        setOverFlow(false);
                      }}
                    >
                      Cancelar
                    </Styles.GreenDarkButton>
                  </div>
                </Styles.Form>
              </Styles.Content>
            </>
          )}
        </div>
      </Styles.BoxStyle>
    </Styles.BodyStyled>
  );
}

export default ScheduleShift;
