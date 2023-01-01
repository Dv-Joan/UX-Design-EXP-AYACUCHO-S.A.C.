import logo from "./../assets/icons8_bus_64px_1.png";

function Login() {
  return (
    <div className="my-5 mx-5">
      <header>
        <div className="flex ml-10 gap-1 ">
          <img className="w-16 h-16" src={logo} alt="logo" />
          <h2 className="text-center font-bold font-Mansalva text-xl mt-1">
            Expreso <br /> Ayacucho
          </h2>
        </div>
      </header>
      <div className="flex justify-center font-Literata h-96 mt-40">
        <div className="flex flex-col justify-center w-1/2">
          <div className="text-center mb-10">
            <h1 className="text-4xl">LOGIN Molibus 2.0</h1>

            <h4 className="text-md mt-4">
              Los credenciales para el ingreso lo maneja el área de Gerencia
            </h4>
          </div>
          <div className="flex justify-center">
            <form className="flex flex-col justify-center w-[610px]">
              <div className="flex flex-col justify-center mb-7">
                <label className="text-xl font-black mb-3" htmlFor="username">
                  Usuario
                </label>
                <input
                  className="border-2 border-black py-2 px-5"
                  type="text"
                  name="username"
                  placeholder="Ingrese el nombre de usuario"
                />
              </div>
              <div className="flex flex-col justify-center">
                <label className="text-xl font-black mb-3" htmlFor="password">
                  Contraseña
                </label>
                <input
                  className="border-2 border-black py-2 px-5"
                  type="password"
                  name="password"
                  placeholder="***************"
                />
              </div>
              <div className="flex my-3">
                <input type="checkbox" className="mt-5 w-6 h-6 " />
                <label className="text-md mt-5 ml-2" htmlFor="remember">
                  Recordar contraseña
                </label>
              </div>
              <button className="bg-[#322F2F] mt-10 hover:bg-[#141313] text-white py-3 px-4">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
}

export default Login;
