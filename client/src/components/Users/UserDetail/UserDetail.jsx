import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserDetail, renderUserDetail } from '../../../redux/Actions/actions-users';
import Styles from './UserDetail.styles'

function UserDetail() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.userDetail)

    const closeCard = () => {
        dispatch(renderUserDetail(false));
        dispatch(getUserDetail("CLEAR"))
    }

    return (
        <Styles.Container>
            <Styles.Card>
                <Styles.CloseButton onClick={() => closeCard()}>X</Styles.CloseButton>
                <Styles.UserNames>{user.name} {user.lastname}</Styles.UserNames>
            </Styles.Card>
        </Styles.Container>
    )
}

export default UserDetail
