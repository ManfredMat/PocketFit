import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/Actions/actions-users';
import { getTimetable, getAllShifts } from '../../redux/Actions/actions-Horarios';
import moment from 'moment';


function ScheduleShift({ display }) {
    let today = moment().format('M-D-YYYY').split("-")
    const users = useSelector(state => state.users.users)
    const actualTimetable = useSelector(state => state.timetable.actualTimetable)
    const allShifts = useSelector(state => state.timetable.allShifts)
    const days = []
    allShifts.forEach((shift) => {
        if (!days.includes(`${shift.day}-${shift.month}-${shift.year}`)) {
            days.push(`${shift.day}-${shift.month}-${shift.year}`)
        }
    })
    const [data, setData] = useState({
        /* cliente guarda el id de cliente */
        client: "",
        /* El intervalo guarda el shif id */
        intervalo: "",
        date: "",
    })

    function handleOnChange(e) {
        e.preventDefault()
        setData(() => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        })
        console.log(data.intervalo)
        console.log(allShifts)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllShifts(today[2], today[0], today[1]))
        dispatch(getUsers())
        dispatch(getTimetable())
    }, []);


    return (
        <div style={{
            display: "flex", position: "absolute", width: "-webkit-fill-available", height: "100vh", backgroundColor: "#00000070", top: 0, alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                display: "flex", width: "40%", height: "25%", padding: "2em", flexDirection: "column",
                alignItems: "flex-start", backgroundColor: "grey"
            }}>
                <form>
                    <h2>Agendar Turno</h2>
                    <label>Cliente</label>
                    <input list="users" placeholder='Escribe un Nombre'
                        name="client" onChange={(e) => {
                            handleOnChange(e)
                        }} />
                    <datalist id="users">
                        {users.map((user) =>
                            <option value={user.id}>{user.name + " " + user.lastname}</option>
                        )}
                    </datalist>
                    <label>Horarios</label>
                    <select  placeholder='Selecciona un horario' name="intervalo" value={data.beginning+"-"+ data.ending}onChange={(e) => {
                        handleOnChange(e)
                    }}>
                        <option>Elige un horario...</option>
                        {allShifts.filter((shift, index) =>
                            data.date === `${shift.day}-${shift.month}-${shift.year}`)
                            .map((shift) => (
                                <option value={shift.id}>{shift.beginning+"hs -"+ shift.ending + " hs"} </option>
                            ))
                        }
                    </select>
                    <label>Fecha</label>
                    <select type="date" name="date"
                        onChange={(e) => {
                            handleOnChange(e)
                        }} >
                        <option>Elige una fecha...</option>
                        {days.map((date) => <option value={date}>{date}</option>
                        )}
                        {/* {days.map((shift) => <option value={shift.id}>{`${shift.weekday} ${shift.day}/${shift.month}/${shift.year}`}</option>
                        )} */}
                    </select>

                    <button type="submit" onClick={() => display(false)}>Crear</button>
                    <button onClick={() => display(false)}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}

export default ScheduleShift
