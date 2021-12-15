import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Styles/*, { CheckBoxLabel }*/ from './Configuration.styles';

function Configuration() {
    const navigate = useNavigate();
    const [newsletter, setNewsletter] = useState({
        subject: "",
        news: ""
    })

    const onChange = (e, type) => {
        setNewsletter({
            ...newsletter,
            [type]: e.target.value
        })
    }
    const onSubmit = async (e) => {
        const res = await axios({
            method: "post",
            url: "http://localhost:3001/api/news/sendnews",
            data: newsletter
        })
        if (res.data.message === "All messages delivered") {   
            alert("Newsletter enviado a todos los usuarios suscriptos")
        } else {
            alert("Newsletter no enviado, inténtelo nuevamente mas tarde")
        }
    }

    const logOut = async () => {
        await axios({
            method: "get",
            url: "http://localhost:3001/api/logout"
        });
        localStorage.removeItem("isLogged");
        localStorage.removeItem("number");
        navigate("/login")
    }


    return (
        <Styles.Container>

            {/* <Styles.Box>
                <Styles.BoxText>Notificaciones</Styles.BoxText>
                <Styles.CheckBoxWrapper>
                    <Styles.CheckBox id="checkbox-noti" type="checkbox" />
                    <CheckBoxLabel htmlFor="checkbox-noti" />
                </Styles.CheckBoxWrapper>
            </Styles.Box> */}

            <Styles.NewsletterBox>
                <Styles.NewsletterTitle>Newsletter</Styles.NewsletterTitle>
                <Styles.NewletterSubject type="text" placeholder="Escriba aquí el asunto" onChange={(e) => onChange(e, "subject")} />
                <Styles.NewletterBody type="text" placeholder="Escriba aquí la noticia" rows="10" cols="80" onChange={(e) => onChange(e, "news")} />
                <Styles.GreenButton onClick={onSubmit}>Enviar</Styles.GreenButton>
            </Styles.NewsletterBox>

            <Styles.LogOutGreenButton onClick={logOut}>Cerrar Sesión</Styles.LogOutGreenButton>

        </Styles.Container>
    )
}

export default Configuration
