import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Defalut",
});
export default UserContext;
