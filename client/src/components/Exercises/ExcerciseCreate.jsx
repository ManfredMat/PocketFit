import { useState } from "react"
import { useDispatch } from "react-redux"
import { create_exercise } from "../../redux/Actions/actions-exercise"
import Styles from "./Styles/ExerciseCreatorStyle"
import ReactPlayer from 'react-player';
import RunninGuy from "../../assets/img/pesa.svg"
const ExcerciseCreate =({display}) => {

    let dispatch = useDispatch()

    const[newExercise , setNewExercise] =useState({
        name:"",
        description:"",
        video:"",
        discipline:""

    })

    function onInputChange(e){
        e.preventDefault()
        
        setNewExercise({
                ...newExercise,
                [e.target.name]: e.target.value,
            })    
        
    }


    function onSubmit(e){
        e.preventDefault()
        dispatch(create_exercise(newExercise)) 
        display(false)   
    }

    return(
        <>
        <Styles.Container>
            <Styles.Card>
                <Styles.CloseButton onClick={() => display(false)}>X</Styles.CloseButton>
                <Styles.ConteinerCard>
                        <Styles.ConteinerHead>
                            <Styles.Title>Crear Ejercicio</Styles.Title>
                        </Styles.ConteinerHead>
                    <Styles.FormConteiner>
                        <Styles.InnerForm>
                        <form onSubmit={onSubmit}>
                            <Styles.InputConteiner><Styles.LabelInput>Nombre: </Styles.LabelInput> <Styles.InputForm  name="name" type="text" value={newExercise.name} onChange={onInputChange} /></Styles.InputConteiner>
                            
                            <Styles.InputConteiner><Styles.LabelInput>Descripcion: </Styles.LabelInput> <Styles.InputForm name="description" type="text" value={newExercise.description} placeholder ="" onChange={onInputChange} /></Styles.InputConteiner>

                            <Styles.InputConteiner><Styles.LabelInput>URL de Video: </Styles.LabelInput> <Styles.InputForm name="video" type="text"  value={newExercise.video} placeholder ="" onChange={onInputChange} /></Styles.InputConteiner>
                            
                            <Styles.InputConteiner><Styles.LabelInput>Disciplina: </Styles.LabelInput> <Styles.InputForm name="discipline" type="text" value={newExercise.discipline} placeholder ="" onChange={onInputChange}/></Styles.InputConteiner>
                        
                        <Styles.InputFormSumbit type="submit" />
                        </form>
                        </Styles.InnerForm> 
                        <Styles.ConteinerVideo>
                            {newExercise.video?<ReactPlayer url={newExercise.video} width="100% " height="100%" />:
                            <Styles.ConteinerImagen><img src={RunninGuy} alt="search-icon" height={"50%"} width={"100%"} margin-top={"5em"}/></Styles.ConteinerImagen>}
                        </Styles.ConteinerVideo>
                    </Styles.FormConteiner>                       
                
                </Styles.ConteinerCard>    
            </Styles.Card>
        </Styles.Container>
        </>
    )
}

export default ExcerciseCreate;