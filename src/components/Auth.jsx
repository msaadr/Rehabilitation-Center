import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
const Auth = (props) => {
  const navigate=useNavigate()
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const users = [
    { name: "admin", password: "admin" },
    { name: "doctor", password: "doctor" },
    { name: "normaluser", password: "normaluser" },
  ];
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setErrorMessage("");
    setSuccessMessage("");

    // Check if the user exists in the predefined list
    const user = users.find(
      (u) => u.name === formData.email && u.password === formData.password
    );

    if (user) {
      props.signin(true)
      props.setData(formData)
      setSuccessMessage(`Welcome, ${user.name}!`);

      navigate('/')
      
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email or username"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {isSignUp && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button
          className="toggle-button"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
