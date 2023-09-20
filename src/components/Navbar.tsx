import Image from "next/image";
import Down from "@/assets/icons/svg/down.svg";
import Menu from "@/assets/icons/svg/menu.svg";
import Lense from "@/assets/icons/svg/lense.svg";
import Searchbar from "./Navbar/Searchbar";
import Profile from "./Navbar/Profile";
import NavLinks from "./Navbar/NavLinks";
import Categories from "./Navbar/Categories";

type NavbarProps = {
  active: string
}

function Navbar({active}:NavbarProps) {
  return (
    <div className="w-full h-auto md:h-[88px] md:grid md:grid-cols-[15%,auto] bg-white">
      <div className="bg-primary w-full h-[88px] hidden md:block"></div>

      <div className="flex flex-col w-full">
        <div className="w-full px-4 md:px-0 flex justify-between md:grid md:grid-cols-[76.5%,23.5%] md:justify-start h-[56px]">
          {/* Nav Mobile Menu */}
          <div className="grid grid-cols-2 gap-6 md:hidden">
            <div className="w-full flex items-center justify-center cursor-pointer">
              <Image src={Menu} alt="" quality={100} width={24} height={24} />
            </div>

            <div className="w-full flex items-center justify-center cursor-pointer">
              <Image src={Lense} alt="" quality={100} width={18} height={18} />
            </div>
          </div>

          <div className="hidden md:grid grid-cols-[25%,auto]">
            <Categories />
            <Searchbar />
          </div>

          <Profile />
        </div>

        <NavLinks active={active}/>
      </div>
    </div>
  );
}
export default Navbar;
