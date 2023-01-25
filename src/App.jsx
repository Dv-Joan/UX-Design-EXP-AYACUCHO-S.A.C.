import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { ConfigProvider } from "antd";
import es_ES from "antd/lib/locale/es_ES";

function App() {
  return (
    <ConfigProvider locale={es_ES}>
      <div className="App">
        <LandingPage />
      </div>
    </ConfigProvider>
  );
}

export default App;
