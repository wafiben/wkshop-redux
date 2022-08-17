import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const state = useSelector((state) => state.AuthReducer);
  return (
    <div>
      <h1>{state.user.email}</h1>
    </div>
  );
}

export default Profile;
