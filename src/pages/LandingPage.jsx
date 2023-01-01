import PanelController from "./PanelController";
import Passenger from "./Passenger";
import Contable from "./Contable";
import Encomiendas from "./Encomiendas";

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
