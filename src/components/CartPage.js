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
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    const fetchCartAndProductItems = async () => {
      try {
        const productsResponse = await axios.get(
          "https://e-commerce-iai.vercel.app/api/product"
        );
        const productsData = productsResponse.data;

        const cartResponse = await axios.get(
          "https://e-commerce-iai.vercel.app/api/cart/IAI12"
        );
        const cartData = cartResponse.data;

        const combinedData = cartData.map((cartItem) => {
          const productDetails = productsData.find(
            (product) => product.name === cartItem.name
          );
          if (!productDetails) {
            console.error(`Product not found for item: ${cartItem.name}`);
          }
          return {
            ...cartItem,
            price: productDetails?.price || 0,
            image: productDetails?.image || "",
            productId: productDetails?._id || "", // Ensure productId is included
          };
        });

        setCartItems(combinedData);
        setProducts(productsData);
        console.log(combinedData); // Debugging log
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
  const handleShippingFeeChange = (fee) => {
    setShipping(fee);
  };
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const clearCart = async () => {
    try {
      for (const item of cartItems) {
        await axios.delete("https://e-commerce-iai.vercel.app/api/cart", {
          data: { userId: "IAI12", name: item.name },
        });
      }
      setCartItems([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const handleOrder = async () => {
    const items = cartItems.map((item) => ({
      name: item.name,
      size: item.size,
      quantity: item.quantity,
    }));
    const orderTotal = `Rp ${(total + shipping).toLocaleString()}`;

    try {
      // Place the order
      const response = await axios.post(
        "https://iai-order-be.vercel.app/api/orders",
        {
          items,
          total: orderTotal,
          status: "Waiting Payment",
          userId: "IAI12",
        }
      );
      console.log("Order placed:", response.data);

      // Update stock for each product
      for (const item of items) {
        // Fetch current product details
        const productResponse = await axios.get(
          `https://e-commerce-iai.vercel.app/api/product/${encodeURIComponent(
            item.name
          )}`
        );
        const product = productResponse.data;

        // Calculate new stock
        const updatedSize = { ...product.size };
        updatedSize[item.size] = updatedSize[item.size] - item.quantity;

        // Update product with new stock
        await axios.post(
          `https://e-commerce-iai.vercel.app/api/product/edit/${encodeURIComponent(
            item.name
          )}`,
          {
            size: updatedSize,
          }
        );
      }

      alert("Order placed successfully!");
      await clearCart();
      router.push("/confirmation");
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
      <OrderSummary
        total={total}
        onShippingFeeChange={handleShippingFeeChange}
        onOrder={handleOrder}
      />
    </div>
  );
};

export default CartPage;
