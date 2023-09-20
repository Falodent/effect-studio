"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import Left from "@/assets/icons/svg/left.svg";
import Right from "@/assets/icons/svg/right.svg";
import Link from "next/link";

type SliderProps = {
  data: Array<{
    image: StaticImageData;
    percent?: string;
    product: string;
    price: string;
    discount?: string;
  }>;
};

const CarouselContainer = ({ data }: SliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100;
    }
  };

  return (
    <>
      <div className="flex absolute top-10 right-4 md:top-20 md:right-10 lg:right-20 gap-2">
        <div
          className="w-10 h-10 flex items-center justify-center border border-[#EAEAEC] cursor-pointer"
          onClick={scrollLeft}
        >
          <Image src={Left} alt="" />
        </div>
        <button
          className="w-10 h-10 flex items-center justify-center border border-[#EAEAEC] cursor-pointer "
          onClick={scrollRight}
        >
          <Image src={Right} alt="" />
        </button>
      </div>

      <div className="relative w-full h-[340px] overflow-hidden">
        <div
          ref={containerRef}
          className="w-full h-full flex space-x-4 hide-scrollbar pr-4 md:pr-10"
          style={{ overflowX: "auto" }}
        >
          {data.map((items, index) => (
            <div className="h-full inline-block mr-4 flex-shrink-0" key={index}>
              <div className="w-60 h-[340px] flex flex-col">
                <div className="relative w-full h-60">
                  <Image src={items.image} alt="" width={240} height={240} />
                  {items.percent !== "" ? (
                    <div className="bottom-4 left-4 absolute bg-[#23C353] py-1 px-2 text-[10px] leading-4 text-white font-semibold">
                      Save {items.percent}
                    </div>
                  ) : null}
                </div>
                <div className="w-full h-[100px] p-4 flex flex-col gap-2 border-b-[1px] border-x-[1px] border-[#EAEAEC]">
                  <Link
                    href="/product"
                    className="text-sm text-[#393A38] h-9 flex items-center hover:text-base"
                  >
                    {items.product}
                  </Link>
                  <div className="flex gap-2 items-center">
                    <p className="text-xl font-bold text-black">
                      €{items.price}
                    </p>
                    {items.discount !== "" ? (
                      <p className="text-xs text-[#EE503E] line-through">
                        €{items.discount}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselContainer;
