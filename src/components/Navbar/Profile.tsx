import Image from "next/image";
import Down from "@/assets/icons/svg/down.svg";
import Cart from "@/assets/icons/svg/shopping-cart.svg";
import Avatar from "@/assets/icons/svg/user.svg";

function Profile() {
  return (
    <div className="grid grid-cols-2 gap-6 md:gap-0">
      <div className="w-full flex items-center justify-center md:border-b-[1px] md:border-r-[1px] border-[#F5F5F6]">
        <Image src={Cart} alt="" quality={100} />
      </div>

      <div className="w-full flex items-center gap-1 justify-center md:border-b-[1px] border-[#F5F5F6] cursor-pointer">
        <Image src={Avatar} alt="" quality={100} />
        <Image src={Down} alt="" quality={100} />
      </div>
    </div>
  );
}
export default Profile;
