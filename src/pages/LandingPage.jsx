import PanelController from "./pages/PanelController";
import Passenger from "./pages/Passenger";
import Contable from "./pages/Contable";
import Encomiendas from "./pages/Encomiendas";

function LandingPage() {
  return (
    <div>
      <PanelController />
      <Passenger />
      <Contable />
      <Encomiendas />
    </div>
  );
}

export default LandingPage;
