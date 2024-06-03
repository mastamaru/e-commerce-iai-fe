import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Image from "next/image";

export default function HomeUser() {
  return (
    <>
      <Navbar />
      <section>
        <div className="bg-[url('/herouser.png')] w-full h-[320px] bg-cover" />
        <div className="flex flex-col items-center w-full min-h-[1400px] py-[120px] bg-gray-50 justify center">
          <div className="container grid grid-cols-4 grid-rows-3 gap-x-14 gap-y-[90px] h-full items-center">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
