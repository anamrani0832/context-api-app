import React, { useContext } from "react";
import { userContext } from "./context/UserContext";

function Checkout() {
  const { user } = useContext(userContext);
  return <div>Checkout {user}</div>;
}

export default Checkout;
