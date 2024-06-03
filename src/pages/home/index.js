import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeUser() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-commerce-iai.vercel.app/api/product"
        );
        setProductList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProducts();
  }, []);

  const addCart = async (name, size) => {
    try {
      const response = await axios.post(
        "https://e-commerce-iai.vercel.app/api/cart",
        {
          userId: "IAI12",
          name: name,
          size: size,
        }
      );
      toast.success("Product added to cart!");
      console.log("Product added to cart:", response.data);
    } catch (error) {
      toast.error("Error adding product to cart!");
      console.error("Error adding product to cart:", error);
    }
  };
  return (
    <>
      <Navbar />
      <section>
        <div className="bg-[url('/herouser.png')] w-full h-[320px] bg-cover" />
        <div className="flex flex-col items-center w-full min-h-[1400px] py-[120px] bg-gray-50 justify center">
          <div className="container grid grid-cols-4 grid-rows-3 gap-x-14 gap-y-[90px] h-full items-center">
            {productList.map((product, index) => (
              <Product
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
                addCart={addCart}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
}
