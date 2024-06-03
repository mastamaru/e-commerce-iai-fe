// src/components/CartItem.js
import React from 'react';
import styles from '../styles/CartPage.module.css';

const CartItem = ({ product, onQuantityChange, onRemove }) => {
    return (
        <tr className="cart-item">
            <td>
                <img src={product.image} alt={product.name} width="50" />
            </td>
            <td className="item-details">
                <h4>{product.name}</h4>
                <p>Size: {product.size}</p>
            </td>
            <td>Rp {product.price.toLocaleString()}</td>
            <td className="quantity">
                <button className={styles.button} onClick={() => onQuantityChange(product, product.quantity - 1)}>-</button>
                <span>{product.quantity}</span>
                <button className={styles.button} onClick={() => onQuantityChange(product, product.quantity + 1)}>+</button>
            </td>
            <td>Rp {(product.price * product.quantity).toLocaleString()}</td>
            <td>
                <button className={styles.button} onClick={() => onRemove(product)}>Remove</button>
            </td>
        </tr>
    );
};

export default CartItem;
