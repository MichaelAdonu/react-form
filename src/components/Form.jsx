import React, { useState } from "react";
import "./Form.css";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameSubmit = (e) => {
    setName(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ Name: name, Email: email, Password: password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h1>User Input Form</h1>
        <div className="input-container">
          <input
            className="name-input"
            type="text"
            onChange={handleNameSubmit}
            value={name}
            name="name"
            placeholder="Enter Your Name"
          />
          <FaUser className="icons" />
        </div>

        <div className="input-container">
          <input
            className="email-input"
            onChange={handleEmailSubmit}
            type="email"
            name="email"
            value={email}
            placeholder="Enter Your Email"
          />
          <MdEmail className="icons" />
        </div>

        <div className="input-container">
          <input
            className="password-input"
            type="password"
            name="password"
            onChange={handlePasswordSubmit}
            value={password}
            placeholder="Enter Your Password"
          />
          <FaLock className="icons" />
        </div>

        <div className="submit-container">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
