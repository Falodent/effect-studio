import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import ProductDescription from "@/components/ProductDescription";
import Image from "next/image";
import Badge from "@/assets/icons/svg/reward.svg";

function Product() {
  return (
    <div className="w-full">
      <Topbar />
      <Navbar active="opacity-50 cursor-pointer"/>
      <ProductDescription />

      <div className="mt-7 h-14 mb-10 md:mb-20">
        <Image src={Badge} alt="" />
      </div>

      <Footer />
    </div>
  );
}
export default Product;
