import Exercises from '../Exercises/Exercises'
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { get_exercises } from '../../redux/Actions/actions-exercise';
import { Link } from 'react-router-dom';
import Styles from "../Exercises/Styles/ExercisesStyled"; 
const ExerciseList = () => {

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(get_exercises()) 
    },[dispatch])

    let exercises = useSelector((state)=> state.exercise.exercises)

    const renderExercises = (items)=>{
        let exerciseArray = items.map((excercise , index)=>{        
            if(index <= 3 ){ 
                
            return <Exercises key={index} excercise = {excercise}/>

            }
        })          
        return <>
            {exerciseArray}
        </>
    } 

    return(
        <div>
            <Styles.headerConteiner>
            <h2>Ejercicios</h2>
            <Link to="/session/exercises"> 
            <Styles.LinkGreen>Ver detalle</Styles.LinkGreen>
            </Link>
            </Styles.headerConteiner>
            <Styles.allPropBox>
            <Styles.propBoxList>Nombre</Styles.propBoxList>
            <Styles.propBoxList>Descripcion</Styles.propBoxList>
            <Styles.propBoxList>Disciplina</Styles.propBoxList>
            <Styles.propBoxList>Video</Styles.propBoxList>
            </Styles.allPropBox>
            {renderExercises(exercises)}
           
        </div>
    )
}

export default ExerciseList;