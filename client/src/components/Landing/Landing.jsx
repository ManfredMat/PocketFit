import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { LandingDiv, CargandoLanding } from "./Landing.styles";

import LandingIcon from '../../assets/img/landingicon.svg'

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
        <LandingDiv>
            <img src={LandingIcon} alt="pocket-fit-logo" />
            <h3 className="CargandoLanding">Cargando...</h3>
        </LandingDiv>
    )
};

export default Landing;

