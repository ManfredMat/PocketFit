import { useState } from "react";
import { useNavigate } from "react-router";
import footer from "../../assets/img/footer.svg";
import LogingWave from "../../assets/img/loginwave.svg";
import ProfilePhoto from "../../assets/img/profilephoto.svg"
import { Container, ContainerIn, Input, Wave, Btn } from "./Login.styles";
import axios from "axios";

function PassRecovery() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: ''
  })

  const handleChange = (e, type) => {
    setInput({
      ...input,
      [type]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.email.length < 1) {
      alert("Completa el campo email")
    } else {
      if (validatorEmail(input.email)) {
        mailPassReco({
          email: input.email
        });
      } else {
        alert("Email invalido")
      }
    }
  }

  const validatorEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true
    else return false
  }

  const mailPassReco = async (mail) => {
    const res = await sendMailPassReco(mail);
    if (res.data === "Something went wrong") return alert("El Email ingresado no coincide con el registrado en la base de datos")
    localStorage.setItem("recoEmail", input.email);
    alert('Instrucciones enviadas, revise su bandeja de entrada');
    navigate("/resetpassword");
  }

  const sendMailPassReco = async (datos) => {
    return await axios({
      method: "post",
      url: "http://localhost:3001/api/resetpassword/forgotten_password",
      data: datos,
      withCredentials: true
    });
  };

  return (
    <Container>
      <div>
        <Wave src={LogingWave} alt="pocket-fit-logo" />
      </div>
      <div style={{ width: 500, marginTop: -350 }}>
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginLeft: "8rem" }}>
          <img style={{ position: 'relative', marginBottom: -40 }} src={ProfilePhoto} alt="profile" />
          <ContainerIn>
            <h3 style={{ alignSelf: "center", marginTop: 60 }}>Recuperar Contraseña</h3>
            <Input name="recopass" type="email" placeholder="Ingresa tu email" onChange={(e) => handleChange(e, "email")} />
            <p style={{ textAlign: "center", color: 'var(--green)', fontSize: ".8rem", marginTop: 0, marginLeft: 2, marginRight: 2 }}>
              Las instrucciones para reestablecer la contraseña se enviarán a esta dirección de email asociada a tu cuenta
            </p>
          </ContainerIn>
          <Btn onClick={(e) => handleSubmit(e)}>Enviar</Btn>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5rem" }}>
            <h6 style={{ color: '#fff', marginBottom: -0.5 }}>Powered by</h6>
            <img src={footer} alt="pocket-fit-logo" />
          </div>
        </div>
      </div>
    </Container>
  )
};

export default PassRecovery;
