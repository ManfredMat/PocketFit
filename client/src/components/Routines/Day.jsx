import { useState } from "react";
import EditDay from "./EditDay";
import { BlockContainer, EditButton, ExcerciseContainer, ExerciseP, KindOfBlockContainer, RoundsContainer, WeekDayContainer } from "./Routines.styles";
import editIcon from '../../assets/img/iconos/editIcon.svg'

const Day = (props) => {

    const [renderEdit, setRender] = useState(false);

    const handleOnClick = () => {

        props.setDisableButtons(true)
        setRender(true)

    }

    return (

        <div>

            <WeekDayContainer>

                <p>{props.day}</p>
                <EditButton disabled={props.disableButtons} onClick={handleOnClick}>
                    <img height='25rem' src={editIcon} alt="" />
                </EditButton>

            </WeekDayContainer>

            {renderEdit
                ? <EditDay
                    setDisableButtons={props.setDisableButtons}
                    day={props.day}
                    api={props.api}
                    setRender={setRender}
                    setWeekChanges={props.setWeekChanges}
                    weekChanges={props.weekChanges}
                    exercises={props.exercises}
                    setExercises={props.setExercises} />
                : null}

            <BlockContainer block='1'>

                <ExcerciseContainer>

                    {props.weekChanges[props.api]
                        ? props.weekChanges[props.api].blocks.block1.kindOfBlock
                            ? <KindOfBlockContainer>{props.weekChanges[props.api].blocks.block1.kindOfBlock}</KindOfBlockContainer>
                            : null
                        : null}

                    {props.exercises.block1[0]
                        ? props.exercises.block1.map((excercise, i) =>
                            <ExerciseP key={i}>

                                {excercise.name} x {excercise.repetitions}

                            </ExerciseP>
                        )
                        : <ExerciseP inactive={true}>Sin ejercicios</ExerciseP>
                    }

                    {
                        props.weekChanges[props.api]
                            ? <RoundsContainer>Rounds: {props.weekChanges[props.api].blocks.block1.rounds}</RoundsContainer>
                            : null
                    }

                </ExcerciseContainer>

            </BlockContainer>

            <BlockContainer block='2'>

                <ExcerciseContainer>

                    {props.weekChanges[props.api]
                        ? props.weekChanges[props.api].blocks.block2.kindOfBlock
                            ? <KindOfBlockContainer>{props.weekChanges[props.api].blocks.block2.kindOfBlock}</KindOfBlockContainer>
                            : null
                        : null}

                    {props.exercises.block2[0]
                        ? props.exercises.block2.map((excercise, i) =>
                            <ExerciseP key={i}>

                                {excercise.name} x {excercise.repetitions}

                            </ExerciseP>
                        )
                        : <ExerciseP inactive={true}>Sin ejercicios</ExerciseP>
                    }

                    {
                        props.weekChanges[props.api]
                            ? <RoundsContainer>Rounds: {props.weekChanges[props.api].blocks.block2.rounds}</RoundsContainer>
                            : null
                    }

                </ExcerciseContainer>
            </BlockContainer>

            <BlockContainer block='3'>
                <ExcerciseContainer>

                    {props.weekChanges[props.api]
                        ? props.weekChanges[props.api].blocks.block3.kindOfBlock
                            ? <KindOfBlockContainer>{props.weekChanges[props.api].blocks.block3.kindOfBlock}</KindOfBlockContainer>
                            : null
                        : null}

                    {props.exercises.block3[0]
                        ? props.exercises.block3.map((excercise, i) =>
                            <ExerciseP key={i}>

                                {excercise.name} x {excercise.repetitions}

                            </ExerciseP>
                        )
                        : <ExerciseP inactive={true}>Sin ejercicios</ExerciseP>
                    }

                    {
                        props.weekChanges[props.api]
                            ? <RoundsContainer>Rounds: {props.weekChanges[props.api].blocks.block3.rounds}</RoundsContainer>
                            : null
                    }

                </ExcerciseContainer>
            </BlockContainer>


        </div>

    )
}

export default Day;
