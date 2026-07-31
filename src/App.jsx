import { createContext, useState } from "react";
import "./App.css";
import Checkout from "./Checkout";
import Login from "./Login";
import Logout from "./Logout";
export const userContext = createContext();
import { UserProvider } from "./context/UserContext";
import useDisplayMessage from "./hooks/useDisplayMessage";

function App() {
  const [displayMessage] = useDisplayMessage();
  displayMessage();

  return (
    <>
      {/* <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider> */}
    </>
  );
}

export default App;
