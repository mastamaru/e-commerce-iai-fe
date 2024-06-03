/// src/components/CartPage.js
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import styles from "../styles/CartPage.module.css";
import { useRouter } from "next/router";
import axios from "axios";

const CartPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCartAndProductItems = async () => {
      try {
        // Fetch products
        const productsResponse = await axios.get(
          "https://e-commerce-iai.vercel.app/api/product"
        );
        const productsData = productsResponse.data;

        // Fetch cart items
        const cartResponse = await axios.get(
          "https://e-commerce-iai.vercel.app/api/cart/IAI12"
        );
        const cartData = cartResponse.data;

        // Map cart items with product details
        const combinedData = cartData.map((cartItem) => {
          const productDetails = productsData.find(
            (product) => product.name === cartItem.name
          );
          return {
            ...cartItem,
            price: productDetails?.price || 0,
            image: productDetails?.image || "",
          };
        });

        setCartItems(combinedData);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCartAndProductItems();
  }, []);

  const handleQuantityChange = (productName, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item === productName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = async (product) => {
    try {
      await axios.delete("https://e-commerce-iai.vercel.app/api/cart", {
        data: {
          userId: "IAI12",
          name: product.name,
        },
      });
      setCartItems(cartItems.filter((item) => item !== product));
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 44000;

  const handleOrder = async () => {
    const items = cartItems.map((item) => ({
      name: item.name,
      size: item.size,
      quantity: item.quantity,
    }));
    const orderTotal = `Rp ${(total + shipping).toLocaleString()}`;

    try {
      const response = await axios.post(
        "https://iai-order-be.vercel.app/api/orders",
        {
          items,
          total: orderTotal,
          status: "Waiting Payment",
          userId: "IAI12",
        }
      );
      alert("Order placed successfully!");
      console.log("Order placed:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Please try again.");
    }
  };
  const handleBack = () => {
    router.push("/home");
  };
  return (
    <div className={styles.cartPage}>
      <div className={styles.cartItems}>
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem
                key={item}
                product={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </tbody>
        </table>
        <br></br>
        <button
          className="bg-primary py-[10px] px-[17px] text-white"
          onClick={handleBack}
        >
          <b>&lt;</b> Back to Shopping
        </button>
      </div>
      <OrderSummary total={total} shipping={shipping} onOrder={handleOrder} />
    </div>
  );
};

export default CartPage;
