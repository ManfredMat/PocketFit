import ExerciseList from "./ExerciseList";
import { PageContainer } from "./Routines.styles";
import WeekTable from "./WeekTable";

const Routines = (props) => {

    let name = props.name;
    let id = props.id;

    return (
        <PageContainer>
            <div style={{marginLeft:'4rem', marginRight:'4rem'}}>
                <WeekTable name={name} id={id}/>
                <ExerciseList />
            </div>
        </PageContainer>
    )

}

export default Routines;