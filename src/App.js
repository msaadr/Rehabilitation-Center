// App.js
import React, { useState } from "react";
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
import AdminPortal from "./components/AdminPortal";
import Navbar from "./components/Navbar";
import Ser from "./components/Ser";
import Footer from "./components/Footer";
import Patient from "./components/Patient";
import Doctor from "./components/Doctor";
import Logout from "./components/Logout";
import NavbarA from "./components/NabarA";


function App() {
  const [isSignIn, setIsSignin] = useState(false)
  const [data,setData]=useState(null)
  console.log(data);
  
  console.log(isSignIn);
  
  return (
    <Router>
        {data && data.email === "admin" ? (
        <NavbarA />
      ) : (
        <Navbar signin={isSignIn ? "Logout" : "Signin"} set={isSignIn} />
      )}
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<><Home /><About /><Service /><Footer /><Patient /><Doctor />  </>} />
        <Route path="/home" element={<><Home /><About /><Service /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/membership" element={<><Membership /><Footer /></>} />
        <Route path="/services" element={<><Service /><Footer /></>} />
        <Route path="/signin" element={<SignIn signin={setIsSignin} setData={setData} />} />
        <Route path="/logout" element={<Logout signin={setIsSignin} />} />

        <Route path='/patient' element={<><Patient /><Footer /></>} />
        <Route path='/doctor' element={<><Doctor /><Footer /></>} />

        <Route path="/about" element={<><About /><Footer /></>} />
        {/* </Route> */}
        {/* Week route without Navbar */}
        <Route path="/register" element={<Register />} />
        <Route path="/adminPortal" element={<AdminPortal />}></Route>

      </Routes>
    </Router>




  );
}

export default App;
