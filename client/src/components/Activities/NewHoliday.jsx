import React from "react";
import { useState } from "react";
import moment from "moment";
import "moment/locale/es";

const NewHoliday = ({ display, name, kind }) => {
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

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        width: "-webkit-fill-available",
        height: "100vh",
        backgroundColor: "#00000070",
        top: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "40%",
          height: "25%",
          padding: "2em",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "grey",
        }}
      >
        <button onClick={() => display(false)}>Cancelar</button>
        <h2>Crear Nuevo Feriado</h2>
        <form>
          <label>Fecha</label>
          <input type="date" onChange={(e) => parseDate(e)} />

          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default NewHoliday;
