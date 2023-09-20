import Image from "next/image";
import Down from "@/assets/icons/svg/down.svg";
import Link from "next/link";

type NavbarProps = {
  active: string;
};

function NavLinks({ active }: NavbarProps) {
  return (
    <div className="hidden md:pl-4 lg:pl-10 md:flex flex-row items-center md:gap-4 lg:gap-10 h-[32px] border-b-[1px] border-[#F5F5F6] w-full">
      <div>
        <Link
          href="/"
          className={`md:text-xs lg:text-sm font-bold text-black h-full ${active}`}
        >
          Home
        </Link>
      </div>

      <div className="flex items-center gap-1 opacity-50 cursor-pointer">
        <p className="md:text-xs lg:text-sm font-bold text-black py-2">
          T-shirts
        </p>
        <Image src={Down} alt="" quality={100} />
      </div>

      <div className="flex items-center gap-1 opacity-50 cursor-pointer">
        <p className="md:text-xs lg:text-sm font-bold text-black py-2">NBA</p>
        <Image src={Down} alt="" quality={100} />
      </div>

      <div className="flex items-center gap-1 opacity-50 cursor-pointer">
        <p className="md:text-xs lg:text-sm font-bold text-black py-2">
          Tracksuits
        </p>
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
  );
}
export default NavLinks;
