import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty, totalAmount, clearCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/products" className="bg-pink-500 text-white px-5 py-2 rounded">
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-contain rounded" />
            <div className="flex-1">
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-500">₹ {item.price.toLocaleString()}</div>
              <div className="mt-2 flex items-center gap-2">
                <button className="px-3 py-1 border rounded" onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                <div className="px-3">{item.qty}</div>
                <button className="px-3 py-1 border rounded" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">₹ {(item.price * item.qty).toLocaleString()}</div>
              <button className="text-sm text-red-600 mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={clearCart}>Clear Cart</button>
        <div className="text-right">
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-2xl font-bold">₹ {totalAmount.toLocaleString()}</div>
          <button className="mt-3 bg-green-600 text-white px-5 py-2 rounded">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
