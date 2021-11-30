import axios from "axios";
import { useEffect, useState } from "react";

const AddExcercise = (props) => {

    const [excercises, setExcercises] = useState(false);
    const [inputs, setInputs] = useState({
        id: "default",
        reps: 0,
        description: ""
    })

    const handleInputs = (e) => {

        setInputs({...inputs, [e.target.name]: e.target.value});

    }

    const handleAddExcercise = () => {

        props.setExcercises([...props.excercises,{...inputs, reps: parseInt(inputs.reps)}]);
        props.setRender(false);

    }

    useEffect( async () => {

        const exerciseApi = await axios.get("http://127.0.0.1:3001/api/exercises/");
        setExcercises(exerciseApi.data);

    },[])

    return(

        <div>

            <h3>Agregando Ejercicio a {props.day} bloque {props.block}</h3>

            <label htmlFor="exercises">Ejercicio </label>
            <select id="exercises" name="id" value={inputs.excercise} onChange={handleInputs}>
                    <option value="default">-- Seleccione un ejercicio --</option>
                {excercises 
                ? excercises.map(excercise => 
                    <option key = {excercise.id} value = {excercise.id}>{excercise.name}</option>    
                )
                :null}
            </select>

            <label htmlFor="repetitions">Repeticiones </label>            
            <input type="number" min="0" name="reps" id="repetitions" value={inputs.repetitions} onChange={handleInputs}/>

            <label htmlFor="description">Descripción </label>            
            <input type="text" name="description" id="description" value={inputs.description} onChange={handleInputs}/>

            <button onClick={handleAddExcercise}>Agregar</button>
            <button >Cancelar</button>

        </div>
    )

}

export default AddExcercise;