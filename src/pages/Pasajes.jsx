import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import llenoIcon from "../assets/icons/lleno-icon.png";
import llenandoIcon from "../assets/icons/llenando-icon.png";
import placaIcon from "../assets/icons/placa-icon.png";
import horaIcon from "../assets/icons/hora-icon.png";

import "../styles/extra.css";

function Pasajes() {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div className="bg-[#F3F1EF] w-[1450px] h-screen rounded-l-xl">
      <div className="mx-10 my-5">
        <div class="sm:px-6 w-full">
          <div class="px-4 md:px-10 py-4 md:py-7">
            <div class="flex items-center justify-between">
              <p
                tabIndex="0"
                class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-xl font-bold leading-normal text-gray-800 font-Nunito"
              >
                VIAJES DISPONIBLES
              </p>
              <div class="py-3 px-4 flex gap-5 text-sm font-medium text-gray-600">
                <p className="font-bold text-[16px] mt-2">Fecha : </p>
                <div className="font-Roboto">
                  <Datepicker
                    inputClassName={
                      "w-[200px] h-[35px] rounded-lg bg-gray-200 border border-gray-300 cursor-pointer"
                    }
                    useRange={false}
                    primaryColor={"cyan"}
                    asSingle={true}
                    value={date}
                    onChange={handleDateChange}
                    placeholder={"Seleccionar fecha"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 rounded-lg drop-shadow-lg">
            <div class="mt-7 overflow-x-auto">
              <table class="w-full whitespace-nowrap">
                <thead>
                  <tr
                    tabindex="0"
                    class="focus:outline-none h-16 border border-gray-100 rounded"
                  >
                    <th class="pl-3 text-sm font-medium leading-none text-gray-500">
                      Viaje ID
                    </th>
                    <th class="pr-48 text-sm font-medium leading-none text-gray-500">
                      Ruta
                    </th>
                    <th class=" text-sm font-medium leading-none text-gray-500">
                      Bus
                    </th>
                    <th class="pr-20 text-sm font-medium leading-none text-gray-500">
                      Fecha
                    </th>
                    <th class="pr-20 text-sm font-medium leading-none text-gray-500">
                      Hora
                    </th>
                    <th class="pl-16 text-sm font-medium leading-none text-gray-500">
                      Acción
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    tabindex="0"
                    class="focus:outline-none h-16 border border-gray-100 rounded hover:bg-gray-100"
                  >
                    <td>
                      <div class="ml-5">
                        <span className="text-gray-600 text-sm">1475</span>
                      </div>
                    </td>
                    <td class="">
                      <div class="flex items-center pl-10">
                        <p class="text-base font-medium leading-none text-gray-700 mr-2">
                          Huancayo - Ayacucho
                        </p>
                        <img
                          src={llenandoIcon}
                          className="w-[15px] h-[15px] mt-0.5 ml-2 "
                          alt=""
                        />
                      </div>
                    </td>
                    <td class="pl-20">
                      <div class="flex items-center">
                        <img
                          src={placaIcon}
                          className="w-[20px] h-[20px] mt-0.5"
                          alt=""
                        />
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          ABG-14R
                        </p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.5 5H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 10H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 15H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 5V5.00667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 10V10.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 15V15.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          05-01-2021
                        </p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <div class="flex items-center">
                        <img
                          src={horaIcon}
                          className="w-[16px] h-[16px] mt-0.5"
                          alt=""
                        />
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          08:00{" "}
                          <span className="bg-cyan-500 opacity-70 px-1.5 ml-1 pb-0.5 rounded-md text-white font-bold tracking-wide ">
                            pm
                          </span>
                        </p>
                      </div>
                    </td>

                    <td class="pl-4">
                      <button className="styled-btn font-bold">
                        Registrar
                      </button>
                    </td>
                    <td>
                      <div>
                        <button className="eye-button pt-2 duration-300 pr-3">
                          <svg
                            fill="#5F6061"
                            height="22px"
                            width="22px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            enable-background="new 0 0 512 512"
                            stroke="#323842"
                            className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128 s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96 c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"></path>{" "}
                            </g>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="h-3"></tr>
                  <tr
                    tabIndex="0"
                    class="focus:outline-none  h-16 border border-gray-100 rounded hover:bg-gray-100"
                  >
                    <td>
                      <div class="ml-5">
                        <span className="text-gray-600 text-sm">1479</span>
                      </div>
                    </td>
                    <td class="focus:text-indigo-600 ">
                      <div class="flex items-center pl-10">
                        <p class="text-base font-medium leading-none text-gray-700 mr-2">
                          Ayacucho - Huancayo
                        </p>
                      </div>
                    </td>
                    <td class="pl-20">
                      <div class="flex items-center">
                        <img
                          src={placaIcon}
                          className="w-[20px] h-[20px] mt-0.5"
                          alt=""
                        />
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          CV2-B9Z
                        </p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.5 5H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 10H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 15H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 5V5.00667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 10V10.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 15V15.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          04-01-2021
                        </p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <div class="flex items-center">
                        <img
                          src={horaIcon}
                          className="w-[16px] h-[16px] mt-0.5"
                          alt=""
                        />
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          08:00{" "}
                          <span className="bg-cyan-500 opacity-70 px-1.5 pb-0.5 ml-1 rounded-md text-white font-bold tracking-wide ">
                            pm
                          </span>
                        </p>
                      </div>
                    </td>
                    <td class="pl-4">
                      <button className="styled-btn font-bold">
                        Registrar
                      </button>
                    </td>
                    <td>
                      <div>
                        <button className="eye-button pt-2 duration-300 pr-3 ">
                          <svg
                            fill="#5F6061"
                            height="22px"
                            width="22px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            enable-background="new 0 0 512 512"
                            stroke="#323842"
                            className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128 s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96 c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"></path>{" "}
                            </g>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="h-3"></tr>
                  <tr
                    tabIndex="0"
                    class="focus:outline-none focus:text-indigo-600 h-16 border border-gray-100 rounded hover:bg-gray-100"
                  >
                    <td>
                      <div class="ml-5">
                        <span className="text-gray-600 text-sm">1480</span>
                      </div>
                    </td>
                    <td class="">
                      <div class="flex items-center pl-10">
                        <p class="text-base font-medium leading-none text-gray-700 mr-2">
                          Huancayo - Ayacucho
                        </p>
                      </div>
                    </td>
                    <td class="pl-20">
                      <div class="flex items-center">
                        <img
                          src={placaIcon}
                          className="w-[20px] h-[20px] mt-0.5"
                          alt=""
                        />
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          B8G-1TY
                        </p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.5 5H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 10H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 15H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 5V5.00667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 10V10.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 15V15.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          06-01-2021
                        </p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <div class="flex items-center">
                        <img
                          src={horaIcon}
                          className="w-[16px] h-[16px] mt-0.5"
                          alt=""
                        />
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          09:30
                          <span className="bg-green-500 opacity-70 ml-2 px-1.5 pb-0.5 rounded-md text-white font-bold tracking-wide ">
                            am
                          </span>
                        </p>
                      </div>
                    </td>

                    <td class="pl-4">
                      <button className="styled-btn font-bold">
                        Registrar
                      </button>
                    </td>
                    <td>
                      <div>
                        <button className="eye-button pt-2 duration-300 pr-3">
                          <svg
                            fill="#5F6061"
                            height="22px"
                            width="22px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            enable-background="new 0 0 512 512"
                            stroke="#323842"
                            className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128 s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96 c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"></path>{" "}
                            </g>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="h-3"></tr>
                  <tr
                    tabindex="0"
                    class="focus:outline-none h-16 border border-gray-100 rounded hover:bg-gray-100"
                  >
                    <td>
                      <div class="ml-5">
                        <span className="text-gray-600 text-sm">1484</span>
                      </div>
                    </td>
                    <td class="">
                      <div class="flex items-center pl-10">
                        <p class="text-base font-medium leading-none text-gray-700 mr-2">
                          Ayacucho - Huancayo
                        </p>
                        <img
                          src={llenoIcon}
                          className="w-[15px] h-[15px] mt-0.5 ml-2"
                          alt=""
                        />
                      </div>
                    </td>
                    <td class="pl-20">
                      <div class="flex items-center">
                        <img
                          src={placaIcon}
                          className="w-[20px] h-[20px] mt-0.5"
                          alt=""
                        />
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          B9Y-15Q
                        </p>
                      </div>
                    </td>
                    <td class="pl-5">
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.5 5H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 10H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7.5 15H16.6667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 5V5.00667"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 10V10.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.16669 15V15.0067"
                            stroke="#52525B"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          05-01-2021
                        </p>
                      </div>
                    </td>

                    <td class="pl-5">
                      <div class="flex items-center">
                        <img
                          src={horaIcon}
                          className="w-[16px] h-[16px] mt-0.5"
                          alt=""
                        />
                        <p class="text-sm leading-none text-gray-600 ml-2">
                          08:00{" "}
                          <span className="bg-cyan-500 opacity-70 px-1.5 pb-0.5 ml-1 rounded-md text-white font-bold tracking-wide ">
                            pm
                          </span>
                        </p>
                      </div>
                    </td>

                    <td class="pl-4">
                      <button className="styled-btn font-bold">
                        Registrar
                      </button>
                    </td>

                    <td>
                      <div>
                        <button className="eye-button pt-2 duration-300 pr-3">
                          <svg
                            fill="#5F6061"
                            height="22px"
                            width="22px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            enable-background="new 0 0 512 512"
                            stroke="#323842"
                            className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128 s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96 c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"></path>{" "}
                            </g>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="h-3"></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pasajes;
