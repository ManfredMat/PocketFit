import { Link } from "react-router-dom";
import Styles from "./NavBar-Styled";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin } from "../../redux/Actions/actions-login";
import defaultProfilePhoto from "../../assets/img/profilephoto.svg";
import Activities from "../Activities/Activities";
import { useLocation } from "react-router-dom";

function NavBar({ screenHeight }) {
  const dispatch = useDispatch();
  const id = localStorage.getItem("number");
  const adminProfileImage = useSelector(
    (state) => state.session.admin.imageData
  );
  const [renderActivities, setRenderActivities] = useState(false);


  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  let actual = usePathname();


  useEffect(() => {
    dispatch(getAdmin(id));
    //eslint-disable-next-line
  }, [dispatch, actual]);

  return (
    <React.Fragment>
      <Styles.GlobalStyle />
      <Styles.StyledBody screenHeight={screenHeight}>
        <Styles.StyledTopContainer>
          <Link to="/session/config">
            <Styles.StyledProfileImageContainer>
              <Styles.StyledProfileImage
                src={
                  adminProfileImage
                    ? `data:image/jpeg;base64, ${adminProfileImage}`
                    : defaultProfilePhoto
                }
                alt="profile-photo"
              />
            </Styles.StyledProfileImageContainer>
          </Link>
          <Styles.StyledNavButtonActivities
            onClick={() => setRenderActivities(true)}
          >
            <Styles.StyledNotifiImage />
          </Styles.StyledNavButtonActivities>
          {/*  <Styles.StyledEventContainer>
            <Styles.StyledNavButtonActivities onClick={() => setRenderActivities(true)}>
              <Styles.StyledEventImage />
            </Styles.StyledNavButtonActivities>
          </Styles.StyledEventContainer> */}
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
              select={actual.includes("routines") ? true : false}
            >
              <Styles.StyledNavButtonWeekly
                select={actual.includes("routines") ? true : false}
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
          {/*           <Link to="/session/payments">
            <Styles.StyledNavButton
              select={actual.includes("payments") ? true : false}
            >
              <Styles.StyledNavButtonPay
                select={actual.includes("payments") ? true : false}
                className="payments"
              />
            </Styles.StyledNavButton>
          </Link> */}
          <Link to="/session/feedback">
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
            <Styles.StyledConfigImage />
          </Link>
        </Styles.StyledBottomContainer>
      </Styles.StyledBody>
      {renderActivities && <Activities display={setRenderActivities} />}
    </React.Fragment>
  );
}

export default NavBar;
