import "./App.css";
import Header from "./components/Header";

import React, { useEffect, useState } from "react";
import UserContext from "./utils/userContext";

import "./index.css";
import { Outlet } from "react-router-dom";

import appStore from "./utils/appStore";
import { Provider } from "react-redux";

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
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default AppLayout;
