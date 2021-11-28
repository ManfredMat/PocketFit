const ejercicios = ["Push up", "Flex", "Run", "Whatever"]

const ExerciseList = () => {
    return(
        <div>
            <h2>Ejercicios</h2>
            <button>Crear Ejercicio</button>
            <ul>
                {ejercicios.map(exercise => 
                    <li key={exercise}>{exercise}</li>    
                )}
            </ul>
            <button>Ver detalle</button>
        </div>
    )
}

export default ExerciseList;