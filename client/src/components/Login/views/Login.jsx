
function Login() {
    return (
        <div>
            <h1>¡Bienvenido a PocketFit!</h1>
            <h3>¡La app donde podrás gestionar la administración de tu gimnasio de una forma sencilla, rápida y eficiente! </h3>
            <div>
                <input name="email" type="text" placeholder="Email"/>
                <input name="pass" type="text" placeholder="Contraseña"/>
                <button disabled="disabled">Entrar</button>
                <a href="#">Recuperar contraseña</a>
            </div>
        </div>
    )
};

export default Login;
