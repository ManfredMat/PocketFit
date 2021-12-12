import ExerciseList from "./ExerciseList";
import { PageContainer } from "./Routines.styles";
import WeekTable from "./WeekTable";

const Routines = () => {

    let name;

    return (
        <PageContainer>
            <div style={{marginLeft:'4rem', marginRight:'4rem'}}>
                <WeekTable name={name}/>
                <ExerciseList />
            </div>
        </PageContainer>
    )

}

export default Routines;