import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch 8 products to show on home
    fetch("https://dummyjson.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data.products || []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <section className="rounded-xl bg-gradient-to-r from-pink-50 to-yellow-50 p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-pink-600">Shop the Trendy Styles</h1>
            <p className="mt-3 text-gray-700 max-w-xl">
              Discover hundreds of products across categories — clothing, electronics, home decor and more.
            </p>
            <div className="mt-6">
              <Link to="/products" className="bg-pink-500 text-white px-5 py-3 rounded-lg shadow hover:bg-pink-600">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3">
            {/* small product mockups */}
            {loading ? (
              <div className="col-span-2 text-gray-500">Loading featured...</div>
            ) : (
              featured.map((p) => (
                <div key={p.id} className="bg-white rounded-lg p-2 shadow-sm flex items-center gap-2">
                  <img src=p.thumbnail alt={p.title} className="w-20 h-20 object-contain" />
                  <div>
                    <div className="text-sm font-semibold">{p.title}</div>
                    <div className="text-xs text-gray-500">₹{Math.rounded(p.price - p.price * (p.discountPercentage/100)).toLocaleString()}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
