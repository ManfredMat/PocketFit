import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleEvent,
  updateEvent,
  getClients,
} from "../../redux/Actions/actions-Activities";
import ReactCardFlip from "react-card-flip";
import moment from "moment";
import "moment/locale/es";
import fitnesslogo from "../../assets/img/fitnesslogo.svg";
import Style from "./ClasesDetail.styles";

function ClassesDetail({ id, display }) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(getSingleEvent(id));
    dispatch(getClients());
  }, [dispatch, id, value]);

  const event = useSelector((state) => state.activities.event);
  const clients = useSelector((state) => state.activities.clients);

  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip(e) {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

  moment.locale();

  const [input, setInput] = useState({
    name: event.name,
    profesor: event.profesor,
    month: 0,
    hour: 0,
    day: 0,
    nameday: "",
    capacity: 0,
    users: [],
  });

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

  function handleSelect(e) {
    setInput({
      ...input,
      users: [
        ...input.users,
        {
          id: e.target.selectedOptions[0].getAttribute("dataid"),
          name: e.target.value,
        },
      ],
    });
  }

  function handleDelete(e, t) {
    e.preventDefault();
    setInput({
      ...input,
      users: input.users.filter((user) => user.name !== t),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateEvent(input, event.id));
    alert("Clase Actualizada!");
    setValue(value + 1);
    handleFlip(e);
  }

  return (
    <div
      style={{

          display: "flex",
          position: "relative",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#00000070",
          top: 0,
          alignItems: "center",
          justifyContent: "center",
          zIndex: "7",

      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Style.Contenedor
          // style={{
          //   display: "flex",
          //   width: "60%",
          //   height: "45%",
          //   padding: "2em",
          //   flexDirection: "column",
          //   alignItems: "flex-start",
          //   backgroundColor: "grey",
          // }}
        >
          {event ? (
            <Style.Card>
              <Style.Cruz onClick={() => display(false)}>x</Style.Cruz>
              <Style.Titulo> {event.name} </Style.Titulo>
              <button onClick={(e) => handleFlip(e)}>Editar</button>
              <img src={fitnesslogo} alt="class-img" />
              <h1>{event.profesor}</h1>
              <h2>Profesor</h2>
              <div>
                <h3>Horario </h3>
                <h3> {event.hour} hs. </h3>
                <h3>Capacidad </h3>
                <h3> {event.capacity} </h3>
                <h3> Día de la semana </h3>
                <h3>{event.day}</h3>
              </div>

              <h2> Inscriptos</h2>
              <h2> Nombre </h2>
              <h2> Dia de pago </h2>
              <h2> Pago </h2>
              <div>
                {event.users?.map((user) => {
                  return (
                    <>
                      <h3> {user.name} </h3>
                      <h3> {user.paymentday}</h3>
                      <h3> {user.status}</h3>
                    </>
                  );
                })}
              </div>
            </Style.Card>
          ) : (
            <div>
              <button onClick={() => display(false)}>x</button>
              <p> ...Aún no hay Clases disponibles! </p>
            </div>
          )}
        </Style.Contenedor>

        {/* INICIO DE REVERSO DE LA CARD!*/}

        <div
          style={{
            display: "flex",
            width: "60%",
            height: "45%",
            padding: "2em",
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: "grey",
          }}
        >
          {event ? (
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <button onClick={() => display(false)}>x</button>

              <input
                type="text"
                defaultValue={event.name}
                name="name"
                onChange={(e) => handleChange(e)}
              />
              <button type="submit">Guardar</button>
              <button onClick={(e) => handleFlip(e)}>Cancelar</button>
              <img src={fitnesslogo} alt="class-img" />
              <br />
              <input
                type="text"
                defaultValue={event.profesor}
                name="profesor"
                onChange={(e) => handleChange(e)}
              />
              <h2>Profesor</h2>

              <div>
                <h3>Horario </h3>
                <input type="time" name="hour" onChange={(e) => parseHour(e)} />
                <h3>Capacidad </h3>
                <input
                  type="number"
                  name="capacity"
                  onChange={(e) => parseCapacity(e)}
                  min={clients.length}
                />
                <h3> Fecha </h3>
                <input type="date" onChange={(e) => parseDate(e)} />
              </div>

              <div>
                <h3>Agregar usuarios</h3>

                <select onChange={(e) => handleSelect(e)}>
                  <option value="" disabled selected>
                    Lista de usuarios
                  </option>
                  {clients.map((client) => (
                    <option
                      key={client.id}
                      value={client.name}
                      dataid={client.id}
                    >
                      {client.name}
                    </option>
                  ))}
                </select>
                <br />
                {input.users.map((user) => (
                  <div>
                    <span key={user.id}>{user.name}</span>
                    <button onClick={(e) => handleDelete(e, user.name)}>
                      x
                    </button>
                  </div>
                ))}
              </div>
            </form>
          ) : (
            <div>
              <button onClick={() => display(false)}>x</button>
              <p> ...Aún no hay Clases disponibles! </p>
            </div>
          )}
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default ClassesDetail;
