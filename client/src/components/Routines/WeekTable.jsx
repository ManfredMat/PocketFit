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

const WeekTable = () => {

    const [weekIds, setWeekIds] = useState({
        monday: '',
        tuesday: '',
        wendsday: '',
        thursday: '',
        friday: '',
        saturday: ''
    })

    const [weekChanges, setWeekChanges] = useState({
        monday:{
            dayRoutine:{},
            blocks:{}
        },
        tuesday:{
            dayRoutine:{},
            blocks:{}
        },
        wendsday:{
            dayRoutine:{},
            blocks:{}
        },
        thursday:{
            dayRoutine:{},
            blocks:{}
        },
        friday:{
            dayRoutine:{},
            blocks:{}
        },
        saturday:{
            dayRoutine:{},
            blocks:{}
        }
    })

    const [exercises, setExercises] = useState({

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
    })

    const saveChanges = async () => {

        console.log( await postBlocks());
 
     }

    const postBlocks = async () => {

        let weekIds = {};

        for(const key in weekChanges){

            let routinesPromises = []
            let routinesIds = []

            console.log("-----" + key + "-----")

            for(const key2 in weekChanges[key].blocks){
                
                routinesPromises.push(axios.post(`${REACT_APP_API}/api/blocks/`, weekChanges[key].blocks[key2]));

            }

            routinesIds = await Promise.all(routinesPromises);
            routinesIds = routinesIds.map(routine => routine.data.id);
            weekIds[key] = await postRoutine(routinesIds, weekChanges[key].dayRoutine);
        }

        return weekIds;

    }

    const postRoutine = async (blocksIds, dayRoutine) => {

        const response = await axios.post(`${REACT_APP_API}/api/routines`, {...dayRoutine, blocks:blocksIds});
        return response.data.id;
    }

    useEffect(async () => {

        let response = await axios.get(`${REACT_APP_API}/api/routines/all`);

        if(response.data[0].day === "monday" && false){ 
            
            let auxState = {};

            response.data.forEach(day => {
    
                auxState = {
                    ...auxState, [day.day]: {
    
                        block1: day.blocks[0].exercises.map(exercise => {
                            return {
                                name: exercise[0],
                                repetitions: exercise[1],
                                notes: exercise[2],
                                id: exercise[3]
                            }
                        }),
    
                        block2: day.blocks[1].exercises.map(exercise => {
                            return {
                                name: exercise[0],
                                repetitions: exercise[1],
                                notes: exercise[2],
                                id: exercise[3]
                            }
                        }),
    
                        block3: day.blocks[2].exercises.map(exercise => {
                            return {
                                name: exercise[0],
                                repetitions: exercise[1],
                                notes: exercise[2],
                                id: exercise[3]
                            }
                        })
    
                    }
                }
    
            })
    
            setExercises(auxState);
        }


    }, [])

    

    return (
        <>

            <h1>Plan Semanal</h1>
            <div style={{ display: 'flex' }}>
                {weekDays.map((day) =>
                    <Day {...day} key={day.api} setWeekChanges={setWeekChanges} setWeekIds={setWeekIds} weekIds={weekIds} exercises={exercises[day.api]} setExercises={setExercises}></Day>
                )}
            </div>
            <button disabled={/*validateWeekIds()*/ false} onClick={saveChanges}>Guardar Cambios</button>

        </>
    )

}

export default WeekTable;