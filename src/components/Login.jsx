import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router";
import { log, success, error } from "../utils/logs";

import { sendLoginRequest } from "../store/user";

const Login = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = useInput("username");
  const password = useInput("password");

  const handleSubmit = (e) => {
    e.preventDefault();

    log("login attempt...");

    dispatch(
      sendLoginRequest({ username: username.value, password: password.value })
    )
      .then(({ payload }) => {
        success(`Success login: welcome back ${payload.username}`);
        navigate("/");
      })
      .catch((err) => {
        error(`Failed login: ${err.message}`, 5);
        alert("Must be valid credentials!!!");
      });
  };

  useEffect(() => {
    if (user.email) navigate("/");
  }, [user]);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="username" className="form-label">
          Username
        </label>
        <input type="text" className="form-control" id="username" {...username} />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Log In
      </button>

      <h1 className="mt-5">
        ¿No tenés una cuenta? <a href="/register">Registrate.</a>
      </h1>
    </form>
  );
};

export default Login;
