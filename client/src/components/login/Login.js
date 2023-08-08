import "./Login.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Include useNavigate

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = () => {
    setIsLoading(true);
  
    let userObj = { email, password };
  
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setIsLoading(false);
          return response.json().then((error) => {
            let errorMessage = error.error || "Something went wrong";
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // Store the JWT token in localStorage
        localStorage.setItem('jwtToken', data.token);
        console.log('JWT Token:', data.token);
        
        setIsLoggedIn(true);
        setIsLoading(false);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error sending login data:", error);
      });
  };
  
  if (isLoggedIn) {
    // Use the if block to conditionally redirect if needed
    return navigate("/home"); // Use navigate() instead of <Redirect>
  }

  return (
    <main id="login-page">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h4 className="form-title">Login</h4>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
        </div>

        <button type="submit" className="form-btn">
          Login
          {isLoading && (
            <div className="loader-cont">
              <div className="loader-ball"></div>
              <div className="loader-ball"></div>
              <div className="loader-ball"></div>
            </div>
          )}
        </button>
        <span className="account_link">
          <h4>Don't have an account yet?</h4>
          <h4>
            <NavLink className="formlink" to="/register">
              Sign up
            </NavLink>
          </h4>
        </span>
      </form>
    </main>
  );
};

export default LoginPage;
