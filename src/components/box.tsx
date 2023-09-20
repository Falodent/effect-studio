import Image, { StaticImageData } from "next/image";

type BoxProps = {
  image: StaticImageData;
  text: string;
  sub: string;
};

function Box({ image, text, sub }: BoxProps) {
  return (
    <div className="bg-[#FEFAE1] h-auto md:h-40 pb-4 md:pb-8 flex flex-col gap-3 w-full">
      <Image src={image} alt="" quality={100} />
      <div className="pl-4 lg:pl-8">
        <p className="text-base font-bold leading-6 text-black">{text}</p>
        <p className="text-xs font-normal text-black">{sub}</p>
      </div>
    </div>
  );
}
export default Box;
