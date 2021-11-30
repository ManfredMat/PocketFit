import { useState } from "react";
import { useNavigate } from "react-router";
import footer from "../../assets/img/footer.svg";
import LogingWave from "../../assets/img/loginwave.svg";
import ProfilePhoto from "../../assets/img/profilephoto.svg"
import { Container, ContainerIn, Input, Wave, Btn } from "./Login.styles";

function PassRecovery() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email:''
      })
      
      const handleChange = (e, type) => {
        setInput({
          ...input,
          [type]: e.target.value
        })
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.email < 1) {
          alert("Completa el campo email")
        } else {
          if (validatorEmail(input.email)) {
            alert('Instrucciones enviadas, revise su bandeja de entrada')
            navigate("/login")
          } else {
            alert("Email invalido")
          }
        }
      }
    
    const validatorEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true
        else return false
      }

    return (
        <Container>
            <div>
             <Wave src={LogingWave} alt="pocket-fit-logo"/>
            </div> 
            <div style={{width: 500, marginTop: -350}}>
                <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', marginLeft: "8rem"}}>
                    <img style={{position: 'relative', marginBottom: -40}} src={ProfilePhoto} alt="profile" />
                    <ContainerIn>
                        <h3 style={{alignSelf: "center", marginTop: 60}}>Recuperar Contraseña</h3>
                        <Input name="recopass" type="email" placeholder="Ingresa tu email" onChange={(e) => handleChange(e, "email")}/>
                        <p style={{textAlign: "center", color: 'var(--green)', fontSize: ".8rem", marginTop: 0}}>
                            Las instrucciones para reestablecer la contraseña de tu cuenta se enviarán a esta dirección de email
                        </p>
                    </ContainerIn>
                    <Btn onClick={(e)=> handleSubmit(e)}>Enviar</Btn>
                    <h6 style={{color: '#fff', marginBottom: -0.5}}>Powered by</h6>
                    <img style={{marginBottom: 120}}src={footer} alt="pocket-fit-logo"/>
                </div>    
            </div>     
        </Container>
    )
};

export default PassRecovery;
