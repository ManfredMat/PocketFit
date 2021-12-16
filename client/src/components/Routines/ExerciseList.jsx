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

    // eslint-disable-next-line
    const renderExercises = (items)=>{
        // eslint-disable-next-line
        let exerciseArray = items.map((excercise , index)=>{        
            if(index <= 3 ){ 
                
            return <Exercises key={index} excercise = {excercise} index={index}/>

            }
           
        })          
        return <>
            {exerciseArray}
        </>
    } 

    return(
        <div>
            <Styles.HeaderConteiner>
            <h2 style={{color:"white"}} >Ejercicios</h2>
            <Link to="/session/exercises"> 
            <Styles.LinkGreen>Ver detalle</Styles.LinkGreen>
            </Link>
            </Styles.HeaderConteiner>
            <Styles.AllPropBox>
            <Styles.PropBoxList>Nombre</Styles.PropBoxList>
            <Styles.PropBoxList>Descripcion</Styles.PropBoxList>
            <Styles.PropBoxList>Disciplina</Styles.PropBoxList>
            <Styles.PropBoxList>Video</Styles.PropBoxList>
            </Styles.AllPropBox>
            {renderExercises(exercises)}
           
        </div>
    )
}

export default ExerciseList;