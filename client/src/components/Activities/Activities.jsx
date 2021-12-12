import React, { useEffect } from "react";
import NewClass from "./NewClass";
import NewEvent from "./NewEvent";
import NewHoliday from "./NewHoliday";
import { useState } from "react";
import Styles from "./Activities.styles";

//render con prop
const Activities = ({ select, display }) => {
  const [nuevoEvento, setNuevoEvento] = React.useState(false);
  const [nuevaClase, setNuevaClase] = React.useState(false);
  const [nuevoFeriado, setNuevoFeriado] = React.useState(false);
  const [ename, setEname] = useState("");
  const [etype, setEtype] = useState("");

  useEffect(() => {
    if(select === "Clase") setNuevaClase(true);
    if(select === "Evento") setNuevoEvento(true);
  }, [])

  function handleSelect(e) {
    switch (e.target.value) {
      case "Clases":
        setNuevoEvento(false);
        setNuevoFeriado(false);
        setNuevaClase(true);
        setEtype(e.target.value);
        break;
      case "Evento":
        setNuevaClase(false);
        setNuevoFeriado(false);
        setNuevoEvento(true);
        setEtype(e.target.value);
        break;
      case "Feriado":
        setNuevaClase(false);
        setNuevoEvento(false);
        setNuevoFeriado(true);
        setEtype(e.target.value);
        break;
      default:
        return "No value";
    }
  }

  return (
    <Styles.Container>
      <Styles.Card>
        <Styles.CloseButton onClick={() => display(false)}>X</Styles.CloseButton>
        <Styles.CardTop>
          <Styles.CardTitle>Crear Actividad</Styles.CardTitle>
          <Styles.CardTopInputsContainer>
            <Styles.CardTopLabel>Nombre</Styles.CardTopLabel>
            <Styles.CardTopInput
              type="text"
              placeholder="Escribe un nombre..."
              onChange={(e) => setEname(e.target.value)}
            />

            <Styles.CardTopLabel>Tipo</Styles.CardTopLabel>
            {
              select === "Clase" ?
              <Styles.CardTopSelect onChange={(e) => handleSelect(e)}>
                <Styles.CardSelectOption value="" disabled>
                  Elija una opción...
                </Styles.CardSelectOption>
                <Styles.CardSelectOption value="Clases" selected>Clase</Styles.CardSelectOption>
                <Styles.CardSelectOption value="Evento">Evento</Styles.CardSelectOption>
                <Styles.CardSelectOption value="Feriado">Feriado</Styles.CardSelectOption>
              </Styles.CardTopSelect> :

              select === "Evento" ? 
              <Styles.CardTopSelect onChange={(e) => handleSelect(e)}>
                <Styles.CardSelectOption value="" disabled>
                  Elija una opción...
                </Styles.CardSelectOption>
                <Styles.CardSelectOption value="Clases">Clase</Styles.CardSelectOption>
                <Styles.CardSelectOption value="Evento" selected>Evento</Styles.CardSelectOption>
                <Styles.CardSelectOption value="Feriado">Feriado</Styles.CardSelectOption>
              </Styles.CardTopSelect> :

              <Styles.CardTopSelect onChange={(e) => handleSelect(e)}>
                <Styles.CardSelectOption value="" disabled selected>
                  Elija una opción...
                </Styles.CardSelectOption>
                <Styles.CardSelectOption value="Clases">Clase</Styles.CardSelectOption>
                <Styles.CardSelectOption value="Evento">Evento</Styles.CardSelectOption>
                <Styles.CardSelectOption value="Feriado">Feriado</Styles.CardSelectOption>
              </Styles.CardTopSelect>
            }
          </Styles.CardTopInputsContainer>
        </Styles.CardTop>

        <Styles.CardBottom>
          {nuevaClase && (
            <NewClass close={display} display={setNuevaClase} name={ename} kind={etype} />
          )}
          {nuevoEvento && (
            <NewEvent close={display} display={setNuevoEvento} name={ename} kind={etype} />
          )}
          {nuevoFeriado && (
            <NewHoliday close={display} display={setNuevoFeriado} name={ename} kind={etype} />
          )}
        </Styles.CardBottom>
      </Styles.Card>
    </Styles.Container>
  );
};

export default Activities;
