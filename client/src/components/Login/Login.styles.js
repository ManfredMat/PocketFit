import styled from "styled-components";
import imge from '../../assets/img/loginbackground.png'
//#FFFFFF4D
//background-size: contain;
export const Container = styled.div`
    background-image: url(${imge});
    background-repeat: no-repeat
    width: 100%
    height: 100%
    background-size: cover;
`



export const ContainerIn = styled.div`
    background-color: #000;
    border-radius: 3rem;
    padding: 5rem;
    width: 20rem;
    height: 5rem;
`
export const Input = styled.input`
    background-color: #FFFFFF4D;
    width: 20rem;
    padding: .4rem;
    margin: 1rem
    border: none;
    border-radius: 1rem;
    align-self: center;
`