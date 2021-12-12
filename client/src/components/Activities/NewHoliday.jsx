import React from "react";
import { useState } from "react";
import moment from "moment";
import "moment/locale/es";
import { useDispatch } from "react-redux";
import { postEvent } from "../../redux/Actions/actions-Activities";
import Styles from "./NewClass.styles";

const NewHoliday = ({ display, name, kind }) => {
  const dispatch = useDispatch();
  moment.locale();

  const [input, setInput] = useState({
    kindOfEvent: kind,
    name: name,
    month: 0,
    day: 0,
    nameday: "",
    profesor: "",
    capacity: 0,
  });

  function parseDate(e) {
    let nombreDia = moment(e.target.value).format("dddd");

    let mes = moment(e.target.value).format("L");
    let dia = mes.slice(0, 2);
    dia = parseInt(dia);
    mes = mes.slice(3, 5);
    mes = parseInt(mes);

    setInput({ ...input, nameday: nombreDia, month: mes, day: dia });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postEvent(input));
    alert("Feriado Creado!");
    display(false);
    window.location.reload(true);
  }

  return (
    <div style={{height: "100%"}}>
      {/* <button onClick={() => display(false)}>Cancelar</button>
      <h2>Crear Nuevo Feriado</h2> */}

      <Styles.Form onSubmit={(e) => handleSubmit(e)}>
        <Styles.InputContainer style={{width: "40rem"}}>
          <Styles.Label>Fecha</Styles.Label>
          <Styles.Input type="date" onChange={(e) => parseDate(e)} />
        </Styles.InputContainer>
        <Styles.ButtonContainer>
          <Styles.SubmitButton type="submit">Crear</Styles.SubmitButton>
        </Styles.ButtonContainer>
      </Styles.Form>
    </div>
  );
};

export default NewHoliday;
