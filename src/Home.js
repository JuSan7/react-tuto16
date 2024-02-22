// Home.js
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Outlet />
    </div>
  );
};

export default Home;
