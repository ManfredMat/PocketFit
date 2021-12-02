import React from 'react'

function ShiftsConfig({ display }) {
    return (
        <div style={{
            display: "flex", position: "absolute", width: "-webkit-fill-available", height: "100vh", backgroundColor: "#00000070", top: 0, alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                display: "flex", width: "40%", height: "25%",padding:"2em", flexDirection: "column",
                alignItems: "flex-start", backgroundColor:"grey"
            }}>
                <h2>Configurar Turnos</h2>
                <label>Cliente</label>
                <input placeholder='Escribe un Nombre' />
                <label>Intervalo</label>
                <input placeholder='Selecciona un horario' />
                <label>Fecha</label>
                <input type="date" />
                <button onClick={() => display(false)}>Cancelar</button>
            </div>
        </div>
    )
}

export default ShiftsConfig;
