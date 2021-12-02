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
                    display: "flex", width: "40%", height: "25%", padding: "2em", flexDirection: "column",
                    alignItems: "flex-start", backgroundColor: "grey"
                }}>
                    <h2>Turno</h2>
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
                    </div>
                
                    {/*  "kindOfShift": "dato",
      "availability": 3,
      "capacity": 10,
      "beginning": "7",
      "ending": "9",
      "weekday": "Miércoles",
      "day": 1,
      "month": 12,
      "year": 2021 */}
                    <button onClick={() => display(false)}>volver</button>
                </div>
            </div>
        </div>
    )
}

export default ShiftsPreview
    ;