import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/Actions/actions-users';
import User from './User/User';
import Styles from './UsersList.styles';

function UsersList() {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);
    
    return (
        <Styles.UsersListContainer>
            {/* <div className="Name">
                {
                    users.map((users, key) => {
                        return <User 
                            key={key}
                            name={users.name}
                        />
                    })
                }
            </div>
            <div className="Lastname">
                {
                    users.map((users, key) => {
                        return <User 
                            key={key}
                            lastname={users.lastname}
                        />
                    })
                }
            </div> */}
        </Styles.UsersListContainer>
    )
}

export default UsersList
