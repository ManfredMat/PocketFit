import { useState } from "react";
import AddExcercise from "./AddExcercise";
import { AcceptButton, BlockContainer, ButtonContainer, CancelButton, EditBlockContainer, EditDayContainer, ExcerciseContainer, ExerciseDelete, ExerciseP, InputStyle, PopUpContainer, WeekDayContainer } from "./Routines.styles";

const EditBlock = (props) => {

    const [renderAddExcercises, setRender] = useState(false);

    const [exercises, setExercises] = useState(props.exercises);

    const [inputs, setInputs] = useState({
        rounds: props.weekChanges[props.api].blocks[`block${props.block}`].rounds,
        kindOfBlock: props.weekChanges[props.api].blocks[`block${props.block}`].kindOfBlock
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

    const deleteExercise = (indexDelete) => {

        let filteredExcercises = exercises.filter((excercise, index) => {

            if(index !== indexDelete) return true;
            else return false

        })

        setExercises(filteredExcercises);

    }

    return (
        <>
            <PopUpContainer>
                <EditDayContainer>

                    <h3>Bloque {props.block} <span>| {props.day} </span> </h3>

                    <EditBlockContainer>

                        <div className='Block'>
                            <div className='Scale'>
                                <WeekDayContainer center={true} block={`${props.block}`}>
                                    <p className='number'>{props.block}</p>
                                </WeekDayContainer>

                                <BlockContainer block={`${props.block}`}>
                                    <ExcerciseContainer>
                                        {exercises[0]
                                            ? exercises.map((excercise, i) =>
                                                <ExerciseP key={i}>

                                                    {excercise.name} x {excercise.repetitions}

                                                    <ExerciseDelete onClick={() => deleteExercise(i)}>Eliminar</ExerciseDelete>

                                                </ExerciseP>
                                            )
                                            : <ExerciseP inactive={true}>Sin ejercicios</ExerciseP>}
                                    </ExcerciseContainer>
                                </BlockContainer>
                            </div>
                        </div>

                        <div className='Inputs'>

                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <AcceptButton onClick={handleOnClick}>Agregar Ejercicio</AcceptButton>
                            </div>

                            <div>
                                <div className='InputsContainer'>
                                    <label htmlFor='kindOfBlock'>Tipo de bloque</label>
                                    <InputStyle
                                        id='kindOfBlock'
                                        type="text"
                                        name="kindOfBlock"
                                        placeholder='Ingresa el tipo de bloque...'
                                        value={inputs.kindOfBlock}
                                        onChange={handleInputs} />
                                </div>
                                <div className='InputsContainer'>
                                    <label htmlFor='rounds'>Repeticiones del bloque</label>
                                    <InputStyle
                                        id='rounds'
                                        type="number"
                                        min="0"
                                        name="rounds"
                                        value={inputs.rounds}
                                        onChange={handleInputs} />
                                </div>
                            </div>

                        </div>

                    </EditBlockContainer>

                    <ButtonContainer>
                        <AcceptButton onClick={handleAccept}>Aceptar</AcceptButton>
                        <CancelButton onClick={() => props.setRender({ render: false })}>Cancela</CancelButton>
                    </ButtonContainer>

                </EditDayContainer>

            </PopUpContainer>

            {
                renderAddExcercises
                    ? <AddExcercise
                        setRender={setRender}
                        setExercises={setExercises}
                        api={props.api}
                        day={props.day}
                        block={props.block} />
                    : null
            }

        </>
    )

}

export default EditBlock;