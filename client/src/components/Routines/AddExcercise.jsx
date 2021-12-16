import axios from "axios";
import { useEffect, useState } from "react";
import { AcceptButton, ButtonContainer, CancelButton, EditDayContainer, InputLabelContainer, InputStyle, PopUpContainer, SelectStyle } from "./Routines.styles";
const { REACT_APP_API} = process.env;

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

            return [
                ...oldState,
                {
                    id: excercises[inputs.indexExercise].id,
                    name: excercises[inputs.indexExercise].name,
                    repetitions: inputs.reps,
                    notes: inputs.description
                }
            ]

        });

        props.setRender(false);

    }

    const getExcercises = async () => {

        const exerciseApi = await axios.get(`${REACT_APP_API}/api/exercises/`);
        setExcercises(exerciseApi.data);

    }

    useEffect(() => {

        getExcercises();

    }, [])

    return (

        <PopUpContainer>
            <EditDayContainer>

                <h3>Bloque {props.block}<span> | {props.day}</span></h3>
                <h2>Agregar Ejercicio</h2>


                <InputLabelContainer>
                    <label htmlFor="exercises">Ejercicio </label>
                    <SelectStyle
                        id="exercises"
                        name="indexExercise"
                        value={inputs.excercise}
                        onChange={handleInputs}>

                        <option value="default">-- Seleccione un ejercicio --</option>

                        {excercises
                            ? excercises.map(excercise =>
                                <option
                                    key={excercise.id}
                                    value={excercises.indexOf(excercise)}>

                                    {excercise.name}

                                </option>
                            )
                            : null}

                    </SelectStyle>
                </InputLabelContainer>

                <InputLabelContainer>
                    <label htmlFor="repetitions">Repeticiones </label>
                    <InputStyle
                        type="number"
                        min="0"
                        name="reps"
                        id="repetitions"
                        value={inputs.reps}
                        onChange={handleInputs} />
                </InputLabelContainer>

                <InputLabelContainer>
                    <label htmlFor="description">Descripción </label>
                    <InputStyle
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Descripción del ejercicio..."
                        value={inputs.description}
                        onChange={handleInputs}
                        style={{marginBottom: '3rem'}} />
                </InputLabelContainer>

                <ButtonContainer>
                    <AcceptButton disabled={inputs.indexExercise === 'default'} onClick={handleAddExcercise}>Agregar</AcceptButton>
                    <CancelButton onClick={() => props.setRender(false)}>Cancelar</CancelButton>
                </ButtonContainer>

            </EditDayContainer>
        </PopUpContainer>
    )

}

export default AddExcercise;