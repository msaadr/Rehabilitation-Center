import React, { useEffect, useRef } from "react";
import "./Register.css";
import Navbar from "./Navbar";
function Register() {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "75px",
          backgroundColor: "#4e4f51",
          height: "100vh",
          width: "100vw",
        }}
      >
        <form className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Firstname</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input className="input" type="email" placeholder="" required="" />
            <span>Email</span>
          </label>

          <label>
            <input className="input" type="password" placeholder="" required="" />
            <span>Password</span>
          </label>
          <label>
            <input className="input" type="password" placeholder="" required="" />
            <span>Confirm password</span>
          </label>
          <button className="submit">Submit</button>
          <p className="signin">
            Already have an acount ? <a href="#">Signin</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
