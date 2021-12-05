import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, searchUsers } from '../../redux/Actions/actions-users';
import User from './User/User';
import Styles from './UsersGrid.styles';

function UsersGrid() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const searchedUsers = useSelector(state => state.users.searchedUsers);
    
    useEffect(() => {
        dispatch(getUsers())
        // eslint-disable-next-line 
    }, []);

    const pago = ["Pago", "No pago"]
    const activo = ["Activo", "Inactivo"]
    
    return (
        <Styles.UsersGridContainer>
            {   
                searchedUsers === "No users" ?
                <Styles.NoUsersContainer>
                    <Styles.NoUsersText>No existen usuarios con ese nombre o apellido</Styles.NoUsersText> 
                    <Styles.BackButton onClick={() => dispatch(searchUsers("Reset"))}>Volver</Styles.BackButton>
                </Styles.NoUsersContainer> :
                searchedUsers === "Reset"  || searchedUsers.length === 0 ?
                users.map((users, key) => {
                    return <User 
                        key={key}
                        name={users.name}
                        lastname={users.lastname}
                        image={`https://picsum.photos/200?random=${key}`}
                        pago="Pago" //{pago[Math.round(Math.random())]}
                        activo="Activo" //{activo[Math.round(Math.random())]}
                    />
                }) : 
                searchedUsers.map((users, key) => {
                    return <User 
                        key={key}
                        name={users.name}
                        lastname={users.lastname}
                        image={`https://picsum.photos/200?random=${key}`}
                        pago="Pago" //{pago[Math.round(Math.random())]}
                        activo="Activo" //{activo[Math.round(Math.random())]}
                    />
                })
            }
        </Styles.UsersGridContainer>
    )
}

export default UsersGrid
