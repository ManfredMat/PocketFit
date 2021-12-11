import Exercises from '../Exercises/Exercises'
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { get_exercises } from '../../redux/Actions/actions-exercise';
import { Link } from 'react-router-dom';

const ExerciseList = () => {

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(get_exercises()) 
    },[dispatch])

    let exercises = useSelector((state)=> state.exercise.exercises)

    const renderExercises = (items)=>{
        let exerciseArray = items.map((excercise , index)=>{        
            if(index <= 9 ){ 
                
            return <Exercises key={index} excercise = {excercise}/>

            }
        })          
        return <>
            {exerciseArray}
        </>
    } 

    return(
        <div>
            <h2>Ejercicios</h2>
            <button>Crear Ejercicio</button>
            {renderExercises(exercises)}
           <Link to="/session/exercises"> 
           <button>Ver detalle</button>
           </Link>
        </div>
    )
}

export default ExerciseList;