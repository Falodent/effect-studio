"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Down from "@/assets/icons/svg/down.svg";
import Server from "@/server/Global";

function Categories() {
  const [categories, setCategories] = useState<Array<any>>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMouseInsideDropdown, setIsMouseInsideDropdown] = useState(false);

  useEffect(() => {
    Server.get("product-category")
      .then((res) => {
        setCategories(res.data.categories.data);
        console.log(res.data.categories.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isMouseInsideDropdown) {
        setIsDropdownVisible(false);
      }
    }, 500);
  };

  const handleDropdownMouseEnter = () => {
    setIsMouseInsideDropdown(true);
    setIsDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsMouseInsideDropdown(false);
    setIsDropdownVisible(false);
  };

  return (
    <div
      className="relative min-h-[56px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="group h-[56px] flex items-center justify-center gap-2 border-b-[1px] border-r-[1px] border-[#F5F5F6] cursor-pointer">
        <p className="md:text-xs lg:text-sm font-semibold leading-4 text-black">
          All Categories
        </p>
        <Image src={Down} alt="" quality={100} />
      </div>

      {isDropdownVisible && (
        <div
          className="absolute z-10 mt-2 left-2 bg-[#f9f9f9] py-3 shadow-lg min-w-[230px] rounded-lg"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <ul className="flex flex-col gap-1">
            {categories.map((category) => (
              <li key={category?.id} className="w-full flex py-1 px-3 hover:border hover:border-[#EAEAEC]">
                <a
                  href="#"
                  className="text-sm text-black w-full"
                >
                  {category?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Categories;
