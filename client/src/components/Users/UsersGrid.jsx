import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, searchUsers } from '../../redux/Actions/actions-users';
import User from './User/User';
import Styles from './UsersGrid.styles';
import defaultProfilePhoto from "../../assets/img/profilephoto.svg";
import GridPagination from './GridPagination';

function UsersGrid({search, searchValue}) {
    const dispatch = useDispatch();
    const allRenderedUsers = useSelector(state => state.users.renderedUsers);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(15);
    
    useEffect(() => {
        if (allRenderedUsers.length === 0) {
            dispatch(getUsers())
        }
        setCurrentPage(1);
        // eslint-disable-next-line 
    }, [search]);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const users = Array.isArray(allRenderedUsers) ? allRenderedUsers.slice(indexOfFirstUser, indexOfLastUser) : undefined;

    function paginate(pageNumber) {
        setCurrentPage(pageNumber);
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    function reset() {
        dispatch(searchUsers("Reset")); 
        searchValue("");
    }

    // const pago = ["Pago", "No pago"]
    // const activo = ["Activo", "Inactivo"]
    
    return (
        <>
        <Styles.UsersGridContainer>
            {   
                allRenderedUsers === "No users" ?
                <Styles.NoUsersContainer>
                    <Styles.NoUsersText>No existen usuarios con ese nombre o apellido</Styles.NoUsersText> 
                    <Styles.BackButton onClick={() => reset()}>Volver</Styles.BackButton>
                </Styles.NoUsersContainer> :
                
                allRenderedUsers === "No filters" ? 
                <Styles.NoUsersContainer>
                    <Styles.NoUsersText>No existen usuarios que cumplan con el filtro elegido</Styles.NoUsersText>
                </Styles.NoUsersContainer> :

                allRenderedUsers === "Reset"  || allRenderedUsers.length === 0 ?
                <Styles.NoUsersContainer>
                    <Styles.NoUsersText>No existen usuarios en la base de datos</Styles.NoUsersText>
                </Styles.NoUsersContainer> : 
                users.map((users, key) => {
                    return <User 
                        key={key}
                        id={users.id}
                        name={users.name}
                        lastname={users.lastname}
                        image={users.imageData? `data:image/jpeg;base64, ${users.imageData}` : defaultProfilePhoto}
                        imageBackground={users.imageData ? true : false}
                        customRoutine={users.customRoutine ? "Si" : "No"}
                        paymentday={users.paymentday ? users.paymentday.slice(5, 10).split("-").reverse().join("/") : "-"} //{pago[Math.round(Math.random())]}
                        status={users.status === "ACTIVO" ? "Activo" : "Inactivo"} //{activo[Math.round(Math.random())]}
                    />
                })
            }
        </Styles.UsersGridContainer>
        <Styles.PaginationContainer>
            {
                allRenderedUsers.length > 15 ?
                <GridPagination 
                    usersPerPage={usersPerPage}
                    totalUsers={allRenderedUsers.length}
                    paginate={paginate}
                    currentPage={currentPage}
                /> :
                <></>
            }
        </Styles.PaginationContainer>
        </>
    )
}

export default UsersGrid
