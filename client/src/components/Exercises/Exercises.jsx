const Exercises = (excercise) => {    
    let exer = excercise.excercise
    return(
        <div>
            <label>{exer.id}. </label><h3>{exer.name}</h3>
        </div>
    )
}

export default Exercises;