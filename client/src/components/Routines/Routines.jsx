import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ExerciseList from "./ExerciseList";
import { PageContainer } from "./Routines.styles";
import WeekTable from "./WeekTable";

const Routines = () => {

    const { id } = useParams();
    const user = useSelector(state => state.users.userDetail);

    const [idUser, setId] = useState();
    const [userName, setName] = useState();

    useEffect(() => {

        setId(id);

    }, [id])

    useEffect(() => {

        setName(user);

    }, [user])

    return (
        <PageContainer>
            <div style={{ marginLeft: '4rem', marginRight: '4rem' }}>
                <WeekTable name={user?.name} id={id} />
                <ExerciseList />
            </div>
        </PageContainer>
    )

}

export default Routines;