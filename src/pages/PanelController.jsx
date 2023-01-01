import logo from "../assets/logo.png";
import userThumbnail from "../assets/users_image/julio_osorio.png";
import Pasajes_Card from "../components/Pasajes_Card";
import Boletos_Card from "../components/Boletos_Card";
import Viajes_Card from "../components/Viajes_Card";
import panelControl from "../assets/icons/paneldecontrol_icon.png";
import pasajesIcon from "../assets/icons/pasajes_icon.png";
import contableIcon from "../assets/icons/contable_icon.png";
import programacionIcon from "../assets/icons/programacion_icon.png";
import encomiendasIcon from "../assets/icons/encomiendas_icon.png";
import administracionIcon from "../assets/icons/administracion_icon.png";

function PanelController() {
  return (
    <div className="flex">
      <div className="w-64 my-5 mt-5 mx-5">
        <div className="flex gap-1 ">
          <img className="w-[60px] h-[60px]" src={logo} alt="logo" />
          <h2 className="text-center font-bold font-Mansalva text-xl mt-1">
            Expreso <br /> Ayacucho
          </h2>
        </div>
        <div className="my-24 p-3 text-center font-Literata" id="userVar">
          <img className="pl-16" src={userThumbnail} alt="userThumbnail" />
          <h3 className="font-bold">Julio Osorio</h3>
          <h4>Gerente</h4>
        </div>
        <div className="text-[#353030]">
          <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
            <button className="px-6 py-3 hover:bg-[#F3F1EF] duration-200 rounded-lg">
              <div className="flex gap-3">
                <img
                  src={panelControl}
                  className="w-[20px] h-[22px]"
                  alt="home"
                />
                <h3 className="text-center  ">Panel de Control</h3>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
            <button className="px-6 py-3 hover:bg-[#F3F1EF] duration-200 rounded-lg">
              <div className="flex gap-3">
                <img
                  src={pasajesIcon}
                  className="w-[20px] h-[22px]"
                  alt="home"
                />
                <h3 className="text-center  ">Venta de Pasajes</h3>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
            <button className="px-6 py-3 hover:bg-[#F3F1EF] duration-200 rounded-lg">
              <div className="flex gap-3">
                <img
                  src={contableIcon}
                  className="w-[20px] h-[22px]"
                  alt="home"
                />
                <h3 className="text-center  ">Contable</h3>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
            <button className="px-6 py-3 hover:bg-[#F3F1EF] duration-200 rounded-lg">
              <div className="flex gap-3">
                <img
                  src={programacionIcon}
                  className="w-[20px] h-[22px]"
                  alt="home"
                />
                <h3 className="text-center  ">Programación</h3>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
            <button className="px-6 py-3 hover:bg-[#F3F1EF] duration-200 rounded-lg">
              <div className="flex gap-3">
                <img
                  src={encomiendasIcon}
                  className="w-[20px] h-[22px]"
                  alt="home"
                />
                <h3 className="text-center  ">Encomiendas</h3>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-2 font-Literata font-bold text-[14px]">
            <button className="px-6 py-3 hover:bg-[#F3F1EF] duration-200 rounded-lg">
              <div className="flex gap-3">
                <img
                  src={administracionIcon}
                  className="w-[20px] h-[22px]"
                  alt="home"
                />
                <h3 className="text-center  ">Administracion</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F1EF] w-screen h-screen rounded-l-xl grid grid-cols-2">
        <Pasajes_Card />
        <Viajes_Card />
        <Boletos_Card />
      </div>
    </div>
  );
}

export default PanelController;
