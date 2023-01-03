// Importacion de Pages
import PanelControl from "./PanelControl";
import Pasajes from "./Pasajes";
import Contable from "./Contable";
import Encomiendas from "./Encomiendas";
import Programacion from "./Programacion";
import Administracion from "./Administracion";

// Importacion de Assets
import panelControl from "../assets/icons/paneldecontrol_icon.png";
import pasajesIcon from "../assets/icons/pasajes_icon.png";
import contableIcon from "../assets/icons/contable_icon.png";
import programacionIcon from "../assets/icons/programacion_icon.png";
import encomiendasIcon from "../assets/icons/encomiendas_icon.png";
import administracionIcon from "../assets/icons/administracion_icon.png";
import logo from "../assets/logo.png";
import userThumbnail from "../assets/users_image/julio_osorio.png";

// Importacion de React Router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function LandingPage() {
  return (
    <Router>
      <div className="flex">
        <div className="my-5 mt-5 mx-8 pr-1">
          <Link to="/">
            <div className="flex gap-1 ">
              <img className="w-[60px] h-[60px]" src={logo} alt="logo" />
              <h2 className="text-center font-bold font-Mansalva text-xl mt-1">
                Expreso <br /> Ayacucho
              </h2>
            </div>
          </Link>
          <div className="my-24 p-3 text-center font-Literata" id="userVar">
            <img
              className="pl-12 drop-shadow-lg"
              src={userThumbnail}
              alt="userThumbnail"
            />
            <h3 className="font-bold">Julio Osorio</h3>
            <h4 className="text-sm">Gerente</h4>
          </div>
          <div className="text-[#353030]">
            <Link to="/">
              <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
                <button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
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
            </Link>
            <Link to="/pasajes">
              <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
                <button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
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
            </Link>
            <Link to="/contable">
              <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
                <button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
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
            </Link>
            <Link to="/programacion">
              <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
                <button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
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
            </Link>
            <Link to="/encomiendas">
              <div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
                <button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
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
            </Link>
            <Link to="/administracion">
              <div className="flex flex-col gap-2 font-Literata font-bold text-[14px]">
                <button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
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
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<PanelControl />} />
          <Route path="/pasajes" element={<Pasajes />} />
          <Route path="/contable" element={<Contable />} />
          <Route path="/encomiendas" element={<Encomiendas />} />
          <Route path="/programacion" element={<Programacion />} />
          <Route path="/administracion" element={<Administracion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default LandingPage;
