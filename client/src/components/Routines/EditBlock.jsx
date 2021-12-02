import axios from "axios";
import { useState } from "react";
import AddExcercise from "./AddExcercise";

const EditBlock = (props) => {

    const [renderAddExcercises, setRender] = useState(false);

    const [inputs, setInputs] = useState({
        rounds: 0,
        kindOfBlock: ""
    })

    const handleInputs = (e) => {

        setInputs({ ...inputs, [e.target.name]: e.target.value })

    }

    const handleOnClick = () => {

        renderAddExcercises
            ? setRender(false)
            : setRender(true)

    }

    const handleAccept = async () => {

        const block = {
            ...inputs,
            rounds: parseInt(inputs.rounds),
            exercises: props.exercises.map(exercise => {return {id: exercise.id, reps: exercise.repetitions, description: exercise.notes}}),
            day: props.api,
            order: props.block,
        }

        props.setWeekChanges(oldState => {return { ...oldState, [props.api]:{...oldState[props.api], blocks:{...oldState[props.api].blocks,[`block${props.block}`]:block}}}})

        // try {

        //     const response = await axios.post("http://127.0.0.1:3001/api/blocks/", block);
        //     props.setIdRoutine({ ...props.idRoutine, [`block${props.block}`]: response.data.id });

        // } catch (e) {
        //     console.log("oups error")
        //     console.log(e)
        // }

        props.setRender({ render: false })
    }

    return (
        <div>

            <div>
                <h3>Editar {props.day} Bloque: {props.block}</h3>
                <button onClick={handleOnClick}>Agregar Ejercicio</button>
            </div>

            <div>
                {props.exercises
                    ? <ul>{props.exercises.map((excercise, i) => <li key={i}>{excercise.name} <br /> repeticiones: {excercise.repetitions}</li>)}</ul>
                    : <p>No hay ejercicios asignados para este día</p>}
            </div>

            <input type="text" name="kindOfBlock" value={inputs.kindOfBlock} onChange={handleInputs} />
            <input type="number" min="0" name="rounds" value={inputs.rounds} onChange={handleInputs} />

            <button onClick={handleAccept}>Aceptar Cambios</button>
            <button >Cancelar</button>

            {renderAddExcercises ? <AddExcercise setRender={setRender} setExercises={props.setExercises} api={props.api} day={props.day} block={props.block} /> : null}

        </div>
    )

}

export default EditBlock;