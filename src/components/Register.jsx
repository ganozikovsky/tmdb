import axios from "axios";
import React from "react";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router";
import { log, success, error } from "../utils/logs";

const Register = () => {
  const navigate = useNavigate();
  const username = useInput("username");
  const email = useInput("email");
  const password = useInput("password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    log("register attempt...");
    try {
      // POST user credentials
      await axios.post("/api/user/register", {
        username: username.value,
        email: email.value,
        password: password.value,
      });
      success(`new user registered`);
      navigate("/login");
    } catch ({ response }) {
      // something's not right...
      error(response.status, response.statusText);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          {...username}
        />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          {...email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          {...password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default Register;
