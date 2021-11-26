import { Link } from "react-router-dom";

import EventsIco from "../../assets/img/iconos/events.svg"
import WeeklyRoutine from "../../assets/img/iconos/Plans.svg"

function NavBar() {
    return (
        <div className="w-16 h-screen flex flex-col bg-darkGray-medium">
            <Link to="/profile">
                <p>
                    ⚪
                    {/* <img src="" alt="profile-photo" /> */}
                </p>
            </Link>
            <Link to="/notifications">
                <p>
                    🔔
                    {/* <img src="" alt="notifications" /> */}
                </p>
            </Link>
            <Link to="/new-event">
                <p>
                    ✍🏻
                    {/* <img src="" alt="new-event" /> */}
                </p>
            </Link>
            <Link to="/users">
                <p>
                    <img src={EventsIco} alt="users" />
                </p>
            </Link>
            <Link to="/weeklyroutine">
                <p>
                    📱
                    <img src={WeeklyRoutine} alt="weekly-routine" />
                </p>
            </Link>
            <Link to="/calendar">
                <p>
                    📆
                    {/* <img src="" alt="calendar" /> */}
                </p>
            </Link>
            <Link to="/payments">
                <p>
                    💲
                    {/* <img src="" alt="payments" /> */}
                </p>
            </Link>
            <Link to="/feed">
                <p>
                    ⭐
                    {/* <img src="" alt="feedback" /> */}
                </p>
            </Link>
            <Link to="/config">
                <p>
                    ⚙
                    {/* <img src="" alt="configuration" /> */}
                </p>
            </Link>
        </div>
    )
};

export default NavBar;
