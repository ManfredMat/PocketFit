import React from 'react';
import Styles from './User.styles';
import { Link } from "react-router-dom";

function User({id, name, lastname, image, customRoutine, paymentday, status}) {
    return (
        <Styles.Card>
            <Styles.CardBanner>
                <Styles.ProfilePhoto src={image} alt={name + "-profile"} />
                <Link to={`/session/users/${id}`}>
                    <Styles.UserNamesContainer>
                        <Styles.UserNames>{name}</Styles.UserNames>
                        <Styles.UserNames>{lastname}</Styles.UserNames>
                    </Styles.UserNamesContainer>
                </Link>
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
