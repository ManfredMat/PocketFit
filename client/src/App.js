import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Landing from "./components/Landing/Landing.jsx"
import Login from "./components/Login/Login.jsx"
import PassRecovery from "./components/Login/PassRecovery.jsx"
import Users from "./components/Users/Users";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passreco" element={<PassRecovery />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;

/*
"Landing.js" path "/"
"SingUp.js" path "/newuser"
"Login.js" path "/login"
"Home.js" path "/home"
*/