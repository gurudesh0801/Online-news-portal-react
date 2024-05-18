import React, { useState } from "react";
import "./Signup.css";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    if (validateForm()) {
      // Form submission logic here
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Form contains errors. Please fix them before submitting.");
    }
  };

  const validateField = (fieldName, value) => {
    let errorMessage = "";

    switch (fieldName) {
      case "name":
        if (value.length < 3) {
          errorMessage = "Name must be at least 3 characters long.";
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          errorMessage = "Please enter a valid email address.";
        }
        break;
      case "phone":
        // Add phone number validation logic here if needed
        break;
      case "password":
        if (value.length < 8) {
          errorMessage = "Password must be at least 8 characters long.";
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) {
          errorMessage = "Passwords do not match.";
        }
        break;
      default:
        break;
    }

    setFormErrors({ ...formErrors, [fieldName]: errorMessage });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName, formData[fieldName]);
      if (formErrors[fieldName]) {
        errors[fieldName] = formErrors[fieldName];
        isValid = false;
      }
    });

    setFormErrors(errors);

    return isValid;
  };

  return (
    <>
      <Navbar />
      <div className="signup-container mt-2">
        <h2>NewsX</h2>
        <form action='http://localhost:3001/signup' method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && (
              <span className="error">{formErrors.name}</span>
            )}
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <div className="form-group">
            <input
              id="phone"
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {formErrors.phone && (
              <span className="error">{formErrors.phone}</span>
            )}
          </div>
          <div className="form-group">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </div>
          <div className="form-group">
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {formErrors.confirmPassword && (
              <span className="error">{formErrors.confirmPassword}</span>
            )}
          </div>
          <input type="submit" value="Submit" />
          <p>
            If you are already registered <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
