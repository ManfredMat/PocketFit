import Styles from "./Styles/ExercisesStyled"; 


const Exercises = (props) => {    
    let exer = props.excercise

    let index = props.index + 1

    let flag = ((index%2)==0)


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