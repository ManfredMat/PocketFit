import styled, { createGlobalStyle } from "styled-components";
import NotifiIcon from "../../assets/img/iconos/notifi.svg";
import NotifiIconSelect from "../../assets/img/iconos/select-icons/notifi-select.svg";
import NewEventIco from "../../assets/img/iconos/newActivity.svg";
import NewEventIcoSelect from "../../assets/img/iconos/select-icons/newActivity-select.svg";
import HomeIco from "../../assets/img/iconos/Home.svg";
import HomeIcoSelect from "../../assets/img/iconos/select-icons/house-select.svg";
import UserIco from "../../assets/img/iconos/User.svg";
import UserIcoSelect from "../../assets/img/iconos/select-icons/user-select.svg";
import ConfigIco from "../../assets/img/iconos/config.svg";
import ConfigIcoSelect from "../../assets/img/iconos/select-icons/config-select.svg";


const Styles = {
  GlobalStyle: createGlobalStyle`
    * {
        margin:0
    }`,
  StyledBody: styled.div`
    @media only screen and (max-width: 1160px) {
      position: sticky;
      top:0;
      display: flex;
      flex-direction: column;
      background: var(--darkGray-medium);
      width: 4rem;
      height: 100vh;
    }
    @media only screen and (min-width: 1161px) {
      position: sticky;
      top:0;
      display: flex;
      flex-direction: column;
      background: var(--darkGray-medium);
      height: 100vh;
      width: 5rem;
    }
  `,
  StyledNavContainer: styled.div`
    width: -webkit-fill-available;
    height: 40%;
    padding: 1.5rem 1rem;
    //background: red;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: flex-start;
  `,
  StyledNavButton: styled.div`
    @media only screen and (max-width: 1160px) {
      //background-color: white;
      background-color: ${(props) =>
        props.select ? "var(--green)" : "transparent"};
      display: flex;
      padding: 0.5rem;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.6rem 0rem;
      border-radius: 0.6rem;
      &:hover {
        background-image: url(${HomeIcoSelect});
      }
    }
    @media only screen and (min-width: 1161px) {
      //background-color: white;
      background-color: ${(props) =>
        props.select ? "var(--green)" : "transparent"};
      display: flex;
      align-items: center;
      padding: 0.5rem;
      width: 2rem;
      height: 2rem;
      margin: 1rem 0rem;
      border-radius: 0.6rem;
      &:hover {
        background-color: var(--green);
        .home{
            background-image: url(${HomeIcoSelect});
        }
        .user{
            background-image: url(${UserIcoSelect});
        }
      }
    }
  `,
  StyledNavButtonHome: styled.div`
    margin: 1rem 0rem;
    width:2rem;
    height:2rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      props.select ? `url(${HomeIcoSelect})` : `url(${HomeIco})`};
  `,
   StyledNavButtonUsers: styled.div`
   margin: 1rem 0rem;
   width:2rem;
   height:1.35rem;
   background-size: contain;
   background-repeat: no-repeat;
   background-image: ${(props) =>
     props.select ? `url(${UserIcoSelect})` : `url(${UserIco})`};
 `,
  StyledTopContainer: styled.div`
    height: 45%;
    display: flex;
    flex-direction: column;
    padding: 0.7rem;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
  `,
  StyledProfileImageContainer: styled.div`
  margin-top:1rem;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    border: solid 3px var(--green);
    overflow: hidden;
  `,
  StyledProfileImage: styled.img`
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    //border-radius: 50%;
  `,
  StyledNotifiImage: styled.div`
    margin: 2rem 0rem;
    width: 2.7rem;
    height: 2.7rem;
    background-image: url(${NotifiIcon});
    &:hover {
      background-image: url(${NotifiIconSelect});
    }
  `,
  StyledEventImage: styled.div`
    margin: 1rem 0rem;
    width: 3.3rem;
    height: 3.3rem;
    background-image: url(${NewEventIco});
    background-size: contain;
    background-repeat: no-repeat;
    &:hover {
      background-image: url(${NewEventIcoSelect});
    }
  `,
  StyledEventContainer: styled.div`
    display: flex;
    flex-direction: column;
    height: -webkit-fill-available;
    justify-content: flex-end;
    align-items: center;
  `,
  StyledBottomContainer: styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
`,
StyledConfigImage: styled.div`
    margin: 1rem 0rem;
    width: 2rem;
    height: 2rem;
    background-image: url(${ConfigIco});
    background-size: contain;
    background-repeat: no-repeat;
    &:hover {
      background-image: url(${ConfigIcoSelect});
    }
  `
};

export default Styles;
