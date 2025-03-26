import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="text-center mt-10 text-2xl">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      {user ? (
        <>
          <p className="mb-2">Username: {user.username}</p>
          <p className="mb-2">Password: {user.password}</p>
        </>
      ) : (
        <p className="mb-2">Not logged in</p>
      )}
    </div>
  );
};

export default Profile;
