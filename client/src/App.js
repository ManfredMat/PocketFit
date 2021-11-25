import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Landing from "./components/Landing/views/Landing.jsx"
import Login from "./components/Login/views/Login.jsx"
import PassRecovery from "./components/Login/views/PassRecovery"


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passreco" element={<PassRecovery />} />
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