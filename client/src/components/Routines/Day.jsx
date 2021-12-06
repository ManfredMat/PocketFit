import { useState } from "react";
import EditDay from "./EditDay";

const Day = (props) => {

    const [renderEdit, setRender] = useState(false);

    const handleOnClick = () => {

        props.setDisableButtons(true)
        setRender(true)

    }

    return (

        <div style={{ margin: '1rem', backgroundColor: "gray", color: 'white', textAlign: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>

                <h3>{props.day}</h3>
                <button disabled={props.disableButtons} onClick={handleOnClick}>editar</button>

            </div>

            {renderEdit
                ? <EditDay
                    setDisableButtons={props.setDisableButtons}
                    day={props.day}
                    api={props.api}
                    setRender={setRender}
                    setWeekChanges={props.setWeekChanges}
                    exercises={props.exercises}
                    setExercises={props.setExercises} />
                : null}

            <p>-------------------</p>

            <h3> -- Bloque 1 -- </h3>

            {props.exercises.block1[0]
                ? <ul>

                    {props.exercises.block1.map((excercise, i) =>
                        <li key={i}>

                            {excercise.name}

                            <br />

                            repeticiones: {excercise.repetitions}

                        </li>
                    )}

                </ul>
                : <p>Sin ejercicios</p>
            }

            <h3> -- Bloque 2 -- </h3>

            {props.exercises.block2[0]
                ? <ul>

                    {props.exercises.block2.map((excercise, i) =>
                        <li key={i}>

                            {excercise.name}

                            <br />

                            repeticiones: {excercise.repetitions}

                        </li>
                    )}

                </ul>
                : <p>Sin ejercicios</p>
            }

            <h3> -- Bloque 3 -- </h3>

            {props.exercises.block3[0]
                ? <ul>{props.exercises.block3.map((excercise, i) =>
                    <li key={i}>

                        {excercise.name}

                        <br /> repeticiones:

                        {excercise.repetitions}

                    </li>
                )}

                </ul>
                : <p>Sin ejercicios</p>
            }


        </div>

    )
}

export default Day;