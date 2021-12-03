import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/Actions/actions-users';
import User from './User/User';
import Styles from './UsersGrid.styles';

function UsersGrid() {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    const pago = ["Pago", "No pago"]
    const activo = ["Activo", "Inactivo"]
    
    return (
        <Styles.UsersGridContainer>
            {
                users.map((users, key) => {
                    return <User 
                        key={key}
                        name={users.name}
                        lastname={users.lastname}
                        image={`https://picsum.photos/200?random=${key}`}
                        pago={pago[Math.round(Math.random())]}
                        activo={activo[Math.round(Math.random())]}
                    />
                })
            }
        </Styles.UsersGridContainer>
    )
}

export default UsersGrid
