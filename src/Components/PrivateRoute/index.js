import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const user = useSelector((state) => state.AuthReducer);

  return (
    <div>
      {user.connect && user.role === 1 ? children : <Navigate to="/" />}
    </div>
  );
}

export default PrivateRoute;
