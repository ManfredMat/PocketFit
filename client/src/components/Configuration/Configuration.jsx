import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Styles, { CheckBoxLabel }  from './Configuration.styles';

function Configuration() {
    const navigate = useNavigate();
    const logOut = async () => {
        await axios({
            method: "get",
            url: "http://localhost:3001/api/logout",
            withCredentials: true
        });
        localStorage.removeItem("isLogged");
        localStorage.removeItem("number");
        navigate("/login")
    }

    return (
        <Styles.Container>
            <Styles.Box>
                <Styles.BoxText>Notificaciones</Styles.BoxText>
                <Styles.CheckBoxWrapper>
                    <Styles.CheckBox id="checkbox-noti" type="checkbox" />
                    <CheckBoxLabel htmlFor="checkbox-noti" />
                </Styles.CheckBoxWrapper>
            </Styles.Box>

            <Styles.Box>
                <Styles.BoxText>Newsletter</Styles.BoxText>
                <Styles.CheckBoxWrapper>
                    <Styles.CheckBox id="checkbox-news" type="checkbox" />
                    <CheckBoxLabel htmlFor="checkbox-news" />
                </Styles.CheckBoxWrapper>
            </Styles.Box>

            <Styles.GreenButton onClick={logOut}>Cerrar Sesión</Styles.GreenButton>
        </Styles.Container>
    )
}

export default Configuration
