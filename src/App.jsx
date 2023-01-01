import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

function App() {
  const [login, setLogin] = useState(false);
  const userLoged = () => {
    setLogin(true);
  };
  return <div className="App"> {login ? <LandingPage /> : <Login />}</div>;
}

export default App;
