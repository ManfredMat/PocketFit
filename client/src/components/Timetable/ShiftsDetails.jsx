import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllShifts } from "../../redux/Actions/actions-Horarios"
import ShiftWeeklyView from './ShiftWeeklyView'
import ScheduleShift from "./ScheduleShift";
import ShiftsConfig from "./ShiftsConfig";
import ShiftActivate from './ShiftActivate';
import moment from 'moment';


function ShiftsDetails() {
    let today = moment().format('M-D-YYYY').split("-")
    const labels = ["Horario", "Dia", "Disponibilidad"]
    const dispatch = useDispatch()
    const allShifts = useSelector(state => state.timetable.allShifts)
    const [configTurnos, setconfigTurnos] = React.useState(false)
    const [activateShifts, setActivateShifts] = React.useState(false)
    const [takeShift, setTakeShift] = React.useState(false)

    useEffect(() => {
        dispatch(getAllShifts(today[2], today[0], today[1]))
    }, [dispatch , today])

    console.log("hola", allShifts)
    return (

        /* Aca hacer logica con style componentes para que si se activan los estados de los carteles el heigth sea fijo y el overFlowY quede hidden */
        <div style={{ position: "relative", width: "-webkit-fill-available", height: "-webkit-fill-available" }}>
            <div style={{ padding: "1rem", position: "relative" }}>
                <header>
                    <h2>Turnos Sala de Gimnasio</h2>
                    <button onClick={() => setActivateShifts(!activateShifts)}>Activar Turnos</button>
                    <button onClick={() => setconfigTurnos(!configTurnos)}>Configurar Turnos</button>
                    <button onClick={() => setTakeShift(!takeShift)}>Agendar Turno</button>
                </header>
                <div>
                    <h2>Esta Semana</h2>
                    <ShiftWeeklyView />
                </div>
                <div>
                    <h2>Todos los Turnos</h2>
                    <p>Proximamente Filtros</p>
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
            {takeShift &&
                <ScheduleShift display={setTakeShift} />}
            {configTurnos &&
                <ShiftsConfig display={setconfigTurnos} />}
            {activateShifts &&
                <ShiftActivate display={setActivateShifts} />}
        </div>
    )
}

export default ShiftsDetails
