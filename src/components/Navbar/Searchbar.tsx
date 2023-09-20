import Image from "next/image";
import Search from "@/assets/icons/svg/search.svg";

function Searchbar() {
  return (
    <div className="flex flex-row items-center justify-between px-6 border-b-[1px] border-r-[1px] border-[#F5F5F6] cursor-pointer">
      <input
        type="text"
        name="search"
        placeholder="What are you looking for?"
        className="md:text-sm lg:text-base leading-6 text-black opacity-40 outline-none border-none w-3/4"
      />
      <div className="flex h-10">
        <p className="px-5 bg-primary font-semibold text-xs text-black leading-4 md:flex items-center justify-center">
          Search
        </p>
        <div className="w-10 h-10 flex items-center justify-center bg-black">
          <Image src={Search} alt="" quality={100} width={14} height={14} />
        </div>
      </div>
    </div>
  );
}
export default Searchbar;
