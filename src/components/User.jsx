import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { sendLogoutRequest } from "../store/user";

const User = () => {
  const { username } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(sendLogoutRequest());
  };
  const handleClickProfile = () => {
    navigate(`/user/${username}`);
  };
  return (
    <>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        className="rounded-5 ml-4"
        width={"40px"}
        height={"40px"}
        alt="profile pic"
      />

      <button
        type="button"
        className="btn btn-primary ml-4"
        onClick={handleClickProfile}
      >
        Mi perfil
      </button>

      <button
        type="button"
        className="btn btn-danger ml-4"
        onClick={handleLogOut}
      >
        Salir
      </button>
    </>
  );
};

export default User;
