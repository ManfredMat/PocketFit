import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, searchUsers } from '../../redux/Actions/actions-users';
import User from './User/User';
import Styles from './UsersGrid.styles';
import defaultProfilePhoto from "../../assets/img/profilephoto.svg";

function UsersGrid() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const searchedUsers = useSelector(state => state.users.searchedUsers);
    
    useEffect(() => {
        dispatch(getUsers())
        // eslint-disable-next-line 
    }, []);

    // const pago = ["Pago", "No pago"]
    // const activo = ["Activo", "Inactivo"]
    
    return (
        <Styles.UsersGridContainer>
            {   
                searchedUsers === "No users" ?
                <Styles.NoUsersContainer>
                    <Styles.NoUsersText>No existen usuarios con ese nombre o apellido</Styles.NoUsersText> 
                    <Styles.BackButton onClick={() => dispatch(searchUsers("Reset"))}>Volver</Styles.BackButton>
                </Styles.NoUsersContainer> :
                
                searchedUsers === "No filters" ? 
                <Styles.NoUsersContainer>
                    <Styles.NoUsersText>No existen usuarios que cumplan con el filtro elegido</Styles.NoUsersText> 
                    <Styles.BackButton onClick={() => dispatch(searchUsers("Reset"))}>Volver</Styles.BackButton>
                </Styles.NoUsersContainer> :

                searchedUsers === "Reset"  || searchedUsers.length === 0 ?
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
                }) : 
                searchedUsers.map((users, key) => {
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
    )
}

export default UsersGrid
