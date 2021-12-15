import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import { useDispatch, useSelector } from "react-redux";
import { postEvent } from "../../redux/Actions/actions-Activities";
import Styles from "./NewEvent.styles";

const NewEvent = ({ display, kind, close }) => {
  const dispatch = useDispatch();
  moment.locale();

  const eventname = useSelector((state) => state.activities.eventname);

  useEffect(() => {
    setTimeout(() => {
      setInput({ ...input, name: eventname });
    }, 1000);
  }, [eventname]);

  const [input, setInput] = useState({
    photo: null,
    kindOfEvent: kind,
    name: "",
    description: "",
    month: 0,
    hour: 0,
    day: 0,
    nameday: "",
    profesor: "",
    capacity: 0,
  });

  const data = new FormData();
  data.append("photo", input.photo);
  data.append("kindOfEvent", input.kindOfEvent);
  data.append("name", input.name);
  data.append("description", input.description);
  data.append("month", input.month);
  data.append("hour", input.hour);
  data.append("day", input.day);
  data.append("nameday", input.nameday);
  data.append("profesor", input.profesor);
  data.append("capacity", input.capacity);

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function parseHour(e) {
    let hora = e.target.value.slice(0, 2);
    hora = parseInt(hora);
    setInput({ ...input, hour: hora });
  }

  function parseCapacity(e) {
    let capacidad = parseInt(e.target.value);
    setInput({ ...input, capacity: capacidad });
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
    dispatch(postEvent(data));
    alert("Evento Creado!");
    display(false);
    window.location.reload(true);
  }

  return (
    <Styles.Container>
      {/* <button onClick={() => display(false)}>Cancelar</button>
      <h2>Crear Nuevo Evento</h2> */}

      <Styles.Form onSubmit={(e) => handleSubmit(e)}>
        <Styles.SubContainer>
          <Styles.Column1>
            <Styles.InputContainer>
              <Styles.Label>Imagen</Styles.Label>
              <Styles.InputImage
                type="file"
                name="photo"
                accept=".jpg, .jpeg"
                onChange={(e) =>
                  setInput({ ...input, photo: e.target.files[0] })
                }
              />
            </Styles.InputContainer>
            <Styles.InputContainer>
              <Styles.Label>Descripción</Styles.Label>
              <Styles.Description
                name="description"
                onChange={(e) => handleChange(e)}
                placeholder=""
                rows="5"
                cols="40"
              ></Styles.Description>
            </Styles.InputContainer>
          </Styles.Column1>

          <Styles.Column2>
            <Styles.InputContainer>
              <Styles.Label>Fecha</Styles.Label>
              <Styles.Input type="date" onChange={(e) => parseDate(e)} />
            </Styles.InputContainer>
            <Styles.InputContainer>
              <Styles.Label>Horario</Styles.Label>
              <Styles.Input
                type="time"
                name="hour"
                onChange={(e) => parseHour(e)}
              />
            </Styles.InputContainer>
            <Styles.InputContainer>
              <Styles.Label>Capacidad</Styles.Label>
              <Styles.Input
                placeholder="Capacidad de la clase..."
                type="number"
                name="capacity"
                min="1"
                onChange={(e) => parseCapacity(e)}
              />
            </Styles.InputContainer>
          </Styles.Column2>
        </Styles.SubContainer>

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

export default NewEvent;
