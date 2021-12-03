import React from 'react'
import { useSelector, useDispatch } from "react-redux"


function ShiftsPreview({ display }) {
    const shiftSelect = useSelector(state => state.timetable.shiftSelect)

    return (
        <div>
            <div style={{
                display: "flex", position: "absolute", width: "-webkit-fill-available", height: "100vh", backgroundColor: "#00000070", top: 0, alignItems: "center",
                justifyContent: "center"
            }}>
                <div style={{
                    display: "flex", width: "40%", height: "35%", padding: "2em", flexDirection: "column",
                    alignItems: "flex-start", backgroundColor: "grey"
                }}>
                    <h2>Turno</h2>
                    <div style={{
                        display: "flex"
                    }}>
                        <div>
                            <h3>Horarios</h3>
                            <p>{shiftSelect.beginning}hs - {shiftSelect.ending}hs</p>
                            <h3>Fecha</h3>
                            <p>{shiftSelect.weekday}</p>
                            <p> {shiftSelect.day}/{shiftSelect.month}/{shiftSelect.year}</p>
                            <h3>Disponibilidad</h3>
                            <p>{shiftSelect.availability}/{shiftSelect.capacity}</p>
                        </div>
                        <div>
                            <h3>Clientes</h3>
                            <button>Agendar Turno</button>
                            {shiftSelect.users ? <div>
                                {shiftSelect.users.map((user) => (
                                    <div>
                                        <img src="https://picsum.photos/40"/>
                                        <h4>{user.name} {user.lastname}</h4>
                                    </div>
                                ))}
                            </div>
                                : <p>Aun no hay turnos</p>}
                        </div>
                    </div>
                    <button onClick={() => display(false)}>volver</button>
                </div>
            </div>
        </div>
    )
}

export default ShiftsPreview
    ;