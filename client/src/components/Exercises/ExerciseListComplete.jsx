import Exercises from '../Exercises/Exercises'
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { get_exercises } from '../../redux/Actions/actions-exercise';
import { Link } from 'react-router-dom';
import React from 'react';
import ExcerciseCreate from './ExcerciseCreate';

const ExerciseListComplete = () => {

    const [exerciseCreate, setExerciseCreate] = React.useState(false);
    console.log(exerciseCreate)
    let dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(get_exercises()) 
    },[dispatch])

    let exercises = useSelector((state)=> state.exercise.exercises)

    const renderExercises = (items)=>{
        let exerciseArray = items.map((excercise , index)=>{       
            
                
            return<>
            <Link to={`/session/exercises_detail/${excercise.id}`}><Exercises key={index} excercise = {excercise} /></Link>
            </> 
            
        })          
        return <>
            {exerciseArray}
        </>
    } 

    return(
        <div>
            <h2>Ejercicios</h2>
            <button onClick={() => setExerciseCreate(!exerciseCreate)}>Crear Ejercicio</button>
            {exerciseCreate && <ExcerciseCreate display={setExerciseCreate}/>}
            {renderExercises(exercises)}
            <Link to="/session/routines"><button>Volver al plan general</button></Link>
        </div>
    )
}

export default ExerciseListComplete;