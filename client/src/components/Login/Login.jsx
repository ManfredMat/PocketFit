import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProfilePhoto from "../../assets/img/profilephoto.svg";
import footer from "../../assets/img/footer.svg";
import LogingWave from "../../assets/img/loginwave.svg";
import { useState } from "react";
import { LogIn } from '../../redux/Actions/actions-Prueba'
import { useDispatch, useSelector } from "react-redux";
import { ContainerIn, Input, Container, Btn, TextGreen, Wave} from "./Login.styles";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const getSession = useSelector((state) => state.state.session)
  
  const [loading, setLoading] = useState(false)
  const check = async () => {
    if(getSession.length !== 0){
      getSession.passport.user.isadmin ? navigate('/session')
      : alert('usted no es administrador, para continuar descargue PocketFit mobile')
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
          <Wave src={LogingWave} alt="pocket-fit-logo"/>
        </div>
      <div style={{width: 500, marginTop: -250}}>
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
          <img style={{position: 'relative', marginBottom: -40}} src={ProfilePhoto} alt="profile" />
        <ContainerIn>
          <label htmlFor="email" style={{marginLeft: 35}}>
            E-Mail
          </label>
          <Input name="email" type="email" onChange={(e) => handleChange(e, 'email')}/>
          <label htmlFor="pass" style={{marginLeft: 35}}>
            Contraseña
          </label>

          <Input name="pass" type="password"  onChange={(e) => handleChange(e, 'password')} />
        </ContainerIn>
          <Btn onClick={(e)=>handleSubmit(e)}>

            Iniciar Sesión
          </Btn>

        <Link to="/passreco" style={{textDecoration: 'none'}}>
          <TextGreen>
            OLVIDÉ MI CONTRASEÑA
          </TextGreen>
        </Link>
            <h6 style={{color: '#fff', marginBottom: -0.5}}>Powered by</h6>
            <img style={{marginBottom: 120}}src={footer} alt="pocket-fit-logo"/>
        </div>
      </div>
    </Container>
  );
}

export default Login;
