import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Payments from "./components/Payments/Payments.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Login from "./components/Login/Login.jsx";
import PassRecovery from "./components/Login/PassRecovery.jsx";
import NavBar from "./components/NavBar/NavBar";
import Users from "./components/Users/Users.jsx";
import Timetable from "./components/Timetable/Timetable";
import ShiftsDetails from "./components/Timetable/ShiftsDetails";
import Configuration from "./components/Configuration/Configuration.jsx";
import ResetPassword from "./components/Login/ResetPassword";
import Profile from "./components/Profile/Profile";
import Routines from "./components/Routines/Routines";
import Activities from "./components/Activities/Activities";

function App() {
  const [screenHeight, setScreenHeight] = useState("");

  useEffect(() => {
    setScreenHeight(window.screen.availHeight);
  }, []);

  console.log(screenHeight);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passreco" element={<PassRecovery />} />
        <Route path="/resetpassword/:id" element={<ResetPassword />} />
      </Routes>
      <main>
        <Routes>
          <Route
            path="/session*"
            element={<NavBar screenHeight={screenHeight} />}
          />
        </Routes>
        <Routes>
          <Route path="/session" element={<Home />} />
          <Route path="/session/home" element={<Home />} />
          <Route path="/session/profile" element={<Profile />} />
          <Route path="/session/payments" element={<Payments />} />
          <Route path="/session/users" element={<Users />} />
          <Route path="/session/timetable" element={<Timetable />} />
          <Route
            path="/session/timetable/ShiftsDetails"
            element={<ShiftsDetails />}
          />
          <Route path="/session/config" element={<Configuration />} />
          <Route path="/session/routines" element={<Routines />} />
          <Route path="/session/new-event" element={<Activities />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
