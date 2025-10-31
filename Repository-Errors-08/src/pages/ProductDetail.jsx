import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader text="Loading product..." />;
  if (!product) return <div>Product not found</div>;

  const price = product.price;
  const discount = product.discountPercentage || 0;
  const finalPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img src={product.thumbnail} alt={product.title} className="w-full h-96 object-contain" />
          <div className="mt-3 grid grid-cols-4 gap-2">
            {product.images?.slice(0, 4).map((img, i) => (
              <img key={i} src={img} alt={`${product.title}-${i}`} className="h-20 w-full object-cover rounded" />
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{product.brand} • {product.category}</p>
          <div className="mt-4">
            <div className="text-3xl font-extrabold">₹ {finalPrice.toLocaleString()}</div>
            {discount > 0 && <div className="text-sm text-gray-500"><span className="line-through mr-2">₹ {price}</span><span className="text-green-600">-{discount}%</span></div>}
          </div>

          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border rounded">
              <button onClick={() => setQty(q => Math.max(1, q-1))} className="px-3 py-2">-</button>
              <div className="px-4">{qty}</div>
              <button onClick={() => setQty(q => q+1)} className="px-3 py-2">+</button>
            </div>
            <button
              onClick={() => addToCart({ id: product.id, title: product.title, price: finalPrice, thumbnail: product.thumbnail }, qty)}
              className="bg-pink-500 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-600"
            >
              Add to Cart
            </button>
            <Link to="/cart" className="px-4 py-2 border rounded">Go to Cart</Link>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <div>Stock: <span className="font-semibold">{product.stock}</span></div>
            <div>Rating: <span className="font-semibold">{product.rating}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
