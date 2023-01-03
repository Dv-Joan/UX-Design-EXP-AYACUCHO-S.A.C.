import Pasajes_Card from "../components/Pasajes_Card";
import Boletos_Card from "../components/Boletos_Card";
import Viajes_Card from "../components/Viajes_Card";

function PanelControl() {
  return (
    <div className="">
      <div className="bg-[#F3F1EF] w-[1450px] h-screen rounded-l-xl grid grid-cols-2">
        <Pasajes_Card />
        <Viajes_Card />
        <Boletos_Card />
      </div>
    </div>
  );
}

export default PanelControl;
