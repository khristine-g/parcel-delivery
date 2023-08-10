import "./Signup.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [isSignedUp, setSignedUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // New phone number state

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignup = () => {
    let userObj = {
      name,
      email,
      password,
      password_confirmation: passwordConfirm,
      phone_number: phoneNumber, // Include phone number in user object
    };

    if (passwordConfirm === password) {
      setIsLoading(true);
      fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj),
      })
        .then((response) => {
          if (response.ok) {
            setIsLoading(false);
            setSignedUp(true);
            alert("Signup successful");
            navigate("/"); // Navigate to home after successful signup
          } else {
            setIsLoading(false);
            return response.json().then((error) => {
              let errorMessage = error.error || "Something went wrong";
              alert(errorMessage);
            });
          }
        })
        .catch((error) => {
          console.error("Error sending signup data:", error);
        });
    } else {
      alert("Password must match");
    }
  };

  return (
    <main id="signup-page">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
      >
        <h4 className="form-title">Sign Up</h4>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm password *</label>
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        {/* New phone number input */}
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-btn">
          signup
          {isLoading && (
            <div className="loader-cont">
              <div className="loader-ball"></div>
              <div className="loader-ball"></div>
              <div className="loader-ball"></div>
            </div>
          )}
        </button>
        <span className="account_link">
          <h4>Already have an account?</h4>
          <h4>
            <NavLink className="formlink" exact to="/">
              {" "}
              Login
            </NavLink>
          </h4>
        </span>
      </form>
    </main>
  );
};

export default SignupPage;
