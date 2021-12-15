import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Styles from "./Styles/ShiftPreviewStyled";



function ShiftsPreview({ display,setOverFlow }) {
    const shiftSelect = useSelector(state => state.timetable.shiftSelect)

    console.log(shiftSelect)
    return (
            <Styles.BodyStyled>
                <Styles.BoxStyle>
                    <h2>Turno</h2>
                    <Styles.CloseButton  onClick={() => {
                        display(false);
                        setOverFlow(false);
                      }}>
                x
              </Styles.CloseButton>
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
                </Styles.BoxStyle>
            </Styles.BodyStyled>
    )
}

export default ShiftsPreview
    ;