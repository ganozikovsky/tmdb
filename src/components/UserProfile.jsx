import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div>
        <h1>{`Perfil de: ${user.username}`}</h1>
      </div>
      <div>
        <h1>Tus favoritos son:  </h1>
        {user.id
          ? user.favorites.map((movie) => <h1>{movie.title}</h1>)
          : "No exisitis"}
      </div>
    </>
  );
};

export default UserProfile;
