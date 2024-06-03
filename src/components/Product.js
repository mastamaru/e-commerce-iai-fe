import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";

const available = true;
const ready_s = available ? "/size-s-r.png" : "/size-s.png";
const ready_m = available ? "/size-m-r.png" : "/size-m-s.png";
const ready_l = available ? "/size-l-r.png" : "/size-l-s.png";

export default function Product({
  name = "WGAMING Creativity Black Tee",
  price = "Rp 745.000",
  image = "/pererek-ts.png",
}) {
  return (
    <div className="flex flex-col items-center h-[288px]">
      <img src={image} alt="product" />
      <div className="flex flex-col gap-1 text-primary text-[16.67px] leading-[24px] text-center font-semibold">
        <h1>{name}</h1>
        <p>{price}</p>
      </div>
      <div className="flex gap-3.5  w-[180px] items-center align-middle justify-center">
        <img src="/size-s.png" about="size-s" className="text-primary" />
        <img src="/size-m-r.png" about="size-s" />
        <img src="/size-l-r.png" about="size-s" />
        <p className="text-primary font-semibold text-[16.67px] text-center">
          |
        </p>
        <MdAddShoppingCart className="z-999 text-2xl" />
      </div>
    </div>
  );
}
