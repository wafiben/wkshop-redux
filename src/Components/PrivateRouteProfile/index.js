import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function ProfilePrivate({ children }) {
  const user = useSelector((state) => state.AuthReducer);
  return <div>{user.connect ? children : <Navigate to="/" />}</div>;
}

export default ProfilePrivate;
