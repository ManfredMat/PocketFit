import React, { useState } from 'react';
import { useNavigate } from "react-router";
import footer from "../../assets/img/footer.svg";
import LogingWave from "../../assets/img/loginwave.svg";
import ProfilePhoto from "../../assets/img/profilephoto.svg"
import { Container, ContainerIn, Input, Wave, Btn } from "./Login.styles";

function ResetPassword() {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        newPassword: "",
        repeatNewPassword: ""
    })

    const handleChange = (e, type) => {
        setInput({
            ...input,
            [type]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (input.newPassword.length > 1 && input.repeatNewPassword.length > 1) {
                if (input.newPassword !== input.repeatNewPassword) return alert("Las contraseñas no coinciden")
            } else return alert("Por favor completa todos los campos");

            // const datos = {
            //     newPassword: input.newPassword,
            //     repeatNewPassword: input.repeatNewPassword
            // };

            // await changeUserPassword(state.newPassword);
            alert("Contraseña cambiada satisfactoriamente");
            navigate('/login');

        } catch (e) {
            alert("No se pudo cambiar la contraseña")
        }

    }


    return (
        <Container>
            <div>
                <Wave src={LogingWave} alt="pocket-fit-logo" />
            </div>
            <div style={{ width: 500, marginTop: -350 }}>
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginLeft: "8rem" }}>
                    <img style={{ position: 'relative', marginBottom: -40 }} src={ProfilePhoto} alt="profile" />
                    <ContainerIn style={{ paddingTop: 40 }}>
                        <label htmlFor="newPassword" style={{ marginLeft: 35 }}>
                            Nueva Contraseña
                        </label>
                        <Input name="newPassword" type="password" onChange={(e) => handleChange(e, 'newPassword')} />
                        <label htmlFor="repeatNewPassword" style={{ marginLeft: 35 }}>
                            Repetir Nueva Contraseña
                        </label>
                        <Input name="repeatNPassword" type="password" onChange={(e) => handleChange(e, 'repeatNewPassword')} />
                    </ContainerIn>
                    <Btn onClick={(e) => handleSubmit(e)}>Cambiar Contraseña</Btn>
                    <div style={{ marginTop: 40, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h6 style={{ color: '#fff', marginBottom: -2 }}>Powered by</h6>
                        <img src={footer} alt="pocket-fit-logo" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ResetPassword
