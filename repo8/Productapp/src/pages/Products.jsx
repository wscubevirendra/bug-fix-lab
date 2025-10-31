import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "";
  const [search, setSearch] = useState(queryParam);
  const [category, setCategory] = useState(categoryParam);
  const [sort, setSort] = useState("popular");

  useEffect(() => {
    // fetch products
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));

    // fetch categories
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data || []))
      .catch((err) => console.error(err));
  }, []);

  // keep search & category in URL
  useEffect(() => {
    const params = {};
    if (search) params.q = search;
    if (category) params.category = category;
    setSearchParams(params);
  }, [search, category, setSearchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (search) {
      const s = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.brand.toLowerCase().includes(s) ||
          p.category.toLowerCase().includes(s)
      );
    }
    if (category) {
      list = list.filter((p) => p.category === category);
    }
    if (sort === "low") list.sort((a, b) => (a.price - a.price * a.discountPercentage/100) - (b.price - b.price * b.discountPercentage/100));
    if (sort === "high") list.sort((a, b) => (b.price - b.price * b.discountPercentage/100) - (a.price - a.price * a.discountPercentage/100));
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [products, search, category, sort]);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">All Products</h1>

        <div className="flex gap-3 items-center w-full md:w-auto">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, brand or category..."
            className="flex-1 md:w-80 px-3 py-2 rounded-lg border focus:outline-none"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-3 py-2 rounded-lg border">
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 rounded-lg border">
            <option value="popular">Sort: Popular</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {loading ? (
        <Loader text="Fetching products..." />
      ) : (
        <>
          <div className="text-sm text-gray-500 mb-4">Showing {filtered.length} results</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
