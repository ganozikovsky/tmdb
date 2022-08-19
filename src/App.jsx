import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";

import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import Footer from "./components/Footer";
import SingleContent from "./components/SingleContent";
import Login from "./components/Login";
import Register from "./components/Register";

import { getContentRequest } from "./store/content";
// import { fetchUserRequest } from "./store/user";
import UserProfile from "./components/UserProfile";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentRequest());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchUserRequest());
  //   // axios
  //   //   .get("/api/user/me")
  //   //   .then((res) => res.data)
  //   //   .then((user) => {
  //   //     success(`found user ${user.mail}`);
  //   //     setUser(user);
  //   //   })
  //   //   .catch(({ response }) => {
  //   //     error(response.status, response.statusText);
  //   //   });
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="container-fluid row m-5 gap-3">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="user/:profile" element={<UserProfile />} />
          <Route path="single/:type/:id" element={<SingleContent />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
