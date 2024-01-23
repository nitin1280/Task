import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const userName = localStorage.getItem("nameData");

  // Check if the user is logged in
  const isLoggedIn = userName !== null;

  const handleLogout = () => {
    // Perform logout actions, such as clearing user data from localStorage
    localStorage.removeItem("nameData");
    // You may also want to redirect the user to the login page or perform other logout-related actions
  };

  return (
    <div className="navbar">
      <h2>Welcome User</h2>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          style={{ transition: "all 200ms" }}
          onChange={props.switchTheme}
        />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon fa-sm"></i>
          <i className="fas fa-sun fa-sm"></i>
          <div className="ball" />
        </label>
      </div>

      {/* Conditional rendering based on whether the user is logged in */}
      {isLoggedIn ? (
        <div className="user">
          {userName}
          <Link to={"/register"}>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button> </Link>
        </div>
      ) : (
        <Link to={"/register"}>
          <button className="login-button" onClick={props.handleLogin}>
            Login
          </button>
        </Link>
      )}
    </div>
  );
}
