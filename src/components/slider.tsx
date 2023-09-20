"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import Left from "@/assets/icons/svg/left.svg";
import Right from "@/assets/icons/svg/right.svg";

type SliderProps = {
  data: Array<{
    image: StaticImageData;
    percent?: string;
    product: string;
    price: string;
    discount?: string;
  }>;
};

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="w-10 h-10 flex items-center justify-center border border-[#EAEAEC] cursor-pointer absolute top-10 right-4 md:top-20 md:right-20"
      onClick={onClick}
    >
      <Image src={Right} alt="" />
    </button>
  );
}

const Carousel = ({ data }: SliderProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    className: "slider",
    infinite: false,
    speed: 500,
    slidesToShow: 4.3,
    slidesToScroll: 1,
    draggable: true,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {data.map((items, index) => (
          <div className="!w-60 h-[340px] flex flex-col" key={index}>
            <div className="relative w-full h-60">
              <Image src={items.image} alt="" width={240} height={240} />
              {items.percent !== "" ? (
                <div className="bottom-4 left-4 absolute bg-[#23C353] py-1 px-2 text-[10px] leading-4 text-white font-semibold">
                  Save {items.percent}
                </div>
              ) : null}
            </div>
            <div className="w-full h-[100px] p-4 flex flex-col gap-2 border-b-[1px] border-x-[1px] border-[#EAEAEC]">
              <p className="text-sm text-[#393A38] h-9 flex items-center">
                {items.product}
              </p>
              <div className="flex gap-2 items-center">
                <p className="text-xl font-bold text-black">€{items.price}</p>
                {items.discount !== "" ? (
                  <p className="text-xs text-[#EE503E] line-through">
                    €{items.discount}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex absolute top-10 right-16 md:top-20 md:right-32">
        <div
          className="w-10 h-10 flex items-center justify-center border border-[#EAEAEC] cursor-pointer"
          onClick={previous}
        >
          <Image src={Left} alt="" />
        </div>
      </div>
    </>
  );
};

export default Carousel;
