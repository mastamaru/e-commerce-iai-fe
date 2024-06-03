import Image from "next/image";
import InputText from "../components/InputText";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { MdAddShoppingCart } from "react-icons/md";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-center font-sarala ">RUUUDDYYYYYYYYY!</h1>
        <div className="flex">
          <Image
            src="/home2.jpg"
            alt="Home"
            width={800}
            height={800}
            className="mx-auto"
          />
          <Image
            src="/home.png"
            alt="Home"
            width={800}
            height={800}
            className="mx-auto"
          />
        </div>
        <InputText label="Email" type="email" />
        <Navbar />
        <Product />
      </div>
      <Footer />
    </>
  );
}
