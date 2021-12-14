import { useState } from "react"
import { useDispatch } from "react-redux"
import { create_exercise  , get_exercises} from "../../redux/Actions/actions-exercise"

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
        <form onSubmit={onSubmit}>
        <div>
        <label>Nombre: </label> <input  name="name" type="text" value={newExercise.name} onChange={onInputChange} />
         
        <label>Descripcion: </label> <input name="description" type="text" value={newExercise.description} placeholder ="" onChange={onInputChange} />

        <label>URL de Video: </label> <input name="video" type="text"  value={newExercise.video} placeholder ="" onChange={onInputChange} />
        
        <label>Disciplina: </label> <input name="discipline" type="text" value={newExercise.discipline} placeholder ="" onChange={onInputChange}/>
        
        <input type="submit" />
        </div> 
        </form>
        <button onClick={() => display(false)}>Cancelar</button>
        </>
    )
}

export default ExcerciseCreate;