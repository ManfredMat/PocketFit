import styled from "styled-components";
import imge from '../../assets/img/loginbackground.png'

export const ContainerLanding = styled.div`
    background-image: url(${imge});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LandingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`