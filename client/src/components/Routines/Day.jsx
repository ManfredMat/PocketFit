import { useEffect, useState } from "react";
import EditDay from "./EditDay";

const Day = (props) => {

    const [renderEdit, setRender] = useState(false);

    const handleOnClick = () => {

        renderEdit
            ? setRender(false)
            : setRender(true)
    }

    return (
        <div style={{ margin: '1rem' }}>
            <div style={{ display: 'flex' }}>
                <h3>{props.day}</h3>
                <button onClick={handleOnClick}>editar</button>
            </div>

            {renderEdit ? <EditDay day={props.day} api={props.api} setRender={setRender} setWeekChanges={props.setWeekChanges} setWeekIds={props.setWeekIds} weekIds={props.weekIds} exercises={props.exercises} setExercises={props.setExercises} /> : null}

            <div>------------------------</div>
            <div> -- Bloque 1 -- </div>
            {props.exercises.block1
                ? <ul>{props.exercises.block1.map((excercise, i) => <li key={i}>{excercise.name} <br /> repeticiones: {excercise.repetitions}</li>)}</ul>
                : <p>No hay ejercicios asignados para este día</p>}
            <div> -- Bloque 2 -- </div>
            {props.exercises.block2
                ? <ul>{props.exercises.block2.map((excercise, i) => <li key={i}>{excercise.name} <br /> repeticiones: {excercise.repetitions}</li>)}</ul>
                : <p>No hay ejercicios asignados para este día</p>}
            <div> -- Bloque 3 -- </div>
            {props.exercises.block3
                ? <ul>{props.exercises.block3.map((excercise, i) => <li key={i}>{excercise.name} <br /> repeticiones: {excercise.repetitions}</li>)}</ul>
                : <p>No hay ejercicios asignados para este día</p>}


        </div>

    )
}

export default Day;