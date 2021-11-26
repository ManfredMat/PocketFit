import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ProfilePhoto from '../../assets/img/profilephoto.svg';
import LandingIcon from '../../assets/img/landingicon.svg';

function Login() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/home")
    }

    return (
        <div className="bg-login-background h-full w-full bg-no-repeat bg-cover bg-top">
            <div className="flex flex-col items-center" style={{position: "absolute", left: "10vw", top: "4vw"}}>
                <img className="h-30 w-30" src={ProfilePhoto} alt="profile" />

                <div style={{backgroundColor:"rgba(255, 255, 255, 0.3)"}} className="flex flex-col items-center rounded-lg p-10">
                    <label style={{fontFamily:"poppins"}} className="self-start text-white" htmlFor="email">E-Mail</label>
                    <input className="rounded-lg px-10" name="email" type="email" />
                    <label style={{fontFamily:"poppins"}} className="self-start text-white mt-4" htmlFor="pass">Contraseña</label>
                    <input className="rounded-lg px-10" name="pass" type="password" />
                </div>
                <Link to="/home"><button style={{fontFamily:"poppins"}} className="bg-green-base rounded-md py-2 px-6 mt-4">Iniciar Sesión</button></Link>              
                
                <Link to="/passreco"><h6 className="text-green-base underline mt-8">OLVIDÉ MI CONTRASEÑA</h6></Link>

                <h6 style={{fontFamily:"poppins"}} className="text-white mt-8">Powered by</h6>
                <img src={LandingIcon} alt="pocket-fit-logo" className="w-4/5"/>
            </div>
        </div>
    )
};

export default Login;
