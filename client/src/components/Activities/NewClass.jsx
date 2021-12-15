import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfessors,
  postEvent,
} from "../../redux/Actions/actions-Activities";
import Styles from "./NewClass.styles";

const NewClass = ({ display, kind, close }) => {
  const dispatch = useDispatch();
  const professors = useSelector((state) => state.activities.professors);
  moment.locale();

  useEffect(() => {
    dispatch(getProfessors());
  }, [dispatch]);

  const eventname = useSelector((state) => state.activities.eventname);

  useEffect(() => {
    setTimeout(() => {
      setInput({ ...input, name: eventname });
    }, 1000);
  }, [eventname]);

  const [input, setInput] = useState({
    kindOfEvent: kind,
    name: "",
    description: "",
    month: 0,
    hour: 0,
    day: 0,
    nameday: "",
    profesor: "",
    capacity: 1,
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

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postEvent(input));
    alert("Clase Creada!");
    display(false);
    window.location.reload(true);
  }

  return (
    <Styles.Container>
      {/* <button onClick={() => display(false)}>Cancelar</button>
      <h2>Crear Nueva Clase</h2> */}

      <Styles.Form onSubmit={(e) => handleSubmit(e)}>
        <Styles.Grid>
          <Styles.InputContainer>
            <Styles.Label>Profesor</Styles.Label>
            <Styles.Select name="profesor" onChange={(e) => handleChange(e)}>
              <option value="" disabled selected>
                Elija uno...
              </option>
              {professors?.map((professor) => (
                <option key={professor.id} value={professor.name}>
                  {" "}
                  {professor.name}{" "}
                </option>
              ))}
            </Styles.Select>
          </Styles.InputContainer>

          <Styles.InputContainer>
            <Styles.Label>Capacidad</Styles.Label>
            <Styles.Input
              placeholder="Capacidad de la clase..."
              type="number"
              name="capacity"
              min="1"
              onChange={(e) => parseCapacity(e)}
              required
            />
          </Styles.InputContainer>

          <Styles.InputContainer>
            <Styles.Label>Día</Styles.Label>
            <Styles.Select name="nameday" onChange={(e) => handleChange(e)}>
              <option value="" disabled selected>
                Elija uno...
              </option>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miercoles">Miércoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sabado">Sábado</option>
            </Styles.Select>
          </Styles.InputContainer>

          <Styles.InputContainer>
            <Styles.Label>Horario de inicio</Styles.Label>
            <Styles.Input
              type="time"
              name="hour"
              onChange={(e) => parseHour(e)}
            />
          </Styles.InputContainer>
        </Styles.Grid>

        <Styles.InputContainer>
          <Styles.Label>Descripción</Styles.Label>
          <Styles.Description
            name="description"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder=""
            rows="4"
            cols="50"
          ></Styles.Description>
        </Styles.InputContainer>

        <Styles.ButtonContainer>
          <Styles.SubmitButton type="submit">Crear</Styles.SubmitButton>
          <Styles.CancelButton onClick={() => close(false)}>
            Cancelar
          </Styles.CancelButton>
        </Styles.ButtonContainer>
      </Styles.Form>
    </Styles.Container>
  );
};

export default NewClass;
