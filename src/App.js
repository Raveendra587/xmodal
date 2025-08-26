import React, { useState } from "react";
import './App.css';
const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  // Open modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, phone, dob } = formData;
    if (!email.includes("@")) {
      return alert("Invalid email. Please check your email address.");
    }
    if (!/^\d{10}$/.test(phone)) {
      return alert(
        "Invalid phone number. Please enter a 10-digit phone number."
      );
    }
    const today = new Date();
    const birthDate = new Date(dob);
    if (birthDate > today) {
      return alert(
        "Invalid date of birth. Date of birth cannot be in the future."
      );
    }
    closeModal();
  };
  const handleModalClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      {!isOpen && (
        <button onClick={openModal}>Open Form</button>
      )}

      {isOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <br/>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <br/>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number:</label>
                <br/>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <br/>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
