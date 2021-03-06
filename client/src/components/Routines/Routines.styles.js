import styled from "styled-components";

/* 
Candela Aznarez16:52
TitleH2Styled: styled.h2`
    color: #ffffff;
    font-size: 1.4em;
    font-weight: 500;
    text-transform: capitalize;
  `,
TitleH1Styled: styled.h1`
    color: #ffffff;
    font-weight: 400;
    font-size: 2em;
  `,
Candela Aznarez16:53
,
  TitleH3Styled: styled.h3`
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 500;
    text-transform: capitalize;
    margin: 1em 0em 0.5em 0em;
  `, */

export const PageContainer = styled.div`
    background-color: var(--darkGray-base);
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;   
    padding-bottom:2em;
    width: 100vw; 
    min-height: 100vh;
    h1{
        font-weight: 400;
        font-size: 2em;
        margin-top: 2rem;
        margin-bottom: 2rem;
        color:white;
    }
`

export const WeekDayContainer = styled.div`
    width: 13vw;
    height:3.5vh;
    background-color: #D9FB52;
    background-color: ${props => props.block === '1'
        ? '#D9FB52'
        : props.block === '2'
            ? '#CEFA1F'
            : props.block === '3'
                ? '#B4E005'
                : '#D9FB52'
    };
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    
    color: black;
    h3{
        
        font-size: 0.8em;
        font-weight: 500;
        span{
            font-weight: bolder;
        }
    }
    .number{
        color: white;
        margin-left: 20%;
        background-color: #041D25;
        
        height: 2rem;
        width: 2rem;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        ${props => props.center ? 'margin: 0 auto;' : ''}
    }
`

export const DayContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color:white;
`

export const EditButton = styled.button`
background-color: #6AE056;
        border: none;
        border-radius: 0.25rem;
        margin-right: 1em;
        &:hover{
            cursor: pointer;
        }
`

export const BlockContainer = styled.div`
    
    width: 13vw;
    height: 12vw;
    
    background-color: ${props => props.block === '1'
        ? '#D9FB52'
        : props.block === '2'
            ? '#CEFA1F'
            : '#B4E005'};
            
    margin-top: 0.7rem;
    border-radius: 0.5rem;
`

export const ExcerciseContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ExerciseP = styled.p`
    background-color: ${props => props.inactive ? '#3d3d3d' : '#041D25'};
    height: 2vw;
    width: 95%;
    border-radius: 0.6rem;
    margin-bottom: 0.6rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.80rem;
    &:first-child{
        margin-top: 0.6rem;
    }
`

export const ExerciseDelete = styled.p`
    background-color: red;
    height: 2vw;
    width: 95%;
    border-radius: 0.6rem;
    margin-bottom: 0.6rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.80rem;
    margin-top: 0.6rem;
    
    position: absolute;
    opacity: 0%;
    transition: opacity 0.25s;
    
    &:hover{
        
        cursor: pointer;
        opacity: 95%;
        
    }
`

export const LeftBarContainer = styled.div`
    .LeftBar-FirstBlock{
        background-color: #D9FB52;
        border-radius: 0.5rem;
        height:3.25em;
        width: 5rem;
        margin-bottom: 0.7rem;
        
    }
    .LeftBar-SecondBlock{
        background-color: #D9FB52;
        border-radius: 0.5rem;
        height: 12vw;
        margin-bottom: 0.7rem;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .LeftBar-ThirdBlock{
        background-color: #CEFA1F;
        border-radius: 0.5rem;
        height: 12vw;
        margin-bottom: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
    }
    .LeftBar-FourthBlock{
        background-color: #B4E005;
        border-radius: 0.5rem;
        height: 12vw;
        margin-bottom: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
    }
    p{
        font-size: 2rem;
        background-color: #041D25;
        border-radius: 100%;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const ConteinerSaveDeleteChanges = styled.div`
    position:absolute;
    right:-1vw;
    bottom:5vh;
`

export const SaveDeleteChanges = styled.button`
    margin-right: 1rem;
    border: none;
    width: auto;
    height:1.7em;
    border-radius: 0.6rem;
    color: var(--darkGray-medium);
    font-size: 1.1rem;
    font-weight: 550;
    background-color: ${props => props.action === 'save'
        ? '#479639'
        : props.action === 'delete'
            ? '#739e37'
            : '#479639'
    };
    &:hover{
        cursor: pointer;
    }
`

export const PopUpContainer = styled.div`
    background-color: #041D25;
    width: 60rem;
    height: 40rem;
    border-radius: 1rem;
    position: fixed;
`

export const BackPop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: rgba(0,0,0,0.8);
`

export const BlockEditDayContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const EditDayContainer = styled.div`
    height: 34rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 3.2rem;
    margin-right: 3.2rem;
    margin-top: 3rem;
    h3{
        font-size: 1.2em;
        font-weight: 500;
        span{
            font-weight: bolder;
        }
    }
    h2{
        text-align: center;
        font-size: 1.4em;
        font-weight: 500;
    }
    .InputContainer{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin: 0 auto;
        font-size: 1.5rem;
        label{
            
            margin-bottom: 0.5rem;
        }
    }
`

export const InputStyle = styled.input`
border-radius: 1rem;
border:none;
background-color: #6AE056;
color: #083645;
font-size: 1.2rem;
padding-left: 1rem;
padding-top: 0.3rem;
padding-bottom: 0.3rem;
::placeholder{
    color: #083645;
    font-size: 1rem;
}
`

export const SelectStyle = styled.select`
    background-color: red;
    border-radius: 1rem;
    border:none;
    background-color: #6AE056;
    color: #083645;
    font-size: 1.2rem;
    padding-left: 1rem;
    
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const AcceptButton = styled.button`
    font-size: 1.2rem;
    width: 12rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border:none;
    background-color: #6AE056;
    color: #083645;
    font-weight: 550;
    &:hover{
        cursor: pointer;
    }
    :disabled{
        background-color: gray;
    }
`

export const CancelButton = styled.button`
    font-size: 1.2rem;
    width: 7rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border:none;
    background-color: #AFF154;
    color: #083645;
    font-weight: 550;
    margin-left: 1rem;
    &:hover{
        cursor: pointer;
    }
`

export const EditBlockContainer = styled.div`
    display: flex;
    height: 28rem;
    .Block{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .Scale{
            transform: scale(1.3);
        }
    }
    .Inputs{
        margin-top: 2.4rem;
        width: 50%;
        .InputsContainer{
        
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    
        label{
            
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
            font-weight: 300;
            color: #8BE855;
    
        }
    
    }
    }
`

export const InputLabelContainer = styled.div`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    
    label{         
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 300;
    color: #8BE855;
        }
`

export const KindOfBlockContainer = styled.p`
        color: black;
        font-size: 1rem;
        width: 100%;
        margin-left: 1.5rem;
        font-weight: bold;
`

export const RoundsContainer = styled.div`
    background-color: #6AE056;
    color: #020E12;
    font-weight: bold;
    height: 2vw;
    width: 70%;
    border-radius: 0.6rem;
    margin-bottom: 0.6rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.80rem;
`
export const HeaderConteiner= styled.div`
display:flex;
justify-content: flex-start;
width:100%;
margin-top:0.5rem;
margin-bottom:0.5rem;
position:relative;
`