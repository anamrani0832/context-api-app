import React, { useContext } from "react";
import { userContext } from "./context/UserContext";

function Logout() {
  const { dispatch } = useContext(userContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "logout", payload: "Guest" })}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
