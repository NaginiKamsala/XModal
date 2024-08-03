import React, { useState } from "react";
import "./XModal.css";

const XModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
    }
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    } else if (new Date(formData.dob) > new Date()) {
      alert("Invalid date of birth. Please enter a valid date.");
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      isOpen = true;
      setFormData({
        username: "",
        email: "",
        dob: "",
        phone: "",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className="header">
            <h3>Fill Details</h3>
          </div>
          <div className="formElement">
            <label>Username:</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          {errors.username && <p>{errors.username}</p>}
          <div className="formElement">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {errors.email && <p>{errors.email}</p>}
          <div className="formElement">
            <label>Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          {errors.dob && <p>{errors.dob}</p>}
          <div className="formElement">
            <label>Phone Number:</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          {errors.phone && <p>{errors.phone}</p>}

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default XModal;
