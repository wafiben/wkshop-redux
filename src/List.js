import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";

function List() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      {state.map((elt, index) => (
        <Card key={index}  user={elt}/>
      ))}
    </div>
  );
}

export default List;
