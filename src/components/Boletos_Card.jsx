import boletosThumbnail from "../assets/boletos_img.png";
import boletoThumbnail from "../assets/boleto.png";
import facturaThumbnail from "../assets/factura.png";

function Boletos_Card() {
  return (
    <div class="text-white w-[450px] h-[307px] rounded-xl ml-[78px] group flex flex-col bg-[#0F1322] hover:scale-105 drop-shadow-lg  ease-out duration-300 cursor-pointer  shadow-xl ">
      <h3 className="font-MPLUS2 pl-7 pt-2 font-semibold text-[32px] text-left">
        BOLETOS
      </h3>

      <div className="flex gap-16 pl-10 items-center justify-center">
        <img
          class="mx-auto block w-[115px] h-[116px] mt-12 rounded-lg"
          alt="pasajeThumbnail"
          loading="lazy"
          src={boletosThumbnail}
        />
        <div className="">
          <div class=" mb-12 pr-10 font-MPLUS1">
            <div class="space-y-1.5">
              <h4 class="text-md text-justify">BOLETA B003</h4>

              <div class="flex items-center space-x-2">
                <img src={boletoThumbnail} class=" h-8 w-8" />
                <span class="text-md font-semibold tracking-wider">31190</span>
              </div>
            </div>
          </div>
          <div class="  pr-10 font-MPLUS1">
            <div class="space-y-1.5">
              <h4 class="text-md text-justify">FACTURA F003</h4>

              <div class="flex items-center space-x-2">
                <img src={facturaThumbnail} class=" h-8 w-8" />
                <span class="text-md font-semibold tracking-wider">1580 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boletos_Card;
