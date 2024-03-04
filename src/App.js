import "./App.css";
import Header from "./components/Header";

import React from "react";

import "./index.css";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
