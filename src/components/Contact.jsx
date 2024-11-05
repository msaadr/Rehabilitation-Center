import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    message: "",
    agree: false,
  });

  const [formStatus, setFormStatus] = useState(""); // New state for submission status

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (example: check if all required fields are filled)
    if (
      !formData.name ||
      !formData.surname ||
      !formData.email ||
      !formData.agree
    ) {
      setFormStatus("Please fill all required fields and agree to terms.");
      return;
    }

    // Show submission status
    setFormStatus("Submitting...");

    // Simulate form submission (you can replace this with an actual API call)
    setTimeout(() => {
      console.log(formData);
      setFormStatus("Form submitted successfully!");

      // Clear form fields after submission
      setFormData({
        name: "",
        surname: "",
        email: "",
        address: "",
        message: "",
        agree: false,
      });
    }, 2000);
  };

  return (
    <div
      id="contact" // ID for linking from the navbar
      className="container p-4"
      style={{
        maxWidth: "500px",
        maxHeight: "500px",
        backgroundColor: "rgba(31, 31, 31, 1)",
        color: "#ffffff",
        borderRadius: "8px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ backgroundColor: "#333", color: "#fff" }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="surname"
              className="form-control"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              required
              style={{ backgroundColor: "#333", color: "#fff" }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ backgroundColor: "#333", color: "#fff" }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              style={{ backgroundColor: "#333", color: "#fff" }}
            />
          </div>
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            className="form-control"
            placeholder="Type here..."
            value={formData.message}
            onChange={handleChange}
            style={{ backgroundColor: "#333", color: "#fff" }}
          ></textarea>
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            name="agree"
            id="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="agree">
            I agree with terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          style={{ backgroundColor: "#6a0dad", border: "none" }}
        >
          Send Message
        </button>
      </form>

      {/* Display submission status */}
      {formStatus && (
        <div className="mt-3 text-center" style={{ color: "#ccc" }}>
          {formStatus}
        </div>
      )}
    </div>
  );
};

export default Contact;
