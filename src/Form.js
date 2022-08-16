import React, { useState } from "react";
import { addUser } from './Redux/actions';
import { useDispatch } from 'react-redux';

function Form() {
  const dispatch=useDispatch();
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user)) 
    setUser('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={user} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
