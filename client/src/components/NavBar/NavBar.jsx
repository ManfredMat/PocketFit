import { Link } from "react-router-dom";
import Styles from "./NavBar-Styled";
import EventsIco from "../../assets/img/iconos/events.svg";
import EventsIcoSelect from "../../assets/img/iconos/select-icons/event-select.svg";
import PayIco from "../../assets/img/iconos/Pay.svg";
import PayIcoSelect from "../../assets/img/iconos/select-icons/payments-select.svg";
import SemanalPlan from "../../assets/img/iconos/Plans.svg";
import SemanalPlanSelect from "../../assets/img/iconos/select-icons/plan-select.svg";
import FeedBackIco from "../../assets/img/iconos/feedback.svg";
import FeedBackIcoSelect from "../../assets/img/iconos/select-icons/feedback-select.svg";
import React from "react";

function NavBar() {
  let actual = window.location.pathname;

  return (
    <React.Fragment>
      <Styles.GlobalStyle />
      <Styles.StyledBody>
        <Styles.StyledTopContainer>
          <Link to="/profile">
            <Styles.StyledProfileImageContainer>
              <Styles.StyledProfileImage
                src="https://picsum.photos/200"
                alt="profile-photo"
              />
            </Styles.StyledProfileImageContainer>
          </Link>
          <Link to="/notifications">
            <Styles.StyledNotifiImage />
          </Link>
          <Styles.StyledEventContainer>
            <Link to="/new-event">
              <Styles.StyledEventImage />
            </Link>
          </Styles.StyledEventContainer>
        </Styles.StyledTopContainer>

        <Styles.StyledNavContainer>
          <Link to="/session/home">
            <Styles.StyledNavButton
              select={actual.includes("home") ? true : false}
            >
              <Styles.StyledNavButtonHome
                select={actual.includes("home") ? true : false}
                className="home"
              />
            </Styles.StyledNavButton>
          </Link>
          <Link to="/session/users">
            <Styles.StyledNavButton
              select={actual.includes("users") ? true : false}
            >
              <Styles.StyledNavButtonUsers
                select={actual.includes("users") ? true : false}
                className="user"
              />
            </Styles.StyledNavButton>
          </Link>
          <Link to="/weeklyroutine">
            <Styles.StyledNavButton
              select={actual.includes("weeklyroutine") ? true : false}
            >
              <img src={SemanalPlan} alt="weekly-routine" />
            </Styles.StyledNavButton>
          </Link>
          <Link to="/calendar">
            <Styles.StyledNavButton
              select={actual.includes("calendar") ? true : false}
            >
              <img src={EventsIco} alt="users" />
            </Styles.StyledNavButton>
          </Link>
          <Link to="/session/payments">
            <Styles.StyledNavButton
              select={actual.includes("payments") ? true : false}
            >
              <img src={PayIco} alt="payments" />
            </Styles.StyledNavButton>
          </Link>
          <Link to="/feed">
            <Styles.StyledNavButton
              select={actual.includes("feed") ? true : false}
            >
              <img src={FeedBackIco} alt="feedback" />
            </Styles.StyledNavButton>
          </Link>
        </Styles.StyledNavContainer>
        <Styles.StyledBottomContainer>
          <Link to="/config">
            <Styles.StyledConfigImage/>
          </Link>
        </Styles.StyledBottomContainer>
      </Styles.StyledBody>
    </React.Fragment>
  );
}

export default NavBar;
