import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/Actions/actions-users';
import User from '../User/User';
import Styles from './Users.styles';

function Users() {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);
    
    return (
        <Styles.Container>
            <input type="text" placeholder="Buscar..."/>
            <div>
                {
                    users.map((users, key) => {
                        return <User 
                            name={users.name}
                            key={key}
                        />
                    })
                }
            </div>
        </Styles.Container>
    )
}

export default Users
