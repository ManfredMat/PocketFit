import Exercises from '../Exercises/Exercises'
import { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { get_exercises , render_exercise , get_exercise_by_id} from '../../redux/Actions/actions-exercise';
import { Link } from 'react-router-dom';
import React from 'react';
import ExcerciseCreate from './ExcerciseCreate';
import Styles from "./Styles/ExercisesStyled"; 
import SearchIcon from "../../assets/img/iconos/users/search.svg"
import goBack from "../../assets/img/iconos/goBack.svg"
import ExerciseDetail from './ExerciseDetail';

const ExerciseListComplete = () => {

    const [exerciseCreate, setExerciseCreate] = React.useState(false);

    let exerciseRender = useSelector((state) => state.exercise.exerciseRender)

    
    let dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(get_exercises()) 
    },[dispatch])

    let exercises = useSelector((state)=> state.exercise.exercises)
    function searchOnClick(id){
        dispatch(get_exercise_by_id(id))
        dispatch(render_exercise(true))
    }
    const renderExercises = (items)=>{
        
        let exerciseArray = items.map((excercise , index)=>{       
            
                
            return<>
            <Styles.ExerciseStyle onClick={()=>searchOnClick(excercise.id)}><Exercises key={index} excercise = {excercise} index={index} /></Styles.ExerciseStyle>
            </> 
            
        })          
        return <>
        
            {exerciseArray}
        </>
    } 

    return(
        <>
        <Styles.GlobalStyle />

        {
                exerciseRender? <ExerciseDetail/>: null
        }

        <Styles.ExerciseConteiner>
        <Styles.HeaderConteiner>
            <Styles.ConteinerHead>
            <Styles.SearchButton ><Link to="/session/routines"><img src={goBack} alt="search-icon" height={"22rem"}/></Link></Styles.SearchButton >
            <Styles.Title>Ejercicios</Styles.Title>
            </Styles.ConteinerHead>
            <Styles.ConteinerSearchAndButton>
                <Styles.YellowButton onClick={() => setExerciseCreate(!exerciseCreate)}>Crear Ejercicio</Styles.YellowButton>
                <div>
                <Styles.SearchBar type="text" placeholder="Ejercicio..." autoCorrect="off" />
                <Styles.SearchButton ><img src={SearchIcon} alt="search-icon" height={"22rem"}/></Styles.SearchButton>
                </div>
            </Styles.ConteinerSearchAndButton>
        </Styles.HeaderConteiner>
        {exerciseCreate && <ExcerciseCreate display={setExerciseCreate}/>}
        <Styles.AllPropBox>
            <Styles.HeaderPropList>Nombre</Styles.HeaderPropList>
            <Styles.HeaderPropList>Descripcion</Styles.HeaderPropList>
            <Styles.HeaderPropList>Disciplina</Styles.HeaderPropList>
            <Styles.HeaderPropList>Video</Styles.HeaderPropList>
        </Styles.AllPropBox>
        <Styles.AllPropBoxComplete>
            {renderExercises(exercises)}
        </Styles.AllPropBoxComplete>
        
        </Styles.ExerciseConteiner>
        </>
        )
}

export default ExerciseListComplete;