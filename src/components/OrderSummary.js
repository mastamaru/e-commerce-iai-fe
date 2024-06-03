// src/components/OrderSummary.js
import React, { useState } from 'react';
import styles from '../styles/CartPage.module.css';

const OrderSummary = ({ total, shipping, onOrder }) => {
    const [address, setAddress] = useState('');
    const [cityDestination, setCityDestination] = useState('');
    const [userCity, setUserCity] = useState('');
    const [courier, setCourier] = useState('');

    const handleOrder = () => {
        if (!address || !cityDestination || !userCity || !courier) {
            alert('Please fill in all the fields.');
        } else {
            onOrder();
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
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Surabaya">Surabaya</option>
                    {/* Tambahkan lebih banyak opsi sesuai kebutuhan */}
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
                    <option value="Tangerang">Tangerang</option>
                    <option value="Depok">Depok</option>
                    <option value="Bekasi">Bekasi</option>
                    {/* Tambahkan lebih banyak opsi sesuai kebutuhan */}
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
                    <option value="JNE">JNE</option>
                    <option value="TIKI">TIKI</option>
                    <option value="POS Indonesia">POS Indonesia</option>
                    {/* Tambahkan lebih banyak opsi sesuai kebutuhan */}
                </select>
            </div>
            <div className={styles.summaryItem}>
                <span>Shipping Fees:</span>
                <span>Rp {shipping.toLocaleString()}</span>
            </div>
            <div className={styles.summaryItem}>
                <span>Sub Total:</span>
                <span>Rp {total.toLocaleString()}</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.summaryItemTotal}`}>
                <span>Total:</span>
                <span>Rp {(total + shipping).toLocaleString()}</span>
            </div>
            <button className="bg-primary py-[10px] px-[150px] text-white" onClick={handleOrder}>Order Now</button>
        </div>
    );
};

export default OrderSummary;
