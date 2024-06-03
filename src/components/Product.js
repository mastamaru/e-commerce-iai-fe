import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";

export default function Product({
  name = "WGAMING Creativity Black Tee",
  price = "Rp 745.000",
  image = "/pererek-ts.png",
  addCart = () => {},
}) {
  const [selectedSize, setSelectedSize] = useState({
    s: false,
    m: false,
    l: false,
  });

  const handleSizeClick = (size) => {
    setSelectedSize((prev) => ({
      ...prev,
      [size]: !prev[size],
    }));
  };

  const getSelectedSize = () => {
    if (selectedSize.s) return "S";
    if (selectedSize.m) return "M";
    if (selectedSize.l) return "L";
    return null;
  };

  const handleAddToCart = () => {
    const size = getSelectedSize();
    if (!size) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addCart(name, size);
    // Reset selected size
    setSelectedSize({
      s: false,
      m: false,
      l: false,
    });
  };

  const ready_s = selectedSize.s ? "/size-s-r.png" : "/size-s.png";
  const ready_m = selectedSize.m ? "/size-m-r.png" : "/size-m-s.png";
  const ready_l = selectedSize.l ? "/size-l-r.png" : "/size-l-s.png";

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="flex flex-col items-center h-[288px]">
      <img src={image} alt="product" />
      <div className="flex flex-col gap-1 text-primary text-[16.7px] leading-[24px] text-center font-semibold">
        <h1>{name}</h1>
        <p>Rp {formatPrice(price)}</p>
      </div>
      <div className="flex gap-3.5 w-[180px] items-center align-middle justify-center">
        <img
          src={ready_s}
          alt="size-s"
          className="cursor-pointer"
          onClick={() => handleSizeClick("s")}
        />
        <img
          src={ready_m}
          alt="size-m"
          className="cursor-pointer"
          onClick={() => handleSizeClick("m")}
        />
        <img
          src={ready_l}
          alt="size-l"
          className="cursor-pointer"
          onClick={() => handleSizeClick("l")}
        />
        <p className="text-primary font-semibold text-[16.67px] text-center">
          |
        </p>
        <MdAddShoppingCart
          className="z-999 text-2xl cursor-pointer"
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
}
