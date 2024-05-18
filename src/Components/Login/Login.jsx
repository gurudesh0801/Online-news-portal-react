import React from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-container mt-2">
        <h2>Login to NewsX</h2>
        <form action="http://localhost:3001/login" method="post">
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <p id="error"></p>
          <input type="submit" value="Login" />
          <p>If you are not registerd<a href="/signup">Register</a></p>
        </form>
      </div>

      <script src="Backend/server.js"></script>
    </>
  );
};

export default Login;
