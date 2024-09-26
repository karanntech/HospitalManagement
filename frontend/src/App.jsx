//import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Appointment from "./pages/Appointment.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/appointment" element= {<Appointment/>}/>
            <Route path="/aboutus" element= {<Aboutus/>}/>
            <Route path="/register" element= {<Register/>}/>
            <Route path="/login" element= {<Login/>}/>
          </Routes>
          <ToastContainer position="top-center"/>
        </Router>
    </>
  )
}

export default App;