import React from 'react'

function User({name}) {
    return (
        <div>
            <h3>{name}</h3>
            <h6>Esta activo?</h6>
            <h6>Clases</h6>
            <h6>Pago</h6>
        </div>
    )
}

export default User
