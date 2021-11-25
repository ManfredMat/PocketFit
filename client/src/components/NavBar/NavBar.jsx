import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div style={{display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent:"space-around", alignItems:"center"}}>
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
                    👥
                    {/* <img src="" alt="users" /> */}
                </p>
            </Link>
            <Link to="/weeklyroutine">
                <p>
                    📱
                    {/* <img src="" alt="weekly-routine" /> */}
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
