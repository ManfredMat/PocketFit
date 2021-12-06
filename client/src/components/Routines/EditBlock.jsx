import { useEffect, useState } from "react";
import AddExcercise from "./AddExcercise";

const EditBlock = (props) => {

    const [renderAddExcercises, setRender] = useState(false);

    const [exercises, setExercises] = useState(props.exercises);

    const [inputs, setInputs] = useState({
        rounds: 0,
        kindOfBlock: ""
    })

    const handleInputs = (e) => {

        setInputs({ ...inputs, [e.target.name]: e.target.value })

    }

    const handleOnClick = () => {

        setRender(true)

    }

    const upgradeExercises = () => {

        props.setExercises(oldState => {

            return {

                ...oldState,
                [props.api]:
                {
                    ...oldState[props.api],
                    [`block${props.block}`]: exercises
                }
            }
        });

    }
    const handleAccept = () => {

        upgradeExercises();

        const block = {

            ...inputs,
            rounds: parseInt(inputs.rounds),
            day: props.api,
            order: props.block,
            exercises: exercises.map(exercise => {

                return {
                    id: exercise.id,
                    reps: exercise.repetitions,
                    description: exercise.notes
                }

            })

        }

        props.setWeekChanges(oldState => {

            return {
                ...oldState,
                [props.api]: {
                    ...oldState[props.api],
                    blocks: {
                        ...oldState[props.api].blocks,
                        [`block${props.block}`]: block
                    }
                }
            }
        })

        props.setRender({ render: false })
    }

    return (
        <div style={{ backgroundColor: '#4a0808', position: 'fixed', width: '70vw', minHeight: '20rem', textAlign: 'center', top: '10vh', left: '15vw', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly' }}>

            <div>
                <h3>Editar {props.day} Bloque: {props.block}</h3>
                <button onClick={handleOnClick}>Agregar Ejercicio</button>
            </div>

            <div>
                <h3>Ejercicios:</h3>
                {exercises[0]
                    ? <ul>{exercises.map((excercise, i) =>
                        <li key={i}>

                            {excercise.name}

                            <br />

                            repeticiones: {excercise.repetitions}
                            
                        </li>
                    )}
                    </ul>
                    : <p>Sin ejercicios</p>}
            </div>

            <label htmlFor='kindOfBlock'>Tipo de bloque</label>
            <input
                id='kindOfBlock'
                type="text"
                name="kindOfBlock"
                value={inputs.kindOfBlock}
                onChange={handleInputs} />

            <label htmlFor='rounds'>Repeticiones del bloque</label>
            <input
                id='rounds'
                type="number"
                min="0"
                name="rounds"
                value={inputs.rounds}
                onChange={handleInputs} />

            <button onClick={handleAccept}>Aceptar Cambios</button>
            <button onClick={() => props.setRender({render: false})}>Cancelar</button>

            {renderAddExcercises
                ? <AddExcercise
                    setRender={setRender}
                    setExercises={setExercises}
                    api={props.api}
                    day={props.day}
                    block={props.block} />
                : null
            }

        </div>
    )

}

export default EditBlock;