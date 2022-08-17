import React from "react";
import CardUser from "../../Components/CardUser";
import { useSelector } from "react-redux";

function Dashboard() {
  const users = useSelector((state) => state.UserReducer);
  return (
    <div>
      {users.length !== 0
        ? users.map((elt, index) => <CardUser key={index} user={elt} />)
        : "there is no data"}
    </div>
  );
}

export default Dashboard;
