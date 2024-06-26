// pages/cart.js
import React from "react";
import CartPage from "@/components/CartPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const containerStyle = {
    marginLeft: "100px", 
    marginRight: "100px", 
  };

  return (
    <>
      <div>
        <Navbar />
        <div style={containerStyle}>
          <h1>
            <b>Your Cart & Shipping</b> &gt; confirmation
          </h1>
          <CartPage />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
