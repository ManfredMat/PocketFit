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
import EventsIco from "../../assets/img/iconos/events.svg";
import EventsIcoSelect from "../../assets/img/iconos/select-icons/event-select.svg";
import PayIco from "../../assets/img/iconos/Pay.svg";
import PayIcoSelect from "../../assets/img/iconos/select-icons/payments-select.svg";
import SemanalPlan from "../../assets/img/iconos/Plans.svg";
import SemanalPlanSelect from "../../assets/img/iconos/select-icons/plan-select.svg";
import FeedBackIco from "../../assets/img/iconos/feedback.svg";
import FeedBackIcoSelect from "../../assets/img/iconos/select-icons/feedback-select.svg";


const Styles = {
  GlobalStyle: createGlobalStyle`
    * {
        margin:0
    }`,
  StyledBody: styled.div`
      font-size: ${(props) => (1.35*props.screenHeight)/100}px;
      position: sticky;
      top:0;
      display: flex;
      flex-direction: column;
      background: var(--darkGray-medium);
      width: ${(props) => (8*props.screenHeight)/100}px;
      height: 100vh;
  `,
  StyledNavContainer: styled.div`
    width: -webkit-fill-available;
    height: 40%;
    padding: 1.5em 1em;
    //background: red;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: flex-start;
  `,
  StyledNavButton: styled.div`
    @media only screen and (min-width: 1161px) {
      //background-color: white;
      background-color: ${(props) =>
        props.select ? "var(--green)" : "transparent"};
      display: flex;
      align-items: center;
      padding: 0.5em;
      width: 2em;
      height: 2em;
      margin: 1em 0em;
      border-radius: 0.6em;
      &:hover {
        background-color: var(--green);
        .home{
            background-image: url(${HomeIcoSelect});
        }
        .user{
            background-image: url(${UserIcoSelect});
        }
        .weekly{
          background-image: url(${SemanalPlanSelect});
        }
        .timetable{
          background-image: url(${EventsIcoSelect});
        }
        .payments{
          background-image: url(${PayIcoSelect});
        }
        .feed{
          background-image: url(${FeedBackIcoSelect});
        }
      }
    }
  `,
  StyledNavButtonHome: styled.div`
    margin: 1em 0em;
    width:2em;
    height:2em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      props.select ? `url(${HomeIcoSelect})` : `url(${HomeIco})`};
  `,
   StyledNavButtonUsers: styled.div`
   margin: 1em 0em;
   width:2em;
   height:1.35em;
   background-size: contain;
   background-repeat: no-repeat;
   background-image: ${(props) =>
     props.select ? `url(${UserIcoSelect})` : `url(${UserIco})`};
 `,
  StyledNavButtonWeekly: styled.div`
    margin: 1em 0em;
    width:2em;
    height:2em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      props.select ? `url(${SemanalPlanSelect})` : `url(${SemanalPlan})`};
  `,
  StyledNavButtonEvents: styled.div`
    margin: 1em 0em;
    width:2em;
    height:2em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      props.select ? `url(${EventsIcoSelect})` : `url(${EventsIco})`};
  `,
  StyledNavButtonPay: styled.div`
    margin: 1em 0em;
    width:2em;
    height:2em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      props.select ? `url(${PayIcoSelect})` : `url(${PayIco})`};
  `,
  StyledNavButtonFeed: styled.div`
  margin: 1em 0em;
  width:2em;
  height:2em;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    props.select ? `url(${FeedBackIcoSelect})` : `url(${FeedBackIco})`};
`,
  StyledTopContainer: styled.div`
    height: 45%;
    display: flex;
    flex-direction: column;
    padding: 0.7em;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
  `,
  StyledProfileImageContainer: styled.div`
  margin-top:1em;
    width: 3.2em;
    height: 3.2em;
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
    margin: 2em 0em;
    width: 2.7em;
    height: 2.7em;
    background-image: url(${NotifiIcon});
    background-size: contain;
    background-repeat: no-repeat;
    &:hover {
      background-image: url(${NotifiIconSelect});
    }
  `,
  StyledEventImage: styled.div`
    margin: 1em 0em;
    width: 3.3em;
    height: 3.3em;
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
  padding: 0.7em;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
`,
StyledConfigImage: styled.div`
    margin: 1em 0em;
    width: 2em;
    height: 2em;
    background-image: url(${ConfigIco});
    background-size: contain;
    background-repeat: no-repeat;
    &:hover {
      background-image: url(${ConfigIcoSelect});
    }
  `
};

export default Styles;
