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
        console.log(id)
        dispatch(get_exercise_by_id(id))
        dispatch(render_exercise(true))
    }
    const renderExercises = (items)=>{
        //Link to={`/session/exercises_detail/${excercise.id}`}><Exercises key={index} excercise = {excercise} /></Link>
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
        <>
        <Styles.GlobalStyle />

        {
                exerciseRender? <ExerciseDetail/>: null
        }

        <Styles.exerciseConteiner>
        <Styles.headerConteiner>
            <Styles.ConteinerHead>
            <Styles.SearchButton ><Link to="/session/routines"><img src={goBack} alt="search-icon" height={"22rem"}/></Link></Styles.SearchButton >
            <Styles.Title>Ejercicios</Styles.Title>
            </Styles.ConteinerHead>
            <Styles.ConteinerSearchAndButton>
                <Styles.YellowButton onClick={() => setExerciseCreate(!exerciseCreate)}>Crear Ejercicio</Styles.YellowButton>
                <div>
                <Styles.SearchBar type="text" placeholder="Introduce un nombre o apellido..." autoCorrect="off" />
                <Styles.SearchButton ><img src={SearchIcon} alt="search-icon" height={"22rem"}/></Styles.SearchButton>
                </div>
            </Styles.ConteinerSearchAndButton>
        </Styles.headerConteiner>
        {exerciseCreate && <ExcerciseCreate display={setExerciseCreate}/>}
        <Styles.allPropBox>
            <Styles.HeaderPropList>Nombre</Styles.HeaderPropList>
            <Styles.HeaderPropList>Descripcion</Styles.HeaderPropList>
            <Styles.HeaderPropList>Disciplina</Styles.HeaderPropList>
            <Styles.HeaderPropList>Video</Styles.HeaderPropList>
        </Styles.allPropBox>
        <Styles.allPropBoxComplete>
            {renderExercises(exercises)}
        </Styles.allPropBoxComplete>
        
        </Styles.exerciseConteiner>
        </>
        )
}

export default ExerciseListComplete;