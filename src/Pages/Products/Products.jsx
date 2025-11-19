import { useState } from "react";

export default function Products() {
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Bluetooth Headphone",
      category: "Electronics",
      price: "$49.99",
      stock: "In Stock",
      image: "https://www.startech.com.bd/image/cache/catalog/headphone/hoco/w35-air/w35-air-02-228x228.webp",
    },
    {
      name: "Smart Watch",
      category: "Wearable",
      price: "$89.99",
      stock: "Limited",
      image: "https://images.samsung.com/is/image/samsung/assets/bd/f2507/pcd/watches/PCD_Whats-new_Galaxy-Watch8_264x264_mo.png?$264_264_PNG$",
    },
    {
      name: "Gaming Keyboard",
      category: "Accessories",
      price: "$39.99",
      stock: "Out of Stock",
      image: "https://sm.pcmag.com/pcmag_au/guide/t/the-best-g/the-best-gaming-keyboards-for-2025_7bc6.jpg",
    },
    {
      name: "DSLR Camera",
      category: "Electronics",
      price: "$499.99",
      stock: "In Stock",
      image: "https://i5.walmartimages.com/asr/f7837d96-46a9-4a93-b2ae-7aae9d4a34b7.ee7886a1edadebb5617039a832aef144.jpeg",
    },
  ];

  return (
    <div className="p-6">

      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">Products</h2>

        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded-lg w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Cards Grid */}
      <div className="grid mt-6 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products
          .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />
              </div>

              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-gray-500 text-sm">{p.category}</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold">{p.price}</p>

                <span
                  className={`px-3 py-1 text-sm rounded-full text-white ${
                    p.stock === "In Stock"
                      ? "bg-emerald-600"
                      : p.stock === "Limited"
                      ? "bg-yellow-500"
                      : "bg-rose-600"
                  }`}
                >
                  {p.stock}
                </span>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
}
