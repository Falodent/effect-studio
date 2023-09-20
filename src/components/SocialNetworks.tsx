import Image from "next/image";
import Fb from "@/assets/icons/svg/facebook-f.svg";
import X from "@/assets/icons/svg/twitter.svg";
import Ig from "@/assets/icons/svg/instagram.svg";

function SocialNetworks() {
  return (
    <div className="w-full px-4 py-10 md:px-5 md:py-20 lg:p-20 h-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="w-full h-[240px] md:h-[400px] bg-[url('../assets/images/personalization.jpg')] bg-opacity-40 bg-cover bg-center bg-no-repeat">
          <div className="absolute bottom-5 md:bottom-10 w-full px-5 lg:px-10 flex flex-col gap-3 md:gap-6">
            <p className="text-white text-sm md:text-2xl font-bold">
              PERSONALIZATION
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[9px] md:text-base text-white">
                Put a custom print on the football shirt of your choice with our
                <br />
                Personalization service.
              </p>

              <p className="text-[9px] md:text-base text-white">
                Tell us what name, what number and we put it.{" "}
                <span className="font-bold">FREE!!!</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="w-full h-[240px] md:h-[400px] bg-[url('../assets/images/social-networks.jpg')] bg-opacity-40 bg-cover bg-center bg-no-repeat">
          <div className="absolute bottom-5 md:bottom-10 w-full px-5 lg:px-10 flex flex-col gap-3 md:gap-6">
            <p className="text-white text-sm md:text-2xl font-bold">
              SOCIAL NETWORKS
            </p>
            <p className="text-[9px] md:text-base text-white">
              Share your shirts with us with the #CamisetasFutbolSpainnn
            </p>
            <div className="flex gap-2 h-8">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-white cursor-pointer">
                <Image src={Fb} alt="" style={{ fill: "#111112" }} />
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-white cursor-pointer">
                <Image src={X} alt="" style={{ fill: "#111112" }} />
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-white cursor-pointer">
                <Image src={Ig} alt="" style={{ fill: "#111112" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SocialNetworks;
