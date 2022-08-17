import React from "react";

function CardUser({ user }) {
  return (
    <div>
      <h1>{user && user}</h1>
    </div>
  );
}

export default CardUser;
