import React from "react";
import { useState } from "react";
import moment from "moment";
import "moment/locale/es";
import { useDispatch } from "react-redux";
import { postEvent } from "../../redux/Actions/actions-Activities";

const NewClass = ({ display, name, kind }) => {
  const dispatch = useDispatch();
  moment.locale();

  const [input, setInput] = useState({
    kindOfEvent: kind,
    name: name,
    description: "",
    month: 0,
    hour: 0,
    day: 0,
    nameday: "",
    profesor: "",
    capacity: 0,
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function parseCapacity(e) {
    let capacidad = parseInt(e.target.value);
    setInput({ ...input, capacity: capacidad });
  }

  function parseHour(e) {
    let hora = e.target.value.slice(0, 2);
    hora = parseInt(hora);
    setInput({ ...input, hour: hora });
  }

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
    alert("Clase Creada!");
    display(false);
    window.location.reload(true);
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
        <h2>Crear Nueva Clase</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Profesor</label>
          <input
            type="text"
            name="profesor"
            placeholder="Escribe un nombre... "
            onChange={(e) => handleChange(e)}
          />

          <label>Fecha</label>
          <input type="date" onChange={(e) => parseDate(e)} />

          <br />

          <label>Horario de inicio</label>
          <input type="time" name="hour" onChange={(e) => parseHour(e)} />
          <br />

          <label>Descripción</label>
          <textarea
            name="description"
            onChange={(e) => handleChange(e)}
          ></textarea>
          <br />

          <label>Capacidad</label>
          <input
            type="number"
            name="capacity"
            onChange={(e) => parseCapacity(e)}
          />

          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default NewClass;
