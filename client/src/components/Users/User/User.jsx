import React, { useState } from 'react';
import Styles from './User.styles';
import { useDispatch } from 'react-redux';
import { getUserDetail, renderUserDetail } from '../../../redux/Actions/actions-users';

function User({id, name, lastname, image, customRoutine, paymentday, status, imageBackground}) {
    const dispatch = useDispatch();

    const userDetail = () => {
        dispatch(getUserDetail(id));
        dispatch(renderUserDetail(true));
    }

    return (
        <Styles.Card>
            <Styles.CardBanner>
                <Styles.ProfilePhoto src={image} alt={name + "-profile"} imageBackground={imageBackground ? true : false}/>
                <Styles.ProfileButton onClick={()=> userDetail()}>
                    <Styles.UserNamesContainer>
                        <Styles.UserNames>{name}</Styles.UserNames>
                        <Styles.UserNames>{lastname}</Styles.UserNames>
                    </Styles.UserNamesContainer>
                </Styles.ProfileButton>
            </Styles.CardBanner>
            <Styles.TextUserContainer style={{marginTop: "1rem"}}>
                <Styles.TextUserKeys>Plan Personalizado</Styles.TextUserKeys>
                <Styles.TextUserValues>{customRoutine}</Styles.TextUserValues>
            </Styles.TextUserContainer>
            <Styles.TextUserContainer>
                <Styles.TextUserKeys>Día de pago</Styles.TextUserKeys>
                <Styles.TextUserValues>{paymentday}</Styles.TextUserValues>
            </Styles.TextUserContainer>
            <Styles.TextUserContainer>
                <Styles.TextUserKeys>Estado</Styles.TextUserKeys>
                <Styles.TextUserValues>{status}</Styles.TextUserValues>
            </Styles.TextUserContainer>
            
            {/* <Styles.Clases>Clases</Styles.Clases> */}
        </Styles.Card>
    )
}

export default User
