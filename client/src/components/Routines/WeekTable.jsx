import axios from "axios";
import { useEffect, useState } from "react";
import Day from "./Day";

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

const weekChangesDefaultValue = {

    monday: {
        dayRoutine: {},
        blocks: {}
    },
    tuesday: {
        dayRoutine: {},
        blocks: {}
    },
    wendsday: {
        dayRoutine: {},
        blocks: {}
    },
    thursday: {
        dayRoutine: {},
        blocks: {}
    },
    friday: {
        dayRoutine: {},
        blocks: {}
    },
    saturday: {
        dayRoutine: {},
        blocks: {}
    }
}

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

const WeekTable = () => {

    const [weekChanges, setWeekChanges] = useState(weekChangesDefaultValue)

    const [exercises, setExercises] = useState(exercisesDefaultValue)

    const [disableButtons, setDisableButtons] = useState(false)

    const saveChanges = async () => {

        setDisableButtons(true);

          if (validateWeekChanges()) {

              let dayIds = await postBlocks();
              await axios.post("http://127.0.0.1:3001/api/weekplan", dayIds);
              await upgradeTable();

          } else {

              alert("Beta: Por el momento es necesario agregar ejercicios a cada bloque de la tabla.")

          } 

          setDisableButtons(false);

    }

    const deleteChanges = async () => {

        setDisableButtons(true);

        await upgradeTable();

        setDisableButtons(false);

    }

    const postBlocks = async () => {

        let weekIds = {};

        for (const key in weekChanges) {

            let routinesIds = [];

            for (const key2 in weekChanges[key].blocks) {
                

                let response = await axios.post("http://127.0.0.1:3001/api/blocks/", weekChanges[key].blocks[key2]);
                routinesIds.push(response.data.id);
            }

            weekIds[key] = await postRoutine(routinesIds, weekChanges[key].dayRoutine);
        }

        return weekIds;

    }

    const postRoutine = async (blocksIds, dayRoutine) => {

        const response = await axios.post("http://127.0.0.1:3001/api/routines", { ...dayRoutine, blocks: blocksIds });
        return response.data.id;
    }

    const upgradeTable = async () => {

        let response = await axios.get('http://127.0.0.1:3001/api/weekplan/general');
        response = response.data;

        let auxState = {};
        let auxWeekChanges = {};

        if (response.monday) {


            for (const key in response) {

                auxState = {

                    ...auxState,
                    [response[key].day]: {

                        block1: response[key].blocks[0].exercises.map(exercise => {
                            return {
                                name: exercise[0],
                                repetitions: exercise[1],
                                notes: exercise[2],
                                id: exercise[3]
                            }
                        }),

                        block2: response[key].blocks[1].exercises.map(exercise => {
                            return {
                                name: exercise[0],
                                repetitions: exercise[1],
                                notes: exercise[2],
                                id: exercise[3]
                            }
                        }),

                        block3: response[key].blocks[2].exercises.map(exercise => {
                            return {
                                name: exercise[0],
                                repetitions: exercise[1],
                                notes: exercise[2],
                                id: exercise[3]
                            }
                        })

                    }

                }

                auxWeekChanges = {
                    ...auxWeekChanges,
                    [response[key].day]: {

                        blocks:{

                            block1: {
                                day: response[key].day,

                                exercises: response[key].blocks[0].exercises.map(exercise => {
                                    return {
                                        reps: exercise[1],
                                        description: exercise[2],
                                        id: exercise[3]
                                    }
                                }), 

                                kindOfBlock: response[key].blocks[0].kindOfBlock,
                                order: response[key].blocks[0].order,
                                rounds: response[key].blocks[0].rounds
                            },

                            block2: {
                                day: response[key].day,
                                
                                exercises: response[key].blocks[1].exercises.map(exercise => {
                                    return {
                                        reps: exercise[1],
                                        description: exercise[2],
                                        id: exercise[3]
                                    }
                                }), 

                                kindOfBlock: response[key].blocks[1].kindOfBlock,
                                order: response[key].blocks[1].order,
                                rounds: response[key].blocks[1].rounds
                            },

                            block3: {
                                day: response[key].day,
                                
                                exercises: response[key].blocks[2].exercises.map(exercise => {
                                    return {
                                        reps: exercise[1],
                                        description: exercise[2],
                                        id: exercise[3]
                                    }
                                }), 

                                kindOfBlock: response[key].blocks[2].kindOfBlock,
                                order: response[key].blocks[2].order,
                                rounds: response[key].blocks[2].rounds
                            }

                        },

                        dayRoutine: {
                            kindOfRoutine: response[key].kindOfRoutine,
                            day: response[key].day
                        }

                    }
                }

            }
            
            setWeekChanges(auxWeekChanges);
            setExercises(auxState);

        } else setExercises(exercisesDefaultValue);

    }

    const validateWeekChanges = () => {

        for (const key in weekChanges) {

            if (
                weekChanges[key].dayRoutine.kindOfRoutine === undefined ||
                weekChanges[key].blocks.block1 === undefined ||
                weekChanges[key].blocks.block2 === undefined ||
                weekChanges[key].blocks.block3 === undefined
                )


                return false

        }
        return true

    }

    useEffect(() => {

        upgradeTable();

    }, []);



    return (
        <>

            <h1>Plan Semanal</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

                {weekDays.map((day) =>
                    <Day
                        {...day}
                        setDisableButtons={setDisableButtons}
                        disableButtons={disableButtons}
                        key={day.api}
                        setWeekChanges={setWeekChanges}
                        exercises={exercises[day.api]}
                        setExercises={setExercises}>
                    </Day>
                )}

            </div>
            <button style={{ marginLeft: '1rem' }} disabled={disableButtons} onClick={saveChanges}>Guardar Cambios</button>
            <button style={{ marginLeft: '1rem' }} disabled={disableButtons} onClick={deleteChanges}>Borrar Cambios</button>

        </>
    )

}

export default WeekTable;