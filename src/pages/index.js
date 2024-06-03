import Image from "next/image";
import InputText from "../components/InputText";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { MdAddShoppingCart } from "react-icons/md";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-20">
        <h1 className="text-4xl font-bold text-center font-sarala mb-4 ">
          DON&apos;T FORGET TO BUY PAPER REX BUNDLE!
        </h1>
        <div className="flex">
          <Image
            src="/pererekbundle.jpeg"
            alt="Home"
            width={800}
            height={800}
            className="mx-auto"
          />
        </div>
      </div>
    </>
  );
}
