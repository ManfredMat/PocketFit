import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { render_exercise ,  get_exercises , delete_exercise} from "../../redux/Actions/actions-exercise";
import ReactPlayer from 'react-player';
import Styles from "./Styles/ExerciseDetailStyled"; 

const ExerciseDetail =() => {    
    
    let exercise = useSelector((state)=> state.exercise.exerciseDetail)
    let dispatch  = useDispatch();
    function searchOnClick(){
         
        dispatch(render_exercise(false))
    }
   function deleteOnClick(){
        dispatch(delete_exercise(exercise.name)) 
        dispatch(render_exercise(false))
    }
    return(
        <>
        {exercise?<Styles.Container>
            <Styles.Card>
                <Styles.ConteinerHead>
                        <Styles.CloseButton onClick={()=>searchOnClick()} >X</Styles.CloseButton>
                    <Styles.Header>
                        <Styles.Title>Ejercicio: </Styles.Title>
                        <Styles.Title>{exercise.name}</Styles.Title>
                    </Styles.Header>
                </Styles.ConteinerHead>
            <Styles.UnderCard>
                <Styles.LeftDiv>{/*flex-column   ,  -webkit-fill-available */}
                    <Styles.InnerLeftDiv>
                    <Styles.Title3>Disciplina</Styles.Title3><Styles.Title2> {exercise.discipline}</Styles.Title2>
                    </Styles.InnerLeftDiv>
                        <ReactPlayer url={exercise.video} width="-webkit-fill-available " height="-webkit-fill-available " controls/>
                    <Styles.ConteinerEdit>
                        <Styles.GreenButton>Editar</Styles.GreenButton>
                        <Styles.DeleteButton onClick={()=>deleteOnClick()}>Eliminar</Styles.DeleteButton>
                    </Styles.ConteinerEdit>
                </Styles.LeftDiv>
                <Styles.RightDiv>
                    <Styles.RightDivTitle>Descripcion:</Styles.RightDivTitle>
                    <Styles.RightDivDescription>{exercise.description}</Styles.RightDivDescription>
                </Styles.RightDiv>    
            </Styles.UnderCard>
            </Styles.Card>
        </Styles.Container>:null}
        </>
    )
}

export default ExerciseDetail;