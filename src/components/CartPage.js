/// src/components/CartPage.js
import React, { useState } from 'react';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'WGAMING Impossible Black Tee', size: 'L', price: 745000, quantity: 2, image: '/black-tee.png' },
        { id: 2, name: 'PRX Dino Tracksuit Pants', size: 'M', price: 745000, quantity: 2, image: '/tracksuit-pants.png' }
    ]);

    const handleQuantityChange = (product, newQuantity) => {
        setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: newQuantity } : item));
    };

    const handleRemove = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 44000;

    const handleOrder = () => {
        alert('Order placed successfully!');
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
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                product={item}
                                onQuantityChange={handleQuantityChange}
                                onRemove={handleRemove}
                            />
                        ))}
                    </tbody>
                </table>
                <br></br>
                <button className="bg-primary py-[10px] px-[17px] text-white">
                    <b>&lt;</b> Back to Shopping
                </button>
            </div>
            <OrderSummary total={total} shipping={shipping} onOrder={handleOrder} />
        </div>
    );
};

export default CartPage;
