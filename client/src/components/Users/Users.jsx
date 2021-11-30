import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/Actions/actions-users';
import User from '../User/User';

function Users() {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);
    
    return (
        <div>
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
        </div>
    )
}

export default Users
