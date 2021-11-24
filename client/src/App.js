import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
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