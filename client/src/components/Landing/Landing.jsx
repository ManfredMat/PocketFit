import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { LandingDiv, CargandoLanding, ContainerLanding } from "./Landing.styles";
import LandingIcon from '../../assets/img/landingicon.svg'
import { Container, Wave } from "../Login/Login.styles";
import LogingWave from "../../assets/img/loginwave.svg";

function Landing() {
    const navigate = useNavigate();
    let isLogged = false;

    useEffect(() => {
        const timer = setTimeout(() => {
          isLogged ? navigate("/session/home") : navigate("/login")
        }, 3000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line 
      }, []);

    return (
        <ContainerLanding>
          <LandingDiv>
            <img src={LandingIcon} alt="pocket-fit-logo" />
            <h2 style={{color: '#fff', marginTop: -5}}>Cargando...</h2>
          </LandingDiv>
        </ContainerLanding>
    )
};

export default Landing;

