// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Membership from "./components/Membership";
import Service from "./components/Service";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Week from "./components/Week";
import register from "./components/Register";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Rehabilitation-Center" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/services" element={<Service />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* Week route without Navbar */}
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
