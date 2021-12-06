import axios from "axios";
import { useState } from "react";
import EditBlock from "./EditBlock";

const EditDay = (props) => {

    const [renderEditBlock, setRender] = useState({
        render: false,
        block: 1
    });

    const [idRoutine, setIdRoutine] = useState({
        block1: '',
        block2: '',
        block3: ''
    });

    const [input, setInput] = useState('')

    const handleOnclick = (block) => {

        renderEditBlock.render
            ? setRender({
                render: false,
                block: 1,
            })
            : setRender({
                block: block,
                render: true
            });
    }

    const submitChanges = async () => {

        const dayRoutine = {
            kindOfRoutine: input,
            //blocks: [idRoutine.block1, idRoutine.block2, idRoutine.block3],
            day: props.api
        }

        props.setWeekChanges(oldState => {return { ...oldState, [props.api]:{...oldState[props.api], dayRoutine}}})

        // const response = await axios.post("http://127.0.0.1:3001/api/routines", dayRoutine);
        
        // props.setWeekIds({ ...props.weekIds, [props.api]: response.data.id });
        
        props.setRender(false)
    }

    return (

        <div>

            <div>
                <h3>Editando {props.day}</h3>

                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

                <div>
                    <h3>Bloque 1</h3>
                    <button onClick={() => handleOnclick(1)}>editar</button>
                </div>

                <div>
                    {props.exercises.block1
                        ? <ul>{props.exercises.block1.map((excercise, i) => <li key={i}>{excercise.name} <br /> repeticiones: {excercise.repetitions}</li>)}</ul>
                        : <p>No hay ejercicios asignados para este día</p>}
                </div>
            </div>

            <div>
                <div>
                    <h3>Bloque 2</h3>
                    <button onClick={() => handleOnclick(2)}>editar</button>
                </div>

                <div>
                    {props.exercises.block2
                        ? <ul>{props.exercises.block2.map((excercise, i) => <li key={i}>{excercise.name} <br /> repeticiones: {excercise.repetitions}</li>)}</ul>
                        : <p>No hay ejercicios asignados para este día</p>}
                </div>
            </div>

            <div>

                <div>
                    <h3>Bloque 3</h3>
                    <button onClick={() => handleOnclick(3)}>editar</button>
                </div>

                <div>
                    {props.exercises.block3
                        ? <ul>{props.exercises.block3.map((excercise, i) => <li key={i}>{excercise.name} <br /> repeticiones: {excercise.repetitions}</li>)}</ul>
                        : <p>No hay ejercicios asignados para este día</p>}
                </div>
            </div>

            <button onClick={submitChanges} >Aceptar</button>

            {renderEditBlock.render ? <EditBlock day={props.day} api={props.api} setWeekChanges={props.setWeekChanges} block={renderEditBlock.block} exercises={props.exercises[`block${renderEditBlock.block}`]} setIdRoutine={setIdRoutine} idRoutine={idRoutine} setRender={setRender} setExercises={props.setExercises}/> : null}

        </div>


    )
}

export default EditDay;