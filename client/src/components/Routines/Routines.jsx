import { useParams } from "react-router";
import ExerciseList from "./ExerciseList";
import { PageContainer } from "./Routines.styles";
import WeekTable from "./WeekTable";

const Routines = () => {

    const { id, name } = useParams();
    let params = useParams();
    return (
        <PageContainer>
            <div style={{ marginLeft: '4rem', marginRight: '4rem' }}>
                <WeekTable name={name} id={id} params={params} />
                <ExerciseList />
            </div>
        </PageContainer>
    )

}

export default Routines;