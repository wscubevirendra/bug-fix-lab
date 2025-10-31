import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const price = product.price;
  const discount = product.discountPercentage || 0;
  const finalPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <Link to={`/product/${product.id}`}>
        <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            className="object-contain h-full w-full p-4"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{product.brand} • {product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">₹ {finalPrice.toLocaleString()}</div>
            {discount > 0 && (
              <div className="text-xs text-gray-500">
                <span className="line-through mr-2">₹ {price.toLocaleString()}</span>
                <span className="text-green-600">-{discount}%</span>
              </div>
            )}
          </div>
          <button
            onClick={() => addToCart({ id: product.id, title: product.title, price: finalPrice, thumbnail: product.thumbnail })}
            className="bg-pink-500 text-white px-3 py-1 rounded-md text-sm hover:bg-pink-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
