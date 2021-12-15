import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
* {
    margin:0;    
}`,
Title: styled.h1`
margin-top:0.5rem;
margin-bottom:0.5rem;
margin-left:0.5em;
color:var(--yellow);

`,
Title2: styled.h2`
margin-top:0.5rem;
margin-bottom:0.5rem;
margin-left:0.5em;
width:60%;
background-color:var(--green);
color:var(--darkGray-medium);
border-radius:0.5em;
padding-left:1em;
`,
Title3: styled.h2`
margin-top:0.5rem;
margin-bottom:0.5rem;
margin-left:0.5em;
width:35%;
background-color:var(--yellow);
color:var(--darkGray-medium);
text-align:center;
border-radius:0.5em;
`,
LeftDiv: styled.div`
display:flex;
width:70%;
flex-direction:column;
`,
RightDiv: styled.div`
display:flex;
width:28%;
flex-direction:column;
background-color:rgb(88, 138, 88);
padding-left:1em;
border-radius:0.3em;
`,
RightDivDescription: styled.h3`
margin-top:1em;
color:var(--yellow);
`,
RightDivTitle: styled.h2`
color:var(--yellow);
`,
InnerLeftDiv: styled.div`
display:flex;
width:100%;
flex-direction:row;
`,
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
        border-radius: 1rem;
        height: 80%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    `,
CloseButton: styled.button`
border-style: none;
background-color: var(--darkGray-base);
border-radius: 50%;
margin: 1rem;
color: var(--green);
position: absolute;
bottom: 80vh;
left: 80vw;
width: 2rem;
height: 2rem;
font-family: "Poppins";
font-weight: 600;
font-size: 1rem;
&:hover{
    cursor: pointer;
}
`,
GreenButton: styled.button`
    background-color: var(--green-medium);
    padding: 0.5em 0.7em;
    text-decoration: none;
    border-radius: 0.5em;
    border: none;
    color: var(--darkBlue);
    //width: 8em;
    height: 2em;
    font-weight:700;
    margin-left: 1em;
    &:hover{
    cursor: pointer;
    }
  `,
  ConteinerHead: styled.div`
  display:flex;
  width:100%;
  justify-content: space-between;
  `,
  Header: styled.div`
  width:20%;
  display:flexbox;
  `,
  UnderCard: styled.div`
  display:flex;
  width:95%;
  height:80%;
  justify-content: space-between;
  `,
  ConteinerEdit: styled.div`
  margin-top:1em;
  `,
  
};

export default Styles;