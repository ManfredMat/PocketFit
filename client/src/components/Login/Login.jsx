import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ProfilePhoto from "../../assets/img/profilephoto.svg";
import LandingIcon from "../../assets/img/landingicon.svg";
import LogingWave from "../../assets/img/loginwave.svg";
import FitnessLogo from "../../assets/img/fitnesslogo.svg";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/session/home");
  }

  return (
    <div className="hola">
      <div className="hola">
        <img src={LogingWave} alt="pocket-fit-logo" className="w-screen" />
        <div className="hola">
          <h1 className="hola">Bienvenido a PocketFit...</h1>
          <img src={FitnessLogo} alt="pocket-fit-logo" className="hola"/>
        </div>
      </div>

      <div
        className="hola"
        style={{ position: "absolute", left: "10vw", top: "4vw" }}
      >
        <img className="hola" src={ProfilePhoto} alt="profile" />

        <div
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          className="hola"
        >
          <label className="hola" htmlFor="email">
            E-Mail
          </label>
          <input className="hola" name="email" type="email" />
          <label className="hola" htmlFor="pass">
            Contraseña
          </label>
          <input className="hola" name="pass" type="password" />
        </div>
        <Link to="/session/home">
          <button className="hola">
            Iniciar Sesión
          </button>
        </Link>

        <Link to="/passreco">
          <h6 className="hola">
            OLVIDÉ MI CONTRASEÑA
          </h6>
        </Link>

        <h6 className="hola">Powered by</h6>
        <img src={LandingIcon} alt="pocket-fit-logo" className="w-4/5" />
      </div>
    </div>
  );
}

export default Login;
