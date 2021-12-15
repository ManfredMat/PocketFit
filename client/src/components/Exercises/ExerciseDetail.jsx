import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { get_exercise_by_id } from "../../redux/Actions/actions-exercise";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';

const ExerciseDetail =() => {    
    //let {id} = useParams();
    let exercise = useSelector((state)=> state.exercise.exerciseDetail)
    let dispatch  = useDispatch();
    /*useEffect(()=>{
        dispatch(get_exercise_by_id(id)) 
    },[dispatch])*/
    return(
        <>
        {exercise?<div>
            <label>Ejercicio:</label><h2>{exercise.name}</h2>
            <label>Descripcion:</label><h2>{exercise.description}</h2>
            <label>Disciplina:</label><h2>{exercise.discipline}</h2>
            <label>Video:</label>
            <ReactPlayer url={exercise.video} width="25rem" height="20rem" controls/>
        </div>:<div><h1>loading...</h1></div>}
        <Link to="/session/exercises"><button>Volver al plan general</button></Link>
        </>
    )
}

export default ExerciseDetail;