import "./App.css";
import Header from "./components/Header";

import React, { useEffect, useState } from "react";
import UserContext from "./utils/userContext";

import "./index.css";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    //make an api call and send username and password
    //received data from server
    const apiData = {
      name: "Murli Manohar",
    };
    setUserName(apiData.name);
  });
  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default AppLayout;
