import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Configuration() {
    const navigate = useNavigate();
    const logOut = async () => {
        await axios({
            method: "get",
            url: "http://localhost:3001/api/logout",
            withCredentials: true
        });
        localStorage.removeItem("isLogged");
        navigate("/login")
    }

    return (
        <div>
            <button onClick={logOut}>LOGOUT</button>
        </div>
    )
}

export default Configuration
