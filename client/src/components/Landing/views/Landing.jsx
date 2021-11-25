import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
          isLogged ? navigate("/home") : navigate("/login")
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    let isLogged = false;

    return (
        <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
            <h1>PocketFit</h1>
            <h2>Cargando...</h2>
        </div>
    )
};

export default Landing;

