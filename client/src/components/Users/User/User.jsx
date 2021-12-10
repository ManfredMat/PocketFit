import React from 'react'
import Styles from './User.styles'

function User({name, lastname, image, customRoutine, paymentday, status}) {
    return (
        <Styles.Card>
            <Styles.CardBanner>
                <Styles.ProfilePhoto src={image} alt={name + "-profile"} />
                <Styles.UserNamesContainer>
                    <Styles.UserNames>{name}</Styles.UserNames>
                    <Styles.UserNames>{lastname}</Styles.UserNames>
                </Styles.UserNamesContainer>
            </Styles.CardBanner>
            <Styles.TextUserContainer>
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
