import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="text-center mt-10 text-2xl">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <p className="mb-2">
        Username: {user.username ? user.username : "Not logged in"}
      </p>
      <p className="mb-2">
        Password: {user.password ? user.password : "Not logged in"}
      </p>
    </div>
  );
};

export default Profile;
