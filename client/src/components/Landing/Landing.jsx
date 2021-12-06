import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { LandingDiv, ContainerLanding } from "./Landing.styles";
import LandingIcon from '../../assets/img/landingicon.svg';
   
function Landing() {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("isLogged");

    useEffect(() => {
        const timer = setTimeout(() => {
          isLogged === "true" ? navigate("/session/home") : navigate("/login")
        }, 3000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line 
      }, []);

    return (
        <ContainerLanding>
          <LandingDiv>
            <img src={LandingIcon} alt="pocket-fit-logo" />
            <h2 style={{color: "#DFFC52", marginTop: -5}}>Cargando...</h2>
          </LandingDiv>
        </ContainerLanding>
    )
    };

export default Landing;

