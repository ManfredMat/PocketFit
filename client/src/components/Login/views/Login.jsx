import { Link } from "react-router-dom";

function Login() {
    return (
        <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
            <h1>¡Bienvenido a PocketFit!</h1>
            <h3>¡La app donde podrás gestionar la administración de tu gimnasio de una forma sencilla, rápida y eficiente! </h3>
            <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
                <input name="email" type="text" placeholder="Email"/>
                <input name="pass" type="text" placeholder="Contraseña"/>
                <Link to="/home"><button>Entrar</button></Link> 
                
                <Link to="/passreco"><a href="#">Recuperar contraseña</a></Link> 
                
            </div>
        </div>
    )
};

export default Login;
