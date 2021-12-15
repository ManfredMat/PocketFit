import Styles from "./Styles/ExercisesStyled"; 

const Exercises = (excercise) => {    
    let exer = excercise.excercise
    return(
        <>
        <Styles.GlobalStyle />
        <Styles.AllPropBox>
            <Styles.PropBox>{exer.name}</Styles.PropBox>
            <Styles.PropBox>{exer.description?"SI":"NO"}</Styles.PropBox>
            <Styles.PropBox>{exer.discipline}</Styles.PropBox>
            <Styles.PropBox>{exer.video?"SI":"NO"}</Styles.PropBox>
        </Styles.AllPropBox>
        </>
    )
}

export default Exercises;