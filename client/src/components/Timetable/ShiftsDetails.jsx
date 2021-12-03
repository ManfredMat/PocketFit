import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllShifts } from "../../redux/Actions/actions-Horarios"

function ShiftsDetails() {
    const labels = ["Horario", "Dia", "Disponibilidad"]
    const dispatch = useDispatch()
    const allShifts = useSelector(state => state.timetable.allShifts)

    useEffect(() => {
        dispatch(getAllShifts())
    }, [])

    return (
        <div>
            <header>
                <h2>Turnos Sala de Gimnasio</h2>
                <button>Activar Turnos</button>
                <button>Configurar Turnos</button>
                <button>Agendar Turno</button>
            </header>
            <div>
                <h2>Esta Semana</h2>
                {/* Componente shift weekly view */}
            </div>
            <div>
                <h2>Todos los Turnos</h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "2rem ",
                }}>
                    {labels.map((label) => <div>{label}</div>)}
                    {allShifts.map((shift) => (
                        <>
                            <p>{shift.beginning}hs - {shift.ending}hs</p>
                            <p> {shift.day}/{shift.month}/{shift.year}</p>
                            <p>{shift.availability}/{shift.capacity}</p>
                        </>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ShiftsDetails
