import React from "react";
import { useState } from "react";
import { addUser } from "./../../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function AddUser() {
  const state = useSelector((state) => state);
  console.log(state)
  const dispatch = useDispatch();
  const [user, setUser] = useState(" ");
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser(" ");
  };
  return (
    <form style={{ textAlign: "center" }} onSubmit={onSubmit}>
      <input type="text" onChange={handleChange} value={user} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddUser;
