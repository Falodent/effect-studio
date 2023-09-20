import Image from "next/image";
import Champs from "@/assets/images/country-leagues/champions-league.jpg";
import Europa from "@/assets/images/country-leagues/europa-league.jpg";
import Copa from "@/assets/images/country-leagues/copa-america.jpg";
import Asian from "@/assets/images/country-leagues/asian-cup.jpg";
import Caf from "@/assets/images/country-leagues/caf.jpg";

function Leagues() {
  const Leagues = [
    { image: Champs, text: "Champions League" },
    { image: Europa, text: "Europa League" },
    { image: Copa, text: "Copa America" },
    { image: Asian, text: "Asian Cup" },
    { image: Caf, text: "African Nations Cup" },
  ];
  return (
    <div className="w-full px-4 py-10 md:px-5 md:py-20 lg:px-20 h-auto flex flex-col gap-6 md:gap-20">
      <p className="text-3xl font-extrabold text-black">COUNTRY LEAGUES</p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Leagues.map((league, index) => (
          <div className="w-full flex flex-col gap-4" key={index}>
            <Image src={league.image} alt="" className="w-full object-cover"/>
            <p className="text-base font-bold text-black">{league.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Leagues;
