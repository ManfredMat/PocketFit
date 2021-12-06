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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin } from "../../redux/Actions/actions-login";

function NavBar({screenHeight}) {
  const dispatch = useDispatch();
  const id = localStorage.getItem("number");
  const adminProfileImage = useSelector(state => state.session.admin.imageData);

  useEffect(() => {
    dispatch(getAdmin(id))
  }, [dispatch]);

  let actual = window.location.pathname;

  return (
    <React.Fragment>
      <Styles.GlobalStyle />
      <Styles.StyledBody screenHeight={screenHeight}>
        <Styles.StyledTopContainer>
          <Link to="/session/profile">
            <Styles.StyledProfileImageContainer>
              <Styles.StyledProfileImage
                src={adminProfileImage ? `data:image/jpeg;base64, ${adminProfileImage}` : "https://picsum.photos/200"}
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
          <Link to="/session/routines">
            <Styles.StyledNavButton
              select={actual.includes("weeklyroutine") ? true : false}
            >
              <Styles.StyledNavButtonWeekly
                select={actual.includes("weeklyroutine") ? true : false}
                className="weekly"
              />
            </Styles.StyledNavButton>
          </Link>
          <Link to="/session/timetable">
            <Styles.StyledNavButton
              select={actual.includes("timetable") ? true : false}
            >
              <Styles.StyledNavButtonEvents
                select={actual.includes("timetable") ? true : false}
                className="timetable"
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
