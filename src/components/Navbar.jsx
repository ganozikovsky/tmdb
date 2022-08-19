import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import logo from "../assets/logo.png";

import { getMoviesSearchRequest, getContentRequest } from "../store/content";

import User from "./User";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");

  const user = useSelector((state) => state.user);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    !searchInput
      ? alert("Please enter some search text!")
      : dispatch(getMoviesSearchRequest(searchInput));
  };

  const handleLogoClick = () => {
    dispatch(getContentRequest());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <a className="navbar-brand me-2" onClick={handleLogoClick}>
            <img
              src={logo}
              height="16"
              alt="logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li> */}
          </ul>

          <div className="d-flex align-items-center">
            <form className="d-flex input-group w-auto">
              <input
                onChange={handleSearchInputChange}
                type="search"
                className="form-control"
                placeholder="Search movies"
                aria-label="Search"
              />
              <button
                onClick={handleSubmit}
                className="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>

            {user.username ? (
              <User />
            ) : (
              <>
                <Link to="/login">
                  <button type="button" className="btn btn-link px-3 me-2">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button type="button" className="btn btn-primary me-3">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
