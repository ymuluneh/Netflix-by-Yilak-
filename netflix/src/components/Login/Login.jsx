import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Simulated login
    if (email === "yilakmuluneh@gmail.com" && password === "123456") {
      setError("");
      onLogin({ email }); // Call parent with user info
    } 
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Sign In</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>

        <p className="info-text">
          This is a demo login form. Use <strong>yilakmuluneh@gmail.com</strong>{" "}
          / <strong>123456</strong>
        </p>
      </form>
    </div>
  );
}

export default Login;
