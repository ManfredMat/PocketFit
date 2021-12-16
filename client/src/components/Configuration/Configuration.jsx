import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Styles/*, { CheckBoxLabel }*/ from './Configuration.styles';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getAdmin } from "../../redux/Actions/actions-login";
import defaulProfilePhoto from "../../assets/img/profilephoto.svg";

function Configuration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id = localStorage.getItem("number");
    const adminProfileImage = useSelector(state => state.session.admin.imageData);
    const [file, setFile] = useState();

    const [newsletter, setNewsletter] = useState({
        subject: "",
        news: ""
    })

    useEffect(() => {
        dispatch(getAdmin(id))
    }, [id, dispatch]);

    const onFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

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

    const sendImage = async (e) => {
        const data = new FormData();
        data.append("photo", file);

        await axios.put(`http://localhost:3001/api/users/${id}`, data, { withCredentials: true, headers: { "content-Type": `multipart/form-data; boundary=${data._boundary}` } })
            .then(res => console.log(res))
            .catch(err => console.log(err));

        window.location.reload(true)
    }


    return (
        <Styles.Container>
            <Styles.ContainerRow>
                {/* <Styles.Box>
                    <Styles.BoxText>Notificaciones</Styles.BoxText>
                    <Styles.CheckBoxWrapper>
                        <Styles.CheckBox id="checkbox-noti" type="checkbox" />
                        <CheckBoxLabel htmlFor="checkbox-noti" />
                    </Styles.CheckBoxWrapper>
                </Styles.Box> */}

                <Styles.SubContainer>
                    <Styles.NewsletterBox>
                        <Styles.NewsletterTitle>Newsletter</Styles.NewsletterTitle>
                        <Styles.NewletterSubject type="text" placeholder="Escriba aquí el asunto" onChange={(e) => onChange(e, "subject")} />
                        <Styles.NewletterBody type="text" placeholder="Escriba aquí la noticia" rows="10" cols="80" onChange={(e) => onChange(e, "news")} />
                        <Styles.GreenButton onClick={onSubmit}>Enviar</Styles.GreenButton>
                    </Styles.NewsletterBox>
                </Styles.SubContainer>

                <Styles.SubContainer>
                    <Styles.FileBox>
                        <Styles.FileTitle>Foto de perfil</Styles.FileTitle>

                        <Styles.InputImage type="file" accept=".jpg, .jpeg" onChange={(e) => onFileChange(e)} />

                        {
                            adminProfileImage ?
                            <Styles.AdminProfilePhoto  
                            src={`data:image/jpeg;base64, ${adminProfileImage}`} 
                            alt="admin-profile-img" />
                            :
                            <Styles.NoImageContainer>
                                    <Styles.AdminProfilePhoto 
                                    src={ defaulProfilePhoto } 
                                    alt="admin-profile-img" />

                            </Styles.NoImageContainer>
                        }

                        <Styles.GreenButton  style={{marginTop: "3.2rem"}} onClick={sendImage}>Enviar</Styles.GreenButton>
                    </Styles.FileBox>
                </Styles.SubContainer>
            </Styles.ContainerRow>
            <Styles.LogOutGreenButton onClick={logOut}>Cerrar Sesión</Styles.LogOutGreenButton>
        </Styles.Container>
    )
}

export default Configuration;
