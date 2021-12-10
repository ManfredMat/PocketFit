import { useState } from "react";
import EditBlock from "./EditBlock";
import { AcceptButton, BackPop, BlockContainer, BlockEditDayContainer, ButtonContainer, EditButton, EditDayContainer, ExcerciseContainer, ExerciseP, InputStyle, PopUpContainer, WeekDayContainer } from "./Routines.styles";
import editIcon from '../../assets/img/iconos/editIcon.svg';

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

        <BackPop>

            <PopUpContainer>

                <EditDayContainer>

                    <h3>{props.day}</h3>

                    <div className='InputContainer'>
                        <label htmlFor="kindOfRoutine">Tipo de Rutina</label>
                        <InputStyle
                            id="kindOfRoutine"
                            type="text"
                            value={input}
                            placeholder='Escriba un tipo de rutina...'
                            onChange={(e) => setInput(e.target.value)} />
                    </div>

                    <BlockEditDayContainer>

                        <div>

                            <WeekDayContainer>

                                <p className='number'>1</p>
                                <EditButton onClick={() => handleOnclick(1)}>
                                    <img height='25rem' src={editIcon} alt="" />
                                </EditButton>

                            </WeekDayContainer>

                            <BlockContainer block='1'>
                                <ExcerciseContainer>
                                    {props.exercises.block1[0]
                                        ? props.exercises.block1.map((excercise, i) =>
                                            <ExerciseP key={i}>

                                                {excercise.name} x {excercise.repetitions}

                                            </ExerciseP>
                                        )
                                        : <ExerciseP inactive={true}>Sin ejercicios</ExerciseP>}
                                </ExcerciseContainer>
                            </BlockContainer>

                        </div>

                        <div>

                            <WeekDayContainer block='2'>

                                <p className='number'>2</p>
                                <EditButton onClick={() => handleOnclick(2)}>
                                    <img height='25rem' src={editIcon} alt="" />
                                </EditButton>

                            </WeekDayContainer>

                            <BlockContainer block='2'>
                                <ExcerciseContainer>
                                    {props.exercises.block2[0]
                                        ? props.exercises.block2.map((excercise, i) =>
                                            <ExerciseP key={i}>

                                                {excercise.name} x {excercise.repetitions}

                                            </ExerciseP>
                                        )
                                        : <ExerciseP inactive={true}>Sin ejercicios</ExerciseP>}
                                </ExcerciseContainer>
                            </BlockContainer>

                        </div>

                        <div>

                            <WeekDayContainer block='3'>

                                <p className='number'>3</p>
                                <EditButton onClick={() => handleOnclick(3)}>
                                    <img height='25rem' src={editIcon} alt="" />
                                </EditButton>

                            </WeekDayContainer>

                            <BlockContainer block='3'>
                                <ExcerciseContainer>
                                    {props.exercises.block3[0]
                                        ? props.exercises.block3.map((excercise, i) =>
                                            <ExerciseP key={i}>

                                                {excercise.name} x {excercise.repetitions}

                                            </ExerciseP>
                                        )
                                        : <ExerciseP inactive={true}>Sin ejericios</ExerciseP>}
                                </ExcerciseContainer>
                            </BlockContainer>

                        </div>

                    </BlockEditDayContainer>

                    <ButtonContainer>
                        <AcceptButton onClick={submitChanges} >Aceptar</AcceptButton>
                    </ButtonContainer>

                </EditDayContainer>

            </PopUpContainer>

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

        </BackPop>

    )
}

export default EditDay;