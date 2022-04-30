import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
