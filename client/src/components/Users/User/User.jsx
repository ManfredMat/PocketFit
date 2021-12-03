import React from 'react'
import Styles from './User.styles'

function User({name, lastname, image, pago, activo}) {
    return (
        <Styles.Card>
            <Styles.User>{name} {lastname}</Styles.User>
            <Styles.ProfilePhoto src={image} alt={name + "-profile"} />
            <Styles.h4User>{activo}</Styles.h4User>
            <Styles.h4User>{pago}</Styles.h4User>
            <Styles.Clases>Clases</Styles.Clases>
        </Styles.Card>
    )
}

export default User
