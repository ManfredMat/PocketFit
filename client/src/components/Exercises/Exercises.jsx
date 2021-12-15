import Styles from "./Styles/ExercisesStyled"; 

const Exercises = (excercise) => {    
    let exer = excercise.excercise
    return(
        <>
        <Styles.GlobalStyle />
        <Styles.allPropBox>
            <Styles.propBox>{exer.name}</Styles.propBox>
            <Styles.propBox>{exer.description}</Styles.propBox>
            <Styles.propBox>{exer.discipline}</Styles.propBox>
            <Styles.propBox>{exer.video?"SI":"NO"}</Styles.propBox>
        </Styles.allPropBox>
        </>
    )
}

export default Exercises;