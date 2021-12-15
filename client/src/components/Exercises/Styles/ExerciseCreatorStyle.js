import styled, { createGlobalStyle } from "styled-components";
const Styles = {
  GlobalStyle: createGlobalStyle`
* {
    margin:0;
    
}`,
Container: styled.div`
background-color: rgba(0,0,0,0.8);;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`,
Card: styled.div`
        background-color: var(--darkBlue);
        border-radius: 1.5rem;
        height: auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:2em;
        position:relative;
    `,
Title: styled.h1`
    margin-top:0.5rem;
    margin-bottom:0.5rem;
    
    color:var(--yellow);
    
    `,
ConteinerHead: styled.div`
    display:flex;
    width:100%;
    height:15%;
    justify-content: space-between;
    `,  
FormConteiner: styled.div`
    display:flex;
    flex-direction:row;
    height:25em;
    width:auto;
`,
ConteinerCard: styled.div`
    height:auto;
    width:100%;
  `,
InputForm: styled.input`
    background-color: var(--green);
    border-radius: 0.5rem;
    border-style: hidden;    
    width: 20rem;
    &::placeholder {
        color: black;
    }
    &:focus{
        outline: none;
    }
    `,
InputFormSumbit: styled.input`
    background-color: var(--green);
    border-radius: 0.5rem;
    border-style: hidden;
    padding: .5rem;
    width: 20rem;
    margin-left:9em;
    margin-top:1em;
    &::placeholder {
        color: black;
    }
    &:focus{
        outline: none;
    }
    &:hover{
        cursor: pointer;
        }
`,
InputConteiner: styled.div`
    display:flex;
    margin-top:2em;
    `,  
InnerForm: styled.div`
    display:flex;
    flex-direction:column;
    height:auto;
    width:60%;
    `,
LabelInput: styled.h2`
    
    border-radius: 0.5rem;
    
    margin-right:0.5em;
    width:15rem;
    height:1.5em;
    color:var(--darkBlue);
    background-color:var(--yellow);
    text-align:center;
    
    `,
ConteinerVideo: styled.div`
    width:40%;
    height:20em;
    border-radius:1em;
    background-color:var(--green-medium);
    overflow:hidden;
    `,
ConteinerImagen: styled.div`
    width:100%;
    height:100%;
    margin-top:12%;
    justify-content:center;
    `,
CloseButton: styled.button`
    border-style: none;
    background-color: var(--darkGray-base);
    border-radius: 50%;
    margin: 1rem;
    color: var(--green);
    position: absolute;
    top:0;
    right:0;
    width: 2.5rem;
    height: 2.5rem;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1rem;
    &:hover{
        cursor: pointer;
    }
    `,       
};


export default Styles;