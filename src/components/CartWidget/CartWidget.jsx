import React from 'react';
import "./CartWidget.css"
import cart from "./assets/cart.svg"
export const CartWidget = () => {
    return (
        <div className="cart">
            <img src={cart} alt="cart-widget" />
            0
        </div>
    );
}
