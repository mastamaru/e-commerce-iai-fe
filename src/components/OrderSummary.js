// src/components/OrderSummary.js
import React from 'react';
import styles from '../styles/CartPage.module.css';

const OrderSummary = ({ total, shipping, onOrder }) => {
    return (
        <div className={styles.orderSummary}>
            <h3>Order Summary</h3>
            <div className={styles.summaryItem}>
                <span>Sub Total:</span>
                <span>Rp {total.toLocaleString()}</span>
            </div>
            <div className={styles.summaryItem}>
                <span>Shipping:</span>
                <span>Rp {shipping.toLocaleString()}</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.summaryItemTotal}`}>
                <span>Total:</span>
                <span>Rp {(total + shipping).toLocaleString()}</span>
            </div>
            <button className={styles.button} onClick={onOrder}>Order Now</button>
        </div>
    );
};

export default OrderSummary;
