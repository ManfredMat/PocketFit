import React from "react";
import NewClass from "./NewClass";
import NewEvent from "./NewEvent";
import NewHoliday from "./NewHoliday";
import { useState } from "react";
import EventDetail from "./EventDetail"; //prueba
import ClassesDetail from "./ClassesDetail"; //prueba

const Activities = () => {
  const [nuevoEvento, setNuevoEvento] = React.useState(false);
  const [nuevaClase, setNuevaClase] = React.useState(false);
  const [nuevoFeriado, setNuevoFeriado] = React.useState(false);
  const [ename, setEname] = useState("");
  const [etype, setEtype] = useState("");
  const [nuevaPrueba, setNuevaPrueba] = React.useState(false); //prueba
  const [pruebaId, setPruebaId] = useState(""); //prueba
  const [pruebaClase, setPruebaClase] = React.useState(false); //prueba
  const [pruebaClaseId, setPruebaClaseId] = useState(""); //prueba

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
      case "68870247-9d61-46f3-8e83-ac0f5ac29b9f": //prueba
        setNuevaPrueba(!nuevaPrueba); //prueba
        setPruebaId(e.target.value); //prueba
        break; //prueba
      case "41b22565-29a3-4d8d-bd1d-92456d3ff675": //prueba
        setPruebaClase(!pruebaClase); //prueba
        setPruebaClaseId(e.target.value); //prueba
        break; //prueba
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
        {/* Options de prueba */}
        <option value="68870247-9d61-46f3-8e83-ac0f5ac29b9f">
          PruebaEventoDetail
        </option>
        <option value="41b22565-29a3-4d8d-bd1d-92456d3ff675">
          PruebaClaseDetail
        </option>
        {/* Fin de options de prueba */}
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
        {/* Displays de prueba */}
        {nuevaPrueba && <EventDetail display={setNuevaPrueba} id={pruebaId} />}
        {pruebaClase && (
          <ClassesDetail display={setPruebaClase} id={pruebaClaseId} />
        )}
        {/* Fin Displays de prueba */}
      </div>
    </div>
  );
};

export default Activities;
