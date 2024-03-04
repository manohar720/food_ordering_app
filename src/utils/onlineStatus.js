import { useState } from "react";

const OnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if online
  window.addEventListener("online", () => {
    setOnlineStatus(true);
  });
  window.addEventListener("offline", () => {
    setOnlineStatus(false);
  });

  return onlineStatus;
};
export default OnlineStatus;
