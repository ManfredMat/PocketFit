
function PassRecovery() {
    return (
        <div>
            <h1>Recuperar Contraseña</h1>
            <input name="pass" type="text" placeholder="Ingresa tu email"/>
            <h6>Las instrucciones para reestablecer la contraseña de tu cuenta se enviarán a esta dirección de email</h6>
            <button disabled="disabled">Enviar</button>         
        </div>
    )
};

export default PassRecovery;
