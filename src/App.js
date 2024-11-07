import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import Contact from "./components/Contact";
import Membership from "./components/Membership"
import Service from "./components/Service"
import SignIn from "./components/SignIn"
import About from "./components/About"

function App() {
  return (
    <>
      <Router>
        <div className="nav">
          <Navbar />
        </div>
        <Routes>
          <Route path="/Rehabilitation-Center" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/services" element={<Service />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
