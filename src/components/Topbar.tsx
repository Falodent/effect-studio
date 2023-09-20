import Whatsapp from "@/assets/icons/svg/whatsapp.svg";
import Image from "next/image";
import World from "@/assets/icons/svg/globe.svg";
import Down from "@/assets/icons/svg/down-w.svg";

function Topbar() {
  return (
    <div className="w-full h-[32px] grid grid-cols-[20%,auto,20%] md:grid-cols-[15%,auto,20%] bg-[#111112]">
      <div className="bg-white bg-opacity-[0.08] h-[32px] flex items-center justify-center gap-1">
        <Image src={World} alt="" quality={100} />
        <p className="text-white text-xs leading-6 font-semibold">EN</p>
        <Image src={Down} alt="" quality={100} />
      </div>
      <p className="text-white text-center opacity-80 text-xs py-2 md:py-0 pl-4 md:pl-0 leading-6 h-[32px] overflow-hidden font-semibold flex md:items-center justify-center">
        SALES BEGIN • FREE SHIPPING ON ALL ORDERS
      </p>
      <div className="bg-[#27B03F] flex items-center h-[32px] justify-center gap-1">
        <Image src={Whatsapp} alt="" quality={100} />
        <p className="text-xs leading-4 font-bold text-white">
          Chat <span className="hidden md:inline"> {" "}with us</span>
        </p>
      </div>
    </div>
  );
}
export default Topbar;
