import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/home")
    }

    return (
        <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
            <h1>¡Bienvenido a PocketFit!</h1>
            <h3>¡La app donde podrás gestionar la administración de tu gimnasio de una forma sencilla, rápida y eficiente! </h3>
            <form style={{display: "flex",flexDirection: "column", alignItems: "center"}} onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="Email" />
                <input name="pass" type="password" placeholder="Contraseña" />
                <input type="submit" value="Entrar"/>
            </form>
        </div>
    )
};

export default Login;
