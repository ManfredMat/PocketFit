import { Link } from "react-router-dom";
import Styles from "./NavBar-Styled";
import React from "react";

function NavBar({screenHeight}) {
  let actual = window.location.pathname;

  return (
    <React.Fragment>
      <Styles.GlobalStyle />
      <Styles.StyledBody screenHeight={screenHeight}>
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
              <Styles.StyledNavButtonWeekly
                select={actual.includes("weeklyroutine") ? true : false}
                className="weekly"
              />
            </Styles.StyledNavButton>
          </Link>
          <Link to="/calendar">
            <Styles.StyledNavButton
              select={actual.includes("calendar") ? true : false}
            >
              <Styles.StyledNavButtonEvents
                select={actual.includes("calendar") ? true : false}
                className="calendar"
              />
            </Styles.StyledNavButton>
          </Link>
          <Link to="/session/payments">
            <Styles.StyledNavButton
              select={actual.includes("payments") ? true : false}
            >
              <Styles.StyledNavButtonPay
                select={actual.includes("payments") ? true : false}
                className="payments"
              />
            </Styles.StyledNavButton>
          </Link>
          <Link to="/feed">
            <Styles.StyledNavButton
              select={actual.includes("feed") ? true : false}
            >
              <Styles.StyledNavButtonFeed
                select={actual.includes("feed") ? true : false}
                className="feed"
              />
            </Styles.StyledNavButton>
          </Link>
        </Styles.StyledNavContainer>
        <Styles.StyledBottomContainer>
          <Link to="/session/config">
            <Styles.StyledConfigImage/>
          </Link>
        </Styles.StyledBottomContainer>
      </Styles.StyledBody>
    </React.Fragment>
  );
}

export default NavBar;
