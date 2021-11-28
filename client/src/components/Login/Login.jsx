import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProfilePhoto from "../../assets/img/profilephoto.svg";
import LandingIcon from "../../assets/img/landingicon.svg";
import LogingWave from "../../assets/img/loginwave.svg";
import FitnessLogo from "../../assets/img/fitnesslogo.svg";
import { useState } from "react";
import { LogIn } from '../../redux/Actions/actions-Prueba'
import { useDispatch, useSelector } from "react-redux";
import { ContainerIn, Input, Container } from "./Login.styles";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const getSession = useSelector((state) => state.state.session)
  
  const [loading, setLoading] = useState(false)
  const check = async () => {
    if(getSession.length !== 0){
      getSession.passport.user.isadmin ? navigate('/home')
      : alert('usted no es administrador, para continuar descargue PocketFit movile')
    }
}
console.log(getSession.passport)

  const [input, setInput] = useState({
    email:'',
    password:'',
  })
  
  const handleChange = (e, type) => {
    setInput({
      ...input,
      [type]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LogIn(input))
    setLoading(true)
  }
  loading && check()
console.log(loading)
  
  return (
    <Container>
      <div>
        <img src={LogingWave} alt="pocket-fit-logo"/>
        <div>
          <h1>Bienvenido a PocketFit...</h1>
          <img src={FitnessLogo} alt="pocket-fit-logo" />
        </div>
      </div>

      <div 
      style={{ position: "absolute", 
               left: "10vw", 
               top: "4vw", 
               display: "flex", 
               flexDirection: "column", 
               alignItems: "center"}}>

        <img style={{position: 'relative', marginBottom: -40}} src={ProfilePhoto} alt="profile" />

        <ContainerIn>
          <label htmlFor="email">
            E-Mail
          </label>
          <Input name="email" type="email" onChange={(e) => handleChange(e, 'email')}/>
          <label htmlFor="pass">
            Contraseña
          </label>
          <Input name="pass" type="password"  onChange={(e) => handleChange(e, 'password')} />
        </ContainerIn>
          <button onClick={(e)=>handleSubmit(e)}>
            Iniciar Sesión
          </button>

        <Link to="/passreco">
          <h6 className="hola">
            OLVIDÉ MI CONTRASEÑA
          </h6>
        </Link>

        <h6 className="hola">Powered by</h6>
        <img src={LandingIcon} alt="pocket-fit-logo"/>
      </div>
    </Container>
  );
}

export default Login;
