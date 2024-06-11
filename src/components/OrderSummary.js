import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/CartPage.module.css";

const OrderSummary = ({ total, onOrder, onShippingFeeChange }) => {
  const [address, setAddress] = useState("");
  const [cityDestination, setCityDestination] = useState("");
  const [userCity, setUserCity] = useState("");
  const [courier, setCourier] = useState("");
  const [shippingFee, setShippingFee] = useState(0);
  const [cities, setCities] = useState([]);
  const [couriers, setCouriers] = useState([]);

  useEffect(() => {
    const fetchCitiesAndCouriers = async () => {
      try {
        const citiesResponse = await axios.get(
          "https://iai-ongkir-be.vercel.app/api/cities"
        );
        const couriersResponse = await axios.get(
          "https://iai-ongkir-be.vercel.app/api/couriers"
        );
        setCities(citiesResponse.data);
        setCouriers(couriersResponse.data);
      } catch (error) {
        console.error("Error fetching cities or couriers:", error);
      }
    };

    fetchCitiesAndCouriers();
  }, []);

  const handleCalculateShipping = async () => {
    if (!userCity || !cityDestination || !courier) {
      alert("Please select city destination, your city, and courier.");
      return;
    }

    try {
      const response = await axios.post(
        "https://iai-ongkir-be.vercel.app/api/shipping-cost",
        {
          ship_origin: userCity,
          ship_destination: cityDestination,
          weight: 1, // Adjust weight accordingly
          courier: courier,
        }
      );
      const costs = response.data.costs;
      if (costs.length > 0) {
        setShippingFee(costs[0].cost);
        onShippingFeeChange(costs[0].cost); // Update shipping fee in parent component
      } else {
        setShippingFee(0);
        onShippingFeeChange(0);
      }
    } catch (error) {
      console.error("Error calculating shipping cost:", error);
    }
  };

  const handleOrder = () => {
    if (!address || !cityDestination || !userCity || !courier) {
      alert("Please fill in all the fields.");
    } else {
      onOrder();
      // alert("Order placed successfully!");
      // window.location.href = '/confirmation';
    }
  };

  return (
    <div className={styles.orderSummary}>
      <h3>
        <b>Order Summary</b>
      </h3>
      <div className={styles.summaryItem}>
        <label>Shopping Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.summaryItem}>
        <label>City Destination:</label>
        <select
          value={cityDestination}
          onChange={(e) => setCityDestination(e.target.value)}
          className={styles.select}
        >
          <option value="">Select Destination</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.namakota}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.summaryItem}>
        <label>Your City:</label>
        <select
          value={userCity}
          onChange={(e) => setUserCity(e.target.value)}
          className={styles.select}
        >
          <option value="">Select Your City</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.namakota}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.summaryItem}>
        <label>Courier:</label>
        <select
          value={courier}
          onChange={(e) => setCourier(e.target.value)}
          className={styles.select}
        >
          <option value="">Select Courier</option>
          {couriers.map((courier) => (
            <option key={courier.id} value={courier.namakurir}>
              {courier.namakurir.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-green-500 text-white w-[160px]"
        onClick={handleCalculateShipping}
      >
        Calculate Shipping
      </button>
      <div className={styles.summaryItem}>
        <span className="text-primary font-semibold">Shipping Fees:</span>
        <span className="text-primary font-semibold">
          Rp {shippingFee.toLocaleString()}
        </span>
      </div>
      <div className={styles.summaryItem}>
        <span className="text-primary font-semibold">Sub Total:</span>
        <span className="text-primary font-semibold">
          Rp {total.toLocaleString()}
        </span>
      </div>
      <div className={`${styles.summaryItem} ${styles.summaryItemTotal}`}>
        <span className="text-primary font-semibold">
          Total: Rp {(total + shippingFee).toLocaleString()}
        </span>
        <span className="text-primary font-semibold"></span>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          className="bg-primary py-[10px] px-[150px] text-white"
          onClick={handleOrder}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
