import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import LandingIcon from '../../assets/img/landingicon.svg'

function Landing() {
    const navigate = useNavigate();
    let isLogged = false;

    useEffect(() => {
        const timer = setTimeout(() => {
          isLogged ? navigate("/home") : navigate("/login")
        }, 3000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line 
      }, []);

  <h2>Cargando...</h2>
    return (
        <div style={{display: "flex",flexDirection: "column", alignItems: "center", backgroundColor:"black"}}>
            <img src={LandingIcon} alt="PocketFit" />
            <h2 style={{color: "white"}}>Cargando...</h2>
        </div>
    )
};

export default Landing;

