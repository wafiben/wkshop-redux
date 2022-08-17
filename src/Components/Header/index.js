import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/AuthActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state.AuthReducer);
  const handleLogout = () => {
    dispatch(logout(navigate));
  };
  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {state.role === 1 ? (
        <>
          {" "}
          <Link to="/Dashboard" className="link">
            Go to dashboard
          </Link>
          <Link to="/add-user" className="link">
            Add User
          </Link>
        </>
      ) : (
        <Link to="/addPost" className="link">
          AddPost
        </Link>
      )}
      {state.connect && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Header;
