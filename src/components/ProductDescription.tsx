import Image from "next/image";
import ProductImg from "@/assets/images/product-large.jpg";
import ActiveImg from "@/assets/images/product-medium.jpg";
import Left from "@/assets/icons/svg/left-w.svg";
import Right from "@/assets/icons/svg/right-w.svg";
import Heart from "@/assets/icons/svg/heart-outline.svg";
import Cart from "@/assets/icons/svg/cart.svg";

function ProductDescription() {
  return (
    <div className="w-full pt-6 px-4 lg:px-10 xl:pl-[10%] xl:pr-20 flex flex-col gap-10">
      <div className="flex gap-1 md:gap-2 items-center">
        <p className="text-[10px] md:text-xs font-medium text-[#1256DB] opacity-90">
          Home
        </p>
        <p className="text-[10px] md:text-xs font-medium text-black opacity-90">
          {">"}
        </p>
        <p className="text-[10px] md:text-xs font-medium text-[#1256DB] opacity-90">
          England — Premier League
        </p>
        <p className="text-[10px] md:text-xs font-medium text-black opacity-90">
          {">"}
        </p>
        <p className="text-[10px] md:text-xs font-medium text-black opacity-90">
          Manchester United 21-22 Home Shirt
        </p>
      </div>

      <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5 xl:gap-10">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full relative">
            <Image src={ProductImg} alt="" className="w-full object-cover" />

            <div className="flex gap-2 absolute bottom-4 right-4">
              <div className="w-10 h-10 flex items-center justify-center border bg-black bg-opacity-40 border-[#ffffff29] cursor-pointer">
                <Image src={Left} alt="" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center border bg-black bg-opacity-40 border-[#ffffff29] cursor-pointer">
                <Image src={Right} alt="" />
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-5 gap-4">
            <Image src={ActiveImg} alt="" className="w-full object-cover" />
            <Image
              src={ActiveImg}
              alt=""
              className="w-full object-cover opacity-40"
            />
            <Image
              src={ActiveImg}
              alt=""
              className="w-full object-cover opacity-40"
            />
            <Image
              src={ActiveImg}
              alt=""
              className="w-full object-cover opacity-40"
            />
            <Image
              src={ActiveImg}
              alt=""
              className="w-full object-cover opacity-40"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-bold text-black">
              Manchester United 21-22 Home Shirt
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <p className="text-3xl md:text-4xl font-bold text-black">
                  €30.00
                </p>
                <p className="text-sm md:text-base text-[#EE503E] line-through">
                  €89.95
                </p>
                <div className="bg-[#23C353] py-1 px-2 text-sm md:text-base text-white font-semibold">
                  Save 67%
                </div>
              </div>

              <div className="flex justify-center items-center border border-[#EAEAEC] py-3 px-3 md:px-[18px] gap-[10px] cursor-pointer">
                <Image src={Heart} alt="" className="w-4 h-4" />
                <p className="hidden md:inline text-xs text-[#393A38]">
                  Add to Favorites
                </p>
              </div>
            </div>
          </div>

          <p className="text-black text-xs md:text-base opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec
            ornare, dui vel facilisis luctus, metus mi ttitor erat sapien
            scelerisque nunc. Pellentesque ornare elit tellus...{" "}
            <span className="font-bold underline ">Read More</span>
          </p>

          <form className="flex flex-col gap-6">
            <div className="grid items-center grid-cols-[80px,auto] md:grid-cols-[120px,auto]">
              <p className="w-full font-semibold text-xs text-black">
                Size<sup className="text-[#EE503E]">*</sup>
              </p>

              <div className="gap-2 grid grid-cols-[auto,93px] md:grid-cols-[auto,130px] ">
                <select className="w-full border-[#EAEAEC] outline-0 border h-10 pl-5 pr-4 rounded-md cursor-pointer text-xs text-black">
                  <option value="" disabled selected>
                    Select a shirt size
                  </option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                </select>

                <div className="w-[93px] md:w-[130px] h-10 flex items-center justify-center text-xs text-black font-semibold border-[#EAEAEC] border bg-[#F5F5F6] cursor-pointer">
                  <span className="hidden md:inline md:mr-[2px]">View {" "} </span>Size Chart
                </div>
              </div>
            </div>

            <div className="grid items-center grid-cols-[80px,auto] md:grid-cols-[120px,auto]">
              <p className="w-full font-semibold text-xs text-black">Name</p>
              <input
                type="text"
                name="Name"
                placeholder="What name would you want in the shirt?"
                className="w-full text-xs text-black h-10 pl-5 rounded-md border-[#EAEAEC] outline-0 border"
              />
            </div>

            <div className="grid items-center grid-cols-[80px,auto] md:grid-cols-[120px,auto]">
              <p className="w-full font-semibold text-xs text-black">
                Number on Shirt
              </p>
              <input
                type="text"
                name="Number"
                placeholder="Enter a number between 0 and 99"
                className="w-full text-xs text-black h-10 pl-5 rounded-md border-[#EAEAEC] outline-0 border"
              />
            </div>

            <div className="grid items-center grid-cols-[80px,auto] md:grid-cols-[120px,auto]">
              <p className="w-full font-semibold text-xs text-black">Patch</p>
              <select className="w-full border-[#EAEAEC] outline-0 border h-10 pl-5 pr-4 rounded-md cursor-pointer text-xs text-black">
                <option value="" disabled selected>
                  Select a patch
                </option>
                <option value="L">Long Sleeve</option>
                <option value="S">Short Sleeve</option>
              </select>
            </div>

            <div className="grid items-center grid-cols-[80px,auto] md:grid-cols-[120px,auto]">
              <p className="w-full font-semibold text-xs text-black">
                Quantity
              </p>
              <input
                type="number"
                name="Number"
                placeholder="1"
                className="w-1/4 text-xs text-black h-10 pl-5 rounded-md border-[#EAEAEC] outline-0 border"
              />
            </div>

            <div className="w-full grid grid-cols-[auto,56px] h-14 cursor-pointer">
              <div className="w-full bg-primary pl-6 py-4 text-base font-semibold text-black">
                Add to Cart
              </div>
              <div className="w-full h-14 flex items-center justify-center bg-black">
                <Image src={Cart} alt="" quality={100} width={20} height={20} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ProductDescription;
