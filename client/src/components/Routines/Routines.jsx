import ExerciseList from "./ExerciseList";
import { PageContainer } from "./Routines.styles";
import WeekTable from "./WeekTable";

const Routines = () => {

    return (
        <PageContainer>
            <div style={{marginLeft:'4rem', marginRight:'4rem'}}>
                <WeekTable />
                <ExerciseList />
            </div>
        </PageContainer>
    )

}

export default Routines;