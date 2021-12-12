import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ExerciseList from "./ExerciseList";
import { PageContainer } from "./Routines.styles";
import WeekTable from "./WeekTable";

const Routines = () => {
    const { id } = useParams();
    const user = useSelector(state => state.users.userDetail)

    return (
        <PageContainer>
            <div style={{marginLeft:'4rem', marginRight:'4rem'}}>
                <WeekTable name={user?.name} id={id}/>
                <ExerciseList />
            </div>
        </PageContainer>
    )

}

export default Routines;