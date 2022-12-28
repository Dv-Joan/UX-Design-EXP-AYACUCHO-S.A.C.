import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

function App() {
  const [login, setLogin] = useState(false);
  const userLoged = () => {
    setLogin(true);
  };
  return (
    <div className="App">
      <div className="bg-green-500 rounded-3xl px-3 py-1 m-18">
        MOLIBUS WITH UX Design v. 1.0.1
      </div>
      {login ? <LandingPage /> : <Login />}
    </div>
  );
}

export default App;
