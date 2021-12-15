import Styles from "./Styles/ExercisesStyled"; 

const Exercises = (props) => {    
    let exer = props.excercise

    let index = props.index + 1

    let flag = ((index%2)==0)

    return(
        <>
        <Styles.GlobalStyle />
        <Styles.AllPropBox>
            {flag?<Styles.PropBoxV2>{exer.name}</Styles.PropBoxV2>:<Styles.PropBox>{exer.name}</Styles.PropBox>}
            {flag?<Styles.PropBoxV2>{exer.description?"SI":"NO"}</Styles.PropBoxV2>:<Styles.PropBox>{exer.description?"SI":"NO"}</Styles.PropBox>}
            {flag?<Styles.PropBoxV2>{exer.discipline}</Styles.PropBoxV2>:<Styles.PropBox>{exer.discipline}</Styles.PropBox>}
            {flag?<Styles.PropBoxV2>{exer.video?"SI":"NO"}</Styles.PropBoxV2>:<Styles.PropBox>{exer.video?"SI":"NO"}</Styles.PropBox>}
        </Styles.AllPropBox>
        </>
    )
}

export default Exercises;