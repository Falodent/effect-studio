import Box from "@/components/Frame";
import IndexHero from "@/components/IndexHero";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import Leagues from "@/components/CountryLeagues";
import Truck from "@/assets/icons/png/truck-box.png";
import Phone from "@/assets/icons/png/phone-box.png";
import Whatsapp from "@/assets/icons/png/whatsapp-box.png";
import Reward from "@/assets/icons/png/rewards-box.png";
import Badge from "@/assets/icons/svg/reward.svg";
import Collection from "@/components/Collections";
import Footer from "@/components/Foot";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts";
import SocialNetworks from "@/components/SocialNetworks";

const Home = () => {
  return (
    <div className="w-full">
      <Topbar />
      <Navbar active="border-primary border-b-2 pt-2 pb-1"/>
      <IndexHero />

      <div className="m-4 md:mt-10 md:mx-5 lg:mx-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Box image={Truck} text="Secure Shipping" sub="on all orders" />
        <Box image={Phone} text="Telephone" sub="+1 23 456 7890" />
        <Box
          image={Whatsapp}
          text="Chat WhatsApp"
          sub="Mon-Fri: 9:00-21:00 • Sat-Sun: 9:00-17:00"
        />
        <Box
          image={Reward}
          text="Quality Guarantee"
          sub="Verified Purchase Reviews"
        />
      </div>

      <div className="mt-7 h-14">
        <Image src={Badge} alt="" />
      </div>

      <PopularProducts />
      <Leagues />
      <Collection />
      <SocialNetworks />
      <Footer />
    </div>
  );
};
export default Home;
