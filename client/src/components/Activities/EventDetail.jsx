import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleEvent,
  updateEvent,
} from "../../redux/Actions/actions-Activities";
import ReactCardFlip from "react-card-flip";
import moment from "moment";
import "moment/locale/es";
import Style from "./EventDetail.styles";

function EventDetail({ id, display }) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(getSingleEvent(id));
  }, [dispatch, id, value]);

  const event = useSelector((state) => state.activities.event);

  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip(e) {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

  moment.locale();

  const [input, setInput] = useState({
    photo: null,
    name: event.name,
    description: "",
    month: 0,
    hour: 0,
    day: 0,
    nameday: "",
    capacity: 0,
  });

  const data = new FormData();
  data.append("photo", input.photo);
  data.append("name", input.name);
  data.append("description", input.description);
  data.append("month", input.month);
  data.append("hour", input.hour);
  data.append("day", input.day);
  data.append("nameday", input.nameday);
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
    dispatch(updateEvent(data, event.id));
    alert("Evento Actualizado!");
    setValue(value + 1);
    handleFlip(e);
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
        zIndex: "5",
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
              <Style.Titulo>Evento especial {event.name}</Style.Titulo>
              <Style.ContenedorInfo>
                <Style.Image
                  src={`data:image/jpeg;base64, ${event.imageData}`}
                  alt="event-img"
                />
                <Style.Info>
                  <Style.DivInfo>
                    <h3>Horario </h3>
                    <Style.DivData>{event.hour} hs.</Style.DivData>
                  </Style.DivInfo>
                  <Style.DivInfo>
                    {" "}
                    <h3>Capacidad</h3>
                    <Style.DivData> {event.capacity}</Style.DivData>{" "}
                  </Style.DivInfo>
                  <Style.DivInfo>
                    {" "}
                    <h3> Fecha </h3>
                    <Style.DivData>
                      {" "}
                      {event.day} / {event.month}{" "}
                    </Style.DivData>
                  </Style.DivInfo>
                </Style.Info>
              </Style.ContenedorInfo>
              <Style.ContenedorEdit>
                <div
                  style={{
                    marginBottom: "1em",
                    display: "flex",
                    width: "-webkit-fill-available",
                    justifyContent: "space-between",
                  }}
                >
                  <Style.Descripcion> Descripción</Style.Descripcion>

                  <Style.Edit onClick={(e) => handleFlip(e)}>Editar</Style.Edit>
                </div>
                <Style.ContenedorDescripcion>
                  {" "}
                  {event.description}{" "}
                </Style.ContenedorDescripcion>
              </Style.ContenedorEdit>
              {/* <Style.ContenedorDescripcion> {event.description} </Style.ContenedorDescripcion> */}
            </Style.Card>
          ) : (
            <div>
              <div onClick={() => display(false)}>x</div>
              <p> ...Aún no hay eventos disponibles! </p>
            </div>
          )}
        </Style.Contenedor>

        {/* INICIO DE REVERSO DE LA CARD!*/}
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "-webkit-fill-available",
            height: "100vh",
            backgroundColor: "#00000070",
            top: 0,
            alignItems: "center",
            justifyContent: "center",
            zIndex: "7",
          }}
        >
          {event ? (
            <Style.Contenedor
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Style.Cruz onClick={() => display(false)}>x</Style.Cruz>
              <Style.DivEditFlip>
                <Style.InputTitle
                  type="text"
                  defaultValue={event.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
                <Style.DivBotonesFlip>
                  <Style.EditGuardar
                    type="submit"
                    onClick={(e) => handleSubmit(e)}>
                      Guardar
                  </Style.EditGuardar>
                  <Style.EditCancel onClick={(e) => handleFlip(e)}>
                    Cancelar
                  </Style.EditCancel>
                </Style.DivBotonesFlip>
              </Style.DivEditFlip>

              <div name="gral" style={{ display: "flex", flexDirection: "column" }}>
                <div name="first-row" style={{display: "flex", justifyContent: "space-between",
                  alignItems: "center"}}>
                  
                  <Style.Image2
                    src={`data:image/jpeg;base64, ${event.imageData}`}
                    alt="event-img"
                  />

                  <Style.Info2>
                    <Style.DivInfo2
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Style.DivData2>Horario </Style.DivData2>
                      <Style.InputEdit
                        type="time"
                        name="hour"
                        onChange={(e) => parseHour(e)}
                      />
                    </Style.DivInfo2>
                    <Style.DivInfo2
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Style.DivData2>Capacidad </Style.DivData2>
                      <Style.InputEdit
                        type="number"
                        name="capacity"
                        onChange={(e) => parseCapacity(e)}
                      />
                    </Style.DivInfo2>
                    <Style.DivInfo2
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Style.DivData2> Fecha </Style.DivData2>
                      <Style.InputEdit
                        type="date"
                        onChange={(e) => parseDate(e)}
                      />
                    </Style.DivInfo2>
                  </Style.Info2>
                </div>
                <div name="second-row">
                  <div style={{display:"flex", justifyContent: "flex-end"}}>
                    <Style.Edit2 for="files" class="btn">
                      Editar Foto
                    </Style.Edit2>
                    <input
                      type="file"
                      name="photo"
                      id="files"
                      accept=".jpg, .jpeg"
                      style={{ visibility: "hidden", width:"1em" }}
                      onChange={(e) =>
                        setInput({ ...input, photo: e.target.files[0] })
                      }
                    />
                  </div>
                </div>
                <div name="third-row">
                  <div>
                    <Style.Descripcion2>Descripción</Style.Descripcion2>
                    <Style.InputDescripcion placeholder="" rows="5" cols="77" 
                      name="description"
                      onChange={(e) => handleChange(e)}>
                    </Style.InputDescripcion>
                  </div>
                </div>
              </div>
            </Style.Contenedor>
          ) : (
            <div>
              <button onClick={() => display(false)}>x</button>
              <p> ...Aún no hay eventos disponibles! </p>
            </div>
          )}
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default EventDetail;
