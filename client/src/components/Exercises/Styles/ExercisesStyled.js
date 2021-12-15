import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
* {
    margin:0;
}`,
AllPropBox: styled.div`
  display:flex;
  width:98%;
  justify-content: center;
`,
HeaderConteiner: styled.div`
  display:flex;
  justify-content: space-between;
  width:100%;
  margin-top:0.5rem;
  margin-bottom:0.5rem;
`,      
PropBox: styled.h3`
    background:var(--green-medium);
    width:25%;
    margin:0.3rem;
    height:1.5em;    
    border-radius: 0.3em;
    text-align:center;   
  `,
PropBoxList: styled.h3`
    background:var(--darkGray-medium);
    width:25%;
    margin:0.3rem;
       
    border-radius: 0.3em;
    text-align:center;   
  `,
LinkGreen: styled.a`
    width:100%;
    font-size: 1.5em;
    color: var(--green);
  `,
AllPropBoxComplete: styled.div`
  width:100%;
  justify-content: space-between;
  color:var(--darkGray-medium);
`,

ExerciseConteiner : styled.div`
width:100%;
background: var(--darkGray-base);
padding:1em;
`,
HeaderPropList: styled.h3`
    
    width:25%;
    margin:0.3rem;    
    border-radius: 0.3em;
    color:white;   
  `,
Title: styled.h1`
  margin-top:0.5rem;
  margin-bottom:0.5rem;
  color:white;
`,
YellowButton: styled.button`
    background-color: var(--yellow);
    margin-top:0.5rem;
    padding: .5rem;
    text-decoration: none;
    border-radius: 0.5em;
    border: none;
    color: var(--darkGray-base);
    width: 15rem;
    text-align:center; 
    height: 2em;
    font-weight:700;
    &:hover {
      cursor: pointer;
    }
  `,
SearchBar: styled.input`
        background-color: var(--green);
        border-radius: 0.5rem;
        border-style: hidden;
        margin-top:0.5rem;
        padding: .5rem;
        width: 20rem;
        &::placeholder {
            color: black;
        }
        &:focus{
            outline: none;
        }
    `,
SearchButton: styled.button`
        background-color: transparent;
        border: none;
        margin-left: .3rem;
        &:hover {
            cursor: pointer;
        }
    `,
ConteinerSearchAndButton: styled.div`
display:flex;
width:60%;
justify-content: space-around;
`,
ConteinerHead: styled.div`
display:flex;
width:10%;
justify-content: space-between;
`,
ExerciseStyle: styled.div`
&:hover {
  cursor: pointer;
}
`,
  
};

export default Styles;