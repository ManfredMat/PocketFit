import footer from "../../assets/img/footer.svg";
import LogingWave from "../../assets/img/loginwave.svg";
import ProfilePhoto from "../../assets/img/profilephoto.svg"
import { Container, ContainerIn, Input, Wave, Btn } from "./Login.styles";



function PassRecovery() {
    return (
        <Container>
            <div>
             <Wave src={LogingWave} alt="pocket-fit-logo"/>
            </div> 
            <div style={{width: 500, marginTop: -250}}>
                <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                    <img style={{position: 'relative', marginBottom: -40}} src={ProfilePhoto} alt="profile" />
                    <ContainerIn>
                        <h3 style={{alignSelf: "center", marginTop: 60}}>Recuperar Contraseña</h3>
                        <Input name="pass" type="text" placeholder="Ingresa tu email"/>
                        <p style={{textAlign: "center", color: 'var(--green)'}}>
                            Las instrucciones para reestablecer la contraseña de tu cuenta se enviarán a esta dirección de email
                        </p>
                    </ContainerIn>
                    <Btn onClick={()=> alert('revise su bandeja de entrada :D')}>Enviar</Btn>
                    <h6 style={{color: '#fff', marginBottom: -0.5}}>Powered by</h6>
                    <img style={{marginBottom: 120}}src={footer} alt="pocket-fit-logo"/>
                </div>    
            </div>     
        </Container>
    )
};

export default PassRecovery;
