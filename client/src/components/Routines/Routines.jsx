import ExerciseList from "./ExerciseList";
import WeekTable from "./WeekTable";

const Routines = () => {

    return (
        <div style={{backgroundColor:'black', color:'white', width:'100vw', minHeight:'100vh'}}>

            <WeekTable/>
            <ExerciseList/>
            
        </div>
    )

}

export default Routines;