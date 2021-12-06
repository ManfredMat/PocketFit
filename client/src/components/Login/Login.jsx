import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProfilePhoto from "../../assets/img/profilephoto.svg";
import footer from "../../assets/img/footer.svg";
import LogingWave from "../../assets/img/loginwave.svg";
import { useState } from "react";
import { LogIn } from '../../redux/Actions/actions-login'
import { useDispatch, useSelector } from "react-redux";
import { ContainerIn, Input, Container, Btn, TextGreen, Wave } from "./Login.styles";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getSession = useSelector((state) => state.session.session);
  const [loading, setLoading] = useState(false);

  const check = () => {
    if (getSession.length !== 0) {
      if (getSession === "Email not found") {
        alert("No se ha encontrado el email en nuestra base de datos"); setLoading(false)
      } else if (getSession === "Password mismatch") {
        alert("La contraseña ingresada es incorrecta"); setLoading(false)
      } else {
        if(getSession.passport.user.isadmin) {
          const id = getSession.passport.user.id;
          localStorage.setItem("number", id);
          navigate('/session/home');
        } else {
          alert('Usted no es administrador, para continuar descargue PocketFit mobile'); setLoading(false)
        }
      }
    } else alert("No se pudo iniciar sesión"); setLoading(false)
  }

  loading && check()

  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e, type) => {
    setInput({
      ...input,
      [type]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (input.email.length > 1 && input.password.length > 1) {
        if (!validatorEmail(input.email)) return alert("Email inválido")
      } else return alert("Completa todos los campos")

      await dispatch(LogIn(input))
      setLoading(true)
    } catch (e) {
      alert("No se pudo iniciar sesión")
    }
  }
  let regularExprecion = "/^+([-]?+)*@+([-]?+)*({2,3})+$/"
  const validatorEmail = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true
    else return false
  }


  return (
    <Container>
      <div>
        <Wave src={LogingWave} alt="pocket-fit-logo" />
      </div>
      <div style={{ width: 500, marginTop: -350 }}>
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginLeft: "8rem" }}>
          <img style={{ position: 'relative', marginBottom: -40 }} src={ProfilePhoto} alt="profile" />
          <ContainerIn>
            <label htmlFor="email" style={{ marginLeft: 35 }}>
              E-Mail
            </label>
            <Input name="email" type="email" onChange={(e) => handleChange(e, 'email')} />
            <label htmlFor="pass" style={{ marginLeft: 35 }}>
              Contraseña
            </label>
            <Input name="pass" type="password" onChange={(e) => handleChange(e, 'password')} />
          </ContainerIn>
          <Btn onClick={(e) => handleSubmit(e)}>

            Iniciar Sesión
          </Btn>

          <Link to="/passreco" style={{ textDecoration: 'none' }}>
            <TextGreen>
              OLVIDÉ MI CONTRASEÑA
            </TextGreen>
          </Link>
          <div style={{ marginTop: 21, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h6 style={{ color: '#fff', marginBottom: -2 }}>Powered by</h6>
            <img src={footer} alt="pocket-fit-logo" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
