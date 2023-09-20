import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Top from "@/components/top";
import ProductDescription from "@/components/ProductDescription";
import Image from "next/image";
import Badge from "@/assets/icons/svg/reward.svg";

function Product() {
  return (
    <div className="w-full">
      <Top />
      <Nav />
      <ProductDescription />

      <div className="mt-7 h-14 mb-10 md:mb-20">
        <Image src={Badge} alt="" />
      </div>

      <Footer />
    </div>
  );
}
export default Product;
