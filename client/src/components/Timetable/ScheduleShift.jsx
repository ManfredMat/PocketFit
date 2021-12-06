import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/Actions/actions-users';
import { getTimetable, getAllShifts, postShift, postShiftClean } from '../../redux/Actions/actions-Horarios';
import moment from 'moment';


function ScheduleShift({ display }) {
    let today = moment().format('M-D-YYYY').split("-")
    const users = useSelector(state => state.users.users)
    const putShiftUser = useSelector(state => state.timetable.putShiftUser)
    const allShifts = useSelector(state => state.timetable.allShifts)
    const days = []
    allShifts.forEach((shift) => {
        if (!days.includes(`${shift.day}-${shift.month}-${shift.year}`)) {
            days.push(`${shift.day}-${shift.month}-${shift.year}`)
        }
    })
    const [data, setData] = useState({
        client: "default",
        intervalo: "default",
        date: "default",
    })

    console.log(users)

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
        const body = {
            idUser: data.client,
            idShift: parseInt(data.intervalo)
        }

        dispatch(postShift(body))
        console.log("body:", body)
    }

    const handleOnShiftClean = (e) => {
        e.preventDefault()
        dispatch(postShiftClean())
        setData({
            client: "default",
            intervalo: "default",
            date: "default",
        })
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
                    <select placeholder='Escribe un Nombre'
                        name="client" onChange={(e) => {
                            handleOnChange(e)
                        }} value={data.client}>
                        <option value="default">Elige un cliente...</option>
                        {users.map((user) =>
                            <option value={user.id}>{user.name + " " + user.lastname}</option>
                        )}
                    </select>
                    <label>Horarios</label>
                    <select placeholder='Selecciona un horario' name="intervalo" value={data.intervalo} onChange={(e) => {
                        handleOnChange(e)
                    }}>
                        <option value="default">Elige un horario...</option>
                        {
                            allShifts.filter((shift, index) => (
                                data.date === `${shift.day}-${shift.month}-${shift.year}`))
                                .map((shift) => (
                                    <option value={shift.id}>{shift.beginning + "hs -" + shift.ending + " hs"}</option>
                                ))
                        }

                    </select>
                    <label>Fecha</label>
                    <select type="date" name="date"
                        onChange={(e) => {
                            handleOnChange(e)
                        }} value={data.date}>
                        <option value="default">Elige una fecha...</option>
                        {days.map((date) => <option value={date}>{date}</option>
                        )}
                        {/* {days.map((shift) => <option value={shift.id}>{`${shift.weekday} ${shift.day}/${shift.month}/${shift.year}`}</option>
                        )} */}
                    </select>

                    <button type="submit" onClick={putShiftUser.length >= 1 ? (e) => (e.preventDefault(), console.log("Holas")) : (e) => handleOnSubmit(e)}>Crear</button>
                    {console.log(putShiftUser)}
                    {putShiftUser.length >= 1 && <div>
                        <p>Turno Creado</p>
                        <p>Cliente:</p>
                        <div>{putShiftUser.map((shift) => shift.users ? shift.users.map((user) => <p>{`${user.name} ${user.lastname}`}</p>) : "No se creo")}</div>
                        <p>Dia: {putShiftUser.map((shift) => shift.day)}/{putShiftUser.map((shift) => shift.month)}/{putShiftUser.map((shift) => shift.year)}</p>
                    </div>}
                    <button onClick={(e) => handleOnShiftClean(e)}>Crear Otro</button>
                    <button onClick={() => display(false)}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}

export default ScheduleShift
