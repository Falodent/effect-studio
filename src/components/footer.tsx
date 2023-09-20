import Image from "next/image";
import Foot from "@/assets/images/payment-partners.png";
import Send from "@/assets/icons/svg/paper-plane.svg";
import Fb from "@/assets/icons/svg/facebook-w.svg";
import X from "@/assets/icons/svg/twitter-x.svg";
import Ig from "@/assets/icons/svg/instagram-w.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-auto pt-10 md:pt-20 bg-[#F5F5F6] flex flex-col">
      <div className="px-4 md:px-5 lg:px-20 flex flex-col md:flex-row pb-20 gap-10 md:gap-2 justify-between">
        <ul className="text-black text-base font-bold">
          Main Menu
          <li className="mt-6 text-black text-sm font-normal cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            T-shirts
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            NBA
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            Tracksuits
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            Products Delivery • 1-2 days
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            Contact
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            Reviews
          </li>
        </ul>

        <ul className="text-black text-base font-bold">
          Secondary Menu
          <li className="mt-6 text-black text-sm font-normal cursor-pointer">
            Search
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            Privacy Policy
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            Shipping Policy
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            Returns Policy
          </li>
          <li className="mt-4 text-black text-sm font-normal cursor-pointer">
            Terms of Service
          </li>
        </ul>

        <div className="flex flex-col gap-6">
          <p className="text-black text-base font-bold">Subscribe</p>
          <p className="text-black text-sm font-normal">
            Subscribe to our mailing list to <br />
            receive the latest news.
          </p>
          <div className="w-3/4 h-10 grid grid-cols-[auto,40px]">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="pl-5 text-xs text-black bg-white outline-none border border-[#EAEAEC]"
            />
            <div className="px-3 flex items-center justify-center bg-primary cursor-pointer">
              <Image src={Send} alt="" quality={100} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:mr-12">
          <p className="text-black text-base font-bold">Follow Us</p>
          <div className="flex gap-2 h-8">
            <div className="w-8 h--8 flex items-center justify-center bg-black cursor-pointer">
              <Image src={Fb} alt="" />
            </div>
            <div className="w-8 h--8 flex items-center justify-center bg-black cursor-pointer">
              <Image src={X} alt="" style={{ fill: "#ffffff" }} />
            </div>
            <div className="w-8 h--8 flex items-center justify-center bg-black cursor-pointer">
              <Image src={Ig} alt="" style={{ fill: "#ffffff" }} />
            </div>
          </div>
          <Image src={Foot} alt="" className="md:hidden flex" />
        </div>
      </div>

      <div className="border-t-[1px] w-full border-[#EAEAEC] flex h-20 items-center justify-between px-4 md:px-5 lg:px-20">
        <p className="text-xs text-black">
          &copy; 2021 Jambulani • All rights reserved
        </p>
        <Image src={Foot} alt="" className="hidden md:flex" />
      </div>
    </div>
  );
}
export default Footer;
