import Image from "next/image";
import Search from "@/assets/icons/svg/search.svg";
import Down from "@/assets/icons/svg/down.svg";
import Cart from "@/assets/icons/svg/shopping-cart.svg";
import Avatar from "@/assets/icons/svg/user.svg";
import Menu from "@/assets/icons/svg/menu.svg";
import Lense from "@/assets/icons/svg/lense.svg";

function Nav() {
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
            <div className="flex items-center justify-center gap-2 border-b-[1px] border-r-[1px] border-[#F5F5F6]">
              <p className="md:text-xs lg:text-sm font-semibold leading-4 text-black">
                All Categories
              </p>
              <Image src={Down} alt="" quality={100} />
            </div>
            <div className="flex flex-row items-center justify-between px-6 border-b-[1px] border-r-[1px] border-[#F5F5F6] cursor-pointer">
              <input
                type="text"
                name="search"
                placeholder="What are you looking for?"
                className="md:text-sm lg:text-base leading-6 text-black opacity-40 outline-none border-none w-3/4"
              />
              <div className="flex h-10">
                <p className="px-5 bg-primary font-semibold text-xs text-black leading-4 md:flex items-center justify-center">
                  Search
                </p>
                <div className="w-10 h-10 flex items-center justify-center bg-black">
                  <Image src={Search} alt="" quality={100} width={14} height={14}/>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-0">
            <div className="w-full flex items-center justify-center md:border-b-[1px] md:border-r-[1px] border-[#F5F5F6]">
              <Image src={Cart} alt="" quality={100} />
            </div>

            <div className="w-full flex items-center gap-1 justify-center md:border-b-[1px] border-[#F5F5F6] cursor-pointer">
              <Image src={Avatar} alt="" quality={100} />
              <Image src={Down} alt="" quality={100} />
            </div>
          </div>
        </div>

        <div className="hidden md:pl-4 lg:pl-10 md:flex flex-row items-center md:gap-4 lg:gap-10 h-[32px] border-b-[1px] border-[#F5F5F6] w-full">
          <p className="md:text-xs lg:text-sm font-bold text-black pt-2 h-full border-b-2 border-primary">
            Home
          </p>

          <div className="flex items-center gap-1 opacity-50 cursor-pointer">
            <p className="md:text-xs lg:text-sm font-bold text-black py-2">T-shirts</p>
            <Image src={Down} alt="" quality={100} />
          </div>

          <div className="flex items-center gap-1 opacity-50 cursor-pointer">
            <p className="md:text-xs lg:text-sm font-bold text-black py-2">NBA</p>
            <Image src={Down} alt="" quality={100} />
          </div>

          <div className="flex items-center gap-1 opacity-50 cursor-pointer">
            <p className="md:text-xs lg:text-sm font-bold text-black py-2">Tracksuits</p>
            <Image src={Down} alt="" quality={100} />
          </div>

          <p className="md:text-xs lg:text-sm font-bold text-black py-2 opacity-50 cursor-pointer">
            Products Delivery • 1 – 2 days
          </p>

          <p className="md:text-xs lg:text-sm font-bold text-black py-2 opacity-50 cursor-pointer">
            Contacts
          </p>

          <p className="md:text-xs lg:text-sm font-bold text-black py-2 opacity-50 cursor-pointer">
            Reviews
          </p>
        </div>
      </div>
    </div>
  );
}
export default Nav;
