import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total cost of all items in the cart
    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => {
            const cost = parseFloat(item.cost.replace('$', ''));
            return total + cost * item.quantity;
        }, 0).toFixed(2);
    };

    // Calculate total number of items in the cart
    const calculateTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Calculate cost for a specific item (unit price × quantity)
    const calculateTotalCost = (item) => {
        const cost = parseFloat(item.cost.replace('$', ''));
        return (cost * item.quantity).toFixed(2);
    };

    // Handle Continue Shopping button click
    const handleContinueShopping = (e) => {
        e.preventDefault();
        if (onContinueShopping) {
            onContinueShopping(e);
        }
    };

    // Handle Checkout button click
    const handleCheckout = () => {
        alert('Checkout functionality coming soon!');
    };

    // Increment item quantity by 1
    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    // Decrement item quantity by 1; remove if quantity reaches 0
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    // Remove item entirely from the cart
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Shopping Cart</h1>
            <p className="cart-subtitle">Review your selected plants before checkout</p>

            {/* Empty Cart State */}
            {cart.length === 0 ? (
                <div className="cart-empty">
                    <div className="cart-empty-icon">🛒</div>
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added any plants yet.</p>
                    <button className="btn-browse" onClick={handleContinueShopping}>
                        Browse Plants
                    </button>
                </div>
            ) : (
                <div className="cart-content">
                    {/* Cart Items */}
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-img"
                                />
                                <div className="cart-item-info">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                    <p className="cart-item-unit-price">{item.cost} each</p>
                                </div>
                                <div className="cart-item-controls">
                                    <button
                                        className="btn-qty"
                                        onClick={() => handleDecrement(item)}
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>
                                    <span className="cart-item-qty">{item.quantity}</span>
                                    <button
                                        className="btn-qty"
                                        onClick={() => handleIncrement(item)}
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="cart-item-subtotal">
                                    ${calculateTotalCost(item)}
                                </p>
                                <button
                                    className="btn-delete"
                                    onClick={() => handleRemove(item)}
                                    title="Remove item"
                                    aria-label={`Remove ${item.name} from cart`}
                                >
                                    🗑️
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="cart-summary">
                        <div className="cart-summary-row">
                            <span>Total Items</span>
                            <span>{calculateTotalItems()}</span>
                        </div>
                        <div className="cart-summary-row total">
                            <span>Total Amount</span>
                            <span>${calculateTotalAmount()}</span>
                        </div>
                    </div>

                    {/* Cart Action Buttons */}
                    <div className="cart-actions">
                        <button
                            className="btn-continue"
                            onClick={handleContinueShopping}
                        >
                            Continue Shopping
                        </button>
                        <button
                            className="btn-checkout"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartItem;
