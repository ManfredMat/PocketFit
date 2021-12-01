import axios from "axios";
import { useState } from "react";
import EditBlock from "./EditBlock";

const EditDay = (props) => {

    const [renderEditBlock , setRender] = useState({
        render: false,
        block: 1,
        excersices: []
    });

    const [idRoutine, setIdRoutine] = useState({
        block1:'',
        block2:'',
        block3:''
    });

    const [input, setInput] = useState('')

    const handleOnclick = (block,excersices) => {
        
        renderEditBlock.render 
        ? setRender({
            render: false,
            block: 1,
            excersices: []
        }) 
        : setRender({
            render: true,
            block: block,
            excersices: excersices
        });
    }

    const submitChanges = async () => {

        const dayRoutine = {
            kindOfRoutine: input,
            blocks:[idRoutine.block1,idRoutine.block2,idRoutine.block3],
            day:props.api
        }

        const response = await axios.post("http://127.0.0.1:3001/api/routines",dayRoutine);
        props.setRender(false)

        props.setWeekIds({...props.weekIds, [props.api]: response.data.id});

    }

    return (

        <div>
            <div>
                <h3>Editando {props.day}</h3>

                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>

                <div>
                    <h3>Bloque 1</h3>
                    <button onClick={() => handleOnclick(1,[""])}>editar</button>
                </div>

                <div>
                    Ejercicio 1
                    Ejercico 2
                    Ejercicio 3
                </div>
            </div>

            <div>
                <div>
                    <h3>Bloque 2</h3>
                    <button onClick={() => handleOnclick(2,[""])}>editar</button>
                </div>

                <div>
                    Ejercicio 1
                    Ejercico 2
                    Ejercicio 3
                </div>
            </div>

            <div>

                <div>
                    <h3>Bloque 3</h3>
                    <button onClick={() => handleOnclick(3,[""])}>editar</button>
                </div>

                <div>
                    Ejercicio 1
                    Ejercico 2
                    Ejercicio 3
                </div>
            </div>

            <button onClick={submitChanges} disabled={idRoutine.block1.length === 0 || idRoutine.block2.length === 0 || idRoutine.block3.length === 0}>Aceptar</button>

            {renderEditBlock.render ? <EditBlock day={props.day} api={props.api} block={renderEditBlock.block} excersices={renderEditBlock.excersices} setIdRoutine={setIdRoutine} idRoutine={idRoutine} setRender={setRender}/> : null}

        </div>


    )
}

export default EditDay;