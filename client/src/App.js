import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Payments from './components/Payments/Payments.jsx'
import Landing from "./components/Landing/Landing.jsx";
import Login from "./components/Login/Login.jsx";
import PassRecovery from "./components/Login/PassRecovery.jsx";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passreco" element={<PassRecovery />} />
      </Routes>
      <main>
        <Routes>
          <Route path="/session*" element={<NavBar />} />
        </Routes>
        <Routes>
          <Route path="/session" element={<Home />} />
          <Route path="/session/home" element={<Home />} />
          <Route path="/session/payments" element={<Payments />} />
        </Routes>
      </main>
    </>
  );
}

export default App;