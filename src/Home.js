import React from "react";
import { useSelector } from "react-redux";

function Home() {
    const state=useSelector(state=>state)
  return <div>{state.count}</div>;
}

export default Home;
