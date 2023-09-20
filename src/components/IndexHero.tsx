"use client";

import { useState, useEffect } from "react";
import Bag from "@/assets/icons/png/bag.png";
import Server from "@/server/Global";
import Image from "next/image";

function IndexHero() {
  const [banners, setBanners] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [background, setBackground] = useState("");
  const [state, setState] = useState(0);
  const active = "bg-primary";
  const inactive = "bg-white bg-opacity-20";

  useEffect(() => {
    Server.get("banner")
      .then((res) => {
        setBanners(res.data.banners.data);
        console.log(res.data.banners.data);
        setBackground(`url(${res.data.banners.data[0]?.image})`);
        setState(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      setBackground(`url(${banners[currentIndex].image})`);
      setState(currentIndex);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [banners, currentIndex]);

  return (
    <div
      className="h-[400px] md:mx-5 md:mt-10 lg:mx-10 custom-bg relative"
      style={{ backgroundImage: background }}
    >
      <div className="absolute md:pl-10 lg:pl-20 md:pr-10 md:pt-20 md:pb-10 flex flex-col justify-between h-full w-full p-8">
        <p className="text-white md:text-[40px] font-bold md:leading-[48px] text-2xl">
          Your favorite customized <br />{" "}
          <span className="text-secondary">Club Jerseys.</span>
        </p>

        <div className="w-full flex justify-between items-end">
          <div className="flex md:gap-2 gap-1">
            <div
              className={`w-8 md:w-20 h-1 ${state === 0 ? active : inactive}`}
            ></div>
            <div
              className={`w-8 md:w-20 h-1 ${state === 1 ? active : inactive}`}
            ></div>
            <div
              className={`w-8 md:w-20 h-1 ${state === 2 ? active : inactive}`}
            ></div>
            <div
              className={`w-8 md:w-20 h-1 ${state === 3 ? active : inactive}`}
            ></div>
            <div
              className={`w-8 md:w-20 h-1 ${state === 4 ? active : inactive}`}
            ></div>
          </div>

          <div className="flex h-10 ">
            <p className=" bg-black px-4 md:px-5 border border-white font-semibold text-xs text-white leading-4 flex items-center justify-center">
              Shop Now
            </p>
            <div className="md:px-5 px-3 flex items-center justify-center bg-white">
              <Image src={Bag} alt="" quality={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndexHero;
