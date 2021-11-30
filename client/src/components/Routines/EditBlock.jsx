import axios from "axios";
import { useState } from "react";
import AddExcercise from "./AddExcercise";

const EditBlock = (props) => {

    const [excercises, setExcercises] = useState([]);
    const [renderAddExcercises, setRender] = useState(false);
    const [inputs, setInputs] = useState({
        rounds: 0,
        kindOfBlock: ""
    })

    const handleInputs = (e) => {

        setInputs({...inputs, [e.target.name]: e.target.value})

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
            exercises:excercises,
            day: props.api,
            order: props.block,
        }

        try{

            const response = await axios.post("http://127.0.0.1:3001/api/blocks/",block);

            props.setIdRoutine({...props.idRoutine,[`block${props.block}`]:response.data.id});

        } catch(e){
            console.log("oups error")
            console.log(e)
        }
        
        console.log("Acabo!");
    }

    return (
        <div>

            <div>
                <h3>Editar {props.day} Bloque: {props.block}</h3>
                <button onClick={handleOnClick}>Agregar Ejercicio</button>
            </div>

            <div>
                <p>Ejercicio 1</p>
                <p>Ejercicio 2</p>
                <p>Ejercicio 3</p>
                <p>Ejercicio 4</p>
            </div>

            <input type="text" name="kindOfBlock" value={inputs.kindOfBlock} onChange={handleInputs}/>
            <input type="number" min="0" name="rounds" value={inputs.rounds} onChange={handleInputs}/>

            <button onClick={handleAccept}>Aceptar Cambios</button>
            <button >Cancelar</button>

            {renderAddExcercises ? <AddExcercise setRender = {setRender} setExcercises={setExcercises} excercises={excercises} day={props.day} block={props.block}/> : null}

        </div>
    )

}

export default EditBlock;

const block = {
    day : "string",
    order : 1,
    excercises : [
        {
            id:"id",
            reps: 1,
            description:""
        },
    ]
}