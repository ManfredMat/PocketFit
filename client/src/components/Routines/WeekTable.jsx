import axios from "axios";
import { useEffect, useState } from "react";
import Day from "./Day";
import { DayContainer, LeftBarContainer, SaveDeleteChanges } from "./Routines.styles";

const weekDays = [
    {
        day: 'Lunes',
        api: 'monday'
    },
    {
        day: 'Martes',
        api: 'tuesday'
    },
    {
        day: 'Miércoles',
        api: 'wendsday'
    },
    {
        day: 'Jueves',
        api: 'thursday'
    },
    {
        day: 'Viernes',
        api: 'friday'
    },
    {
        day: 'Sábado',
        api: 'saturday'
    },
]

const exercisesDefaultValue = {

    monday: {
        block1: [],
        block2: [],
        block3: []
    },
    tuesday: {
        block1: [],
        block2: [],
        block3: []
    },
    wendsday: {
        block1: [],
        block2: [],
        block3: []
    },
    thursday: {
        block1: [],
        block2: [],
        block3: []
    },
    friday: {
        block1: [],
        block2: [],
        block3: []
    },
    saturday: {
        block1: [],
        block2: [],
        block3: []
    },
}

const WeekTable = (props) => {

    let routineRoute = "http://127.0.0.1:3001/api/weekplan";

    const [weekChanges, setWeekChanges] = useState({});

    const [exercises, setExercises] = useState(exercisesDefaultValue)

    const [disableButtons, setDisableButtons] = useState(false)

    const saveChanges = async () => {

        setDisableButtons(true);

            let dayIds = await postBlocks();

            if(props.id) dayIds.user = props.id;

            console.log('+++ DayIDs +++');
            console.log(dayIds);

            let response = await axios.post(routineRoute, dayIds);
            response = await axios.post(routineRoute, dayIds);

            console.log('Response de la week table');
            console.log(response.data);

            await upgradeTable();

        setDisableButtons(false);

    }

    const deleteChanges = async () => {

        setDisableButtons(true);

        await upgradeTable();

        setDisableButtons(false);

    }

    const postBlocks = async () => {

        let weekIds = {};
        console.log("---------- New post ----------")
        for (const key in weekChanges) {

            let routinesIds = [];

            console.log('-----'+key+'-----')

            for (const key2 in weekChanges[key].blocks) {

                console.log('--- Bloque '+key2+' ---')
                console.log(weekChanges[key].blocks[key2])

                let response = await axios.post("http://127.0.0.1:3001/api/blocks/", weekChanges[key].blocks[key2]);

                console.log('--Response--')
                console.log(response.data)

                routinesIds.push(response.data.id);
            }

            weekIds[key] = await postRoutine(routinesIds, weekChanges[key].dayRoutine);
        }

        console.log('+++++weekIds+++++')
        console.log(weekIds)
        return weekIds;

    }

    const postRoutine = async (blocksIds, dayRoutine) => {

        const response = await axios.post("http://127.0.0.1:3001/api/routines", { ...dayRoutine, blocks: blocksIds });
        return response.data.id;
    }

    const upgradeTable = async () => {

        let getRoute = routineRoute;

        if(props.id) getRoute += '/user/' + props.id;
            else getRoute += '/general';

            console.log(getRoute)

        let response = await axios.get(getRoute);
        response = response.data;

        console.log('----- Se llamo a la base de datos -----');
        console.log(response)

        let auxState = {};
        let auxWeekChanges = {};

        weekDays.forEach(day => {

            let key = day.api;

            auxState = {

                ...auxState,
                [key]: response[key]
                    ? response[key].blocks
                        ? {

                            block1: response[key].blocks[0]
                                ? response[key].blocks[0].exercises
                                    ? response[key].blocks[0].exercises.map(exercise => {
                                        return {
                                            name: exercise[0],
                                            repetitions: exercise[1],
                                            notes: exercise[2],
                                            id: exercise[3]
                                        }
                                    })
                                    : []
                                : [],

                            block2: response[key].blocks[1]
                                ? response[key].blocks[1].exercises
                                    ? response[key].blocks[1].exercises.map(exercise => {
                                        return {
                                            name: exercise[0],
                                            repetitions: exercise[1],
                                            notes: exercise[2],
                                            id: exercise[3]
                                        }
                                    })
                                    : []
                                : [],

                            block3: response[key].blocks[2]
                                ? response[key].blocks[2].exercises
                                    ? response[key].blocks[2].exercises.map(exercise => {
                                        return {
                                            name: exercise[0],
                                            repetitions: exercise[1],
                                            notes: exercise[2],
                                            id: exercise[3]
                                        }
                                    })
                                    : []
                                : []
                        }
                        : {
                            block1: [],
                            block2: [],
                            block3: []
                        }
                    : {
                        block1: [],
                        block2: [],
                        block3: []
                    }

            }

            auxWeekChanges = {
                ...auxWeekChanges,
                [key]: response[key]
                    ? {

                        blocks: response[key].blocks
                            ? {

                                block1: response[key].blocks[0]
                                    ? {
                                        day: key,

                                        exercises: response[key].blocks[0].exercises
                                            ? response[key].blocks[0].exercises.map(exercise => {
                                                return {
                                                    reps: exercise[1],
                                                    description: exercise[2],
                                                    id: exercise[3]
                                                }
                                            })
                                            : [],

                                        kindOfBlock: response[key].blocks[0].kindOfBlock
                                            ? response[key].blocks[0].kindOfBlock
                                            : '',
                                        order: 1,
                                        rounds: response[key].blocks[0].rounds
                                            ? response[key].blocks[0].rounds
                                            : 0
                                    }
                                    : {
                                        day: key,

                                        exercises: [],

                                        kindOfBlock: '',
                                        order: 1,
                                        rounds: 0
                                    },

                                block2: response[key].blocks[1]
                                    ? {
                                        day: key,

                                        exercises: response[key].blocks[1].exercises
                                            ? response[key].blocks[1].exercises.map(exercise => {
                                                return {
                                                    reps: exercise[1],
                                                    description: exercise[2],
                                                    id: exercise[3]
                                                }
                                            })
                                            : [],

                                        kindOfBlock: response[key].blocks[1].kindOfBlock
                                            ? response[key].blocks[1].kindOfBlock
                                            : '',
                                        order: 2,
                                        rounds: response[key].blocks[1].rounds
                                            ? response[key].blocks[1].rounds
                                            : 0
                                    }
                                    : {
                                        day: key,

                                        exercises: [],

                                        kindOfBlock: '',
                                        order: 2,
                                        rounds: 0
                                    },

                                    block3: response[key].blocks[2]
                                    ? {
                                        day: key,

                                        exercises: response[key].blocks[2].exercises
                                            ? response[key].blocks[2].exercises.map(exercise => {
                                                return {
                                                    reps: exercise[1],
                                                    description: exercise[2],
                                                    id: exercise[3]
                                                }
                                            })
                                            : [],

                                        kindOfBlock: response[key].blocks[2].kindOfBlock
                                            ? response[key].blocks[2].kindOfBlock
                                            : '',
                                        order: 3,
                                        rounds: response[key].blocks[2].rounds
                                            ? response[key].blocks[2].rounds
                                            : 0
                                    }
                                    : {
                                        day: key,

                                        exercises: [],

                                        kindOfBlock: '',
                                        order: 3,
                                        rounds: 0
                                    },

                            }
                            : {

                                block1: {
                                    day: key,

                                    exercises: [],

                                    kindOfBlock: '',
                                    order: 1,
                                    rounds: 0
                                },

                                block2: {
                                    day: key,

                                    exercises: [],

                                    kindOfBlock: '',
                                    order: 2,
                                    rounds: 0
                                },

                                block3: {
                                    day: key,

                                    exercises: [],

                                    kindOfBlock: '',
                                    order: 3,
                                    rounds: 0
                                }

                            },

                        dayRoutine: {
                            kindOfRoutine: response[key].kindOfRoutine
                            ? response[key].kindOfRoutine
                            : '',
                            day: key
                        }

                    }
                    : {

                        blocks: {

                            block1: {
                                day: key,

                                exercises: [],

                                kindOfBlock: '',
                                order: 1,
                                rounds: 0
                            },

                            block2: {
                                day: key,

                                exercises: [],

                                kindOfBlock: '',
                                order: 2,
                                rounds: 0
                            },

                            block3: {
                                day: key,

                                exercises: [],

                                kindOfBlock: '',
                                order: 3,
                                rounds: 0
                            }

                        },

                        dayRoutine: {
                            kindOfRoutine: '',
                            day: key
                        }

                    }
            }

        })

        setWeekChanges(auxWeekChanges);
        setExercises(auxState);

    }

    useEffect(() => {

        upgradeTable();

    }, []);

    useEffect(() => {

        console.log(weekChanges)

    }, [weekChanges]);


    return (
        <>

            <h1>Plan Semanal <span style={{fontWeight: '400'}}>{props.name ? `de ${props.name}` :'General'}</span></h1>
            <DayContainer>
                <LeftBarContainer>
                    <div className='LeftBar-FirstBlock'></div>
                    <div className='LeftBar-SecondBlock'>
                        <p>1</p>
                    </div>
                    <div className='LeftBar-ThirdBlock'>
                        <p>2</p>
                    </div>
                    <div className='LeftBar-FourthBlock'>
                        <p>3</p>
                    </div>
                </LeftBarContainer>
                {weekDays.map((day) =>
                    <Day
                        {...day}
                        setDisableButtons={setDisableButtons}
                        disableButtons={disableButtons}
                        key={day.api}
                        setWeekChanges={setWeekChanges}
                        weekChanges={weekChanges}
                        exercises={exercises[day.api]}
                        setExercises={setExercises}>
                    </Day>
                )}

            </DayContainer>
            <SaveDeleteChanges action='save' disabled={disableButtons} onClick={saveChanges}>Guardar Cambios</SaveDeleteChanges>
            <SaveDeleteChanges action='delete' disabled={disableButtons} onClick={deleteChanges}>Borrar Cambios</SaveDeleteChanges>

        </>
    )

}

export default WeekTable;