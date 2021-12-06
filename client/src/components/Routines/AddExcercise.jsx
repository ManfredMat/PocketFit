import axios from "axios";
import { useEffect, useState } from "react";

const AddExcercise = (props) => {

    const [excercises, setExcercises] = useState(false);
    const [inputs, setInputs] = useState({
        indexExercise: "default",
        reps: 0,
        description: ""
    })

    const handleInputs = (e) => {

        setInputs({ ...inputs, [e.target.name]: e.target.value });

    }

    const handleAddExcercise = () => {

        props.setExercises(oldState => {
            return {

                ...oldState,
                [props.api]: {
                    ...oldState[props.api],
                    [`block${props.block}`]: [
                        ...oldState[props.api][`block${props.block}`],
                        {
                            id: excercises[inputs.indexExercise].id,
                            name: excercises[inputs.indexExercise].name,
                            repetitions: inputs.reps,
                            notes: inputs.description
                        }
                    ]
                }
            }
        });
        props.setRender(false);

    }

    useEffect(async () => { 

        const exerciseApi = await axios.get(`${REACT_APP_API}/api/exercises/`);
        setExcercises(exerciseApi.data);

    }, [])

    return (

        <div>

            <h3>Agregando Ejercicio a {props.day} bloque {props.block}</h3>

            <label htmlFor="exercises">Ejercicio </label>
            <select id="exercises" name="indexExercise" value={inputs.excercise} onChange={handleInputs}>
                <option value="default">-- Seleccione un ejercicio --</option>
                {excercises
                    ? excercises.map(excercise =>
                        <option key={excercise.id} value={excercises.indexOf(excercise)}>{excercise.name}</option>
                    )
                    : null}
            </select>

            <label htmlFor="repetitions">Repeticiones </label>
            <input type="number" min="0" name="reps" id="repetitions" value={inputs.repetitions} onChange={handleInputs} />

            <label htmlFor="description">Descripción </label>
            <input type="text" name="description" id="description" value={inputs.description} onChange={handleInputs} />

            <button disabled={inputs.indexExercise === 'default'} onClick={handleAddExcercise}>Agregar</button>
            <button>Cancelar</button>

        </div>
    )

}

export default AddExcercise;