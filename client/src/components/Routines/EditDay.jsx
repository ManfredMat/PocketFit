import { useState } from "react";
import EditBlock from "./EditBlock";

const EditDay = (props) => {

    const [renderEditBlock, setRender] = useState({
        render: false,
        block: 1
    });

    const [input, setInput] = useState('')

    const handleOnclick = (block) => {

        setRender({ block: block, render: true });

    }

    const submitChanges = () => {

        const dayRoutine = {
            kindOfRoutine: input,
            day: props.api
        }

        props.setWeekChanges(oldState => {

            return {
                ...oldState,
                [props.api]: {
                    ...oldState[props.api],
                    dayRoutine
                }
            }

        })

        props.setRender(false)
        props.setDisableButtons(false)

    }

    return (

        <div style={{ backgroundColor: '#382506', position: 'fixed', width: '70vw', minHeight: '20rem', textAlign: 'center', top: '10vh', left: '15vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>

            <h3>{props.day}</h3>

            <label htmlFor="kindOfRoutine">Tipo de Rutina</label>
            <input
                id="kindOfRoutine"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} />

            <div style={{ display: "flex", width: '100%', justifyContent: 'space-evenly' }}>

                <div>

                    <div>
                        <h3>Bloque 1</h3>
                        <button onClick={() => handleOnclick(1)}>editar</button>
                    </div>

                    <div>

                        {props.exercises.block1[0]
                            ? <ul>{props.exercises.block1.map((excercise, i) =>
                                <li key={i}>

                                    {excercise.name}

                                    <br />

                                    repeticiones: {excercise.repetitions}

                                </li>
                            )}
                            </ul>
                            : <p>Sin ejercicios</p>}

                    </div>
                </div>

                <div>
                    <div>
                        <h3>Bloque 2</h3>
                        <button onClick={() => handleOnclick(2)}>editar</button>
                    </div>

                    <div>
                        {props.exercises.block2[0]
                            ? <ul>{props.exercises.block2.map((excercise, i) =>
                                <li key={i}>

                                    {excercise.name}

                                    <br />

                                    repeticiones: {excercise.repetitions}

                                </li>
                            )}
                            </ul>
                            : <p>Sin ejercicios</p>}
                    </div>
                </div>

                <div>

                    <div>
                        <h3>Bloque 3</h3>
                        <button onClick={() => handleOnclick(3)}>editar</button>
                    </div>

                    <div>
                        {props.exercises.block3[0]
                            ? <ul>{props.exercises.block3.map((excercise, i) =>
                                <li key={i}>

                                    {excercise.name}

                                    <br />

                                    repeticiones: {excercise.repetitions}

                                </li>
                            )}
                            </ul>
                            : <p>Sin ejericios</p>}
                    </div>
                </div>

            </div>

            <button onClick={submitChanges} >Aceptar</button>

            {renderEditBlock.render
                ? <EditBlock
                    day={props.day}
                    api={props.api}
                    setWeekChanges={props.setWeekChanges}
                    block={renderEditBlock.block}
                    exercises={props.exercises[`block${renderEditBlock.block}`]}
                    setRender={setRender}
                    setExercises={props.setExercises} />
                : null}

        </div>


    )
}

export default EditDay;