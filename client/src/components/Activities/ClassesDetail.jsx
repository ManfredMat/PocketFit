import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleEvent,
  updateEvent,
  getClients,
  getProfessors,
} from "../../redux/Actions/actions-Activities";
import ReactCardFlip from "react-card-flip";
import moment from "moment";
import "moment/locale/es";
import fitnesslogo from "../../assets/img/iconos/fotoperfil.svg";
import Style from "./ClasesDetail.styles";

function ClassesDetail({ id, display, setOverFlow }) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(getSingleEvent(id));
    dispatch(getClients());
    dispatch(getProfessors());
  }, [dispatch, id, value]);

  const event = useSelector((state) => state.activities.event);
  const clients = useSelector((state) => state.activities.clients);
  const professors = useSelector((state) => state.activities.professors);

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
    <Style.BodyGen
    /* style={{
          display: "flex",
          position: "absolute",
          width: "-webkit-fill-available",
          height: "100vh",
          backgroundColor: "#00000070",
          top: 0,
          left: 0,
          alignItems: "center",
          justifyContent: "center",
          zIndex: "7",
      }} */
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Style.Contenedor
        /* style={{
            display: "flex",
            width: "60%",
            height: "45%",
            padding: "2em",
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: "grey", }}*/
        >
          {event ? (
            <Style.Card>
              <Style.Cruz
                onClick={() => {
                  display(false);
                  setOverFlow(false);
                }}
              >
                X
              </Style.Cruz>
              <Style.DivContenedorTitulo>
                <Style.Titulo> {event.name} </Style.Titulo>
                <Style.Edit onClick={(e) => handleFlip(e)}>Editar</Style.Edit>
              </Style.DivContenedorTitulo>
              <Style.ContenedorInfo>
                <Style.Image src={fitnesslogo} alt="class-img" />
                <div>
                  <h1 style={{ fontWeight: "300" }}>{event.profesor}</h1>
                  <Style.Profesor>Profesor</Style.Profesor>
                </div>
                <Style.Info>
                  <Style.DivInfo>
                    <h3>Horario </h3>
                    <Style.DivData> {event.hour} hs. </Style.DivData>
                  </Style.DivInfo>
                  <Style.DivInfo>
                    <h3>Capacidad </h3>
                    <Style.DivData> {event.capacity} </Style.DivData>
                  </Style.DivInfo>
                  <Style.DivInfo>
                    <h3> Día de la semana </h3>
                    <Style.DivData>{event.nameday}</Style.DivData>
                  </Style.DivInfo>
                </Style.Info>
              </Style.ContenedorInfo>
              <Style.Inscriptos> Inscriptos</Style.Inscriptos>
              <div style={{    display: "flex",flexDirection: "column"}}>
              <div
                style={{
                  marginBottom: "1em",
                  display: "flex",
                  gap: "8em",
                  width: "-webkit-fill-available",
                  justifyContent: "space-evenly",
                  marginLeft: ".8em",
                  marginRight: "1.7em"
                }}
              >
                <Style.DatosInscriptos > Nombre </Style.DatosInscriptos>
                <Style.DatosInscriptos > Día de pago </Style.DatosInscriptos>
                <Style.DatosInscriptos > Pago </Style.DatosInscriptos>
              </div>
              <div>
                {event.users?.map((user, index) => {
                  let flag = index % 2 === 0;
                  return (
                    <div
                      style={{
                        display: " flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {flag ? <Style.PropBox> {user.name} </Style.PropBox> : <Style.PropBoxV2> {user.name} </Style.PropBoxV2>}
                      {flag ? (
                        <Style.PropBox> {user.paymentday.slice(0, 10)}</Style.PropBox>
                      ) : (
                        <Style.PropBoxV2> {user.paymentday.slice(0, 10)}</Style.PropBoxV2>
                      )}
                      {flag ? <Style.PropBox> {user.status}</Style.PropBox> : <Style.PropBoxV2> {user.status}</Style.PropBoxV2>}
                    </div>
                  );
                })}
              </div>
              </div>
            </Style.Card>
          ) : (
            <div>
              <button
                onClick={() => {
                  display(false);
                  setOverFlow(false);
                }}
              >
                x
              </button>
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
              <button
                onClick={() => {
                  display(false);
                  setOverFlow(false);
                }}
              >
                x
              </button>

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
              <select name="profesor" onChange={(e) => handleChange(e)}>
                <option value="" disabled selected>
                  Elija uno...
                </option>
                {professors?.map((professor) => (
                  <option key={professor.id} value={professor.name}>
                    {" "}
                    {professor.name}{" "}
                  </option>
                ))}
              </select>
              <h2>Profesor</h2>

              <div>
                <h3>Horario </h3>
                <input type="time" name="hour" onChange={(e) => parseHour(e)} />
                <h3>Capacidad </h3>
                <input
                  type="number"
                  name="capacity"
                  onChange={(e) => parseCapacity(e)}
                  min="1"
                />
                <h3> Día </h3>
                <select name="nameday" onChange={(e) => handleChange(e)}>
                  <option value="" disabled selected>
                    Elija uno...
                  </option>
                  <option value="Lunes">Lunes</option>
                  <option value="Martes">Martes</option>
                  <option value="Miercoles">Miércoles</option>
                  <option value="Jueves">Jueves</option>
                  <option value="Viernes">Viernes</option>
                  <option value="Sabado">Sábado</option>
                </select>
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
              <button
                onClick={() => {
                  display(false);
                  setOverFlow(false);
                }}
              >
                x
              </button>
              <p> ...Aún no hay Clases disponibles! </p>
            </div>
          )}
        </div>
      </ReactCardFlip>
    </Style.BodyGen>
  );
}

export default ClassesDetail;
