import React from "react";
import NewClass from "./NewClass";
import NewEvent from "./NewEvent";
import NewHoliday from "./NewHoliday";
import { useState } from "react";

const Activities = () => {
  const [nuevoEvento, setNuevoEvento] = React.useState(false);
  const [nuevaClase, setNuevaClase] = React.useState(false);
  const [nuevoFeriado, setNuevoFeriado] = React.useState(false);
  const [ename, setEname] = useState("");
  const [etype, setEtype] = useState("");

  function handleSelect(e) {
    switch (e.target.value) {
      case "Clases":
        setNuevaClase(!nuevaClase);
        setEtype(e.target.value);
        break;
      case "Evento":
        setNuevoEvento(!nuevoEvento);
        setEtype(e.target.value);
        break;
      case "Feriado":
        setNuevoFeriado(!nuevoFeriado);
        setEtype(e.target.value);
        break;
      default:
        return "No value";
    }
  }

  return (
    <div>
      <h1>Crear Actividad</h1>

      <label>Nombre</label>
      <input
        type="text"
        placeholder="Escribe un nombre... "
        onChange={(e) => setEname(e.target.value)}
      />

      <label>Tipo</label>
      <select onChange={(e) => handleSelect(e)}>
        <option value="" disabled selected>
          Escoja uno ...
        </option>
        <option value="Clases">Clase</option>
        <option value="Evento">Evento</option>
        <option value="Feriado">Feriado</option>
      </select>

      <div>
        {nuevaClase && (
          <NewClass display={setNuevaClase} name={ename} kind={etype} />
        )}
        {nuevoEvento && (
          <NewEvent display={setNuevoEvento} name={ename} kind={etype} />
        )}
        {nuevoFeriado && (
          <NewHoliday display={setNuevoFeriado} name={ename} kind={etype} />
        )}
      </div>
    </div>
  );
};

export default Activities;
