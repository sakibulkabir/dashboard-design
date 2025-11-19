import { useState } from "react";

export default function Inventory() {
  const [search, setSearch] = useState("");

  const inventoryData = [
    { name: "Bluetooth Headphone", category: "Electronics", stock: 120, price: "$49.99" },
    { name: "Smart Watch", category: "Wearable", stock: 10, price: "$89.99" },
    { name: "Gaming Keyboard", category: "Accessories", stock: 0, price: "$39.99" },
    { name: "DSLR Camera", category: "Electronics", stock: 25, price: "$499.99" },
  ];

  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock < 20) return "Low Stock";
    return "In Stock";
  };

  const getStockColor = (stock) => {
    if (stock === 0) return "bg-rose-600";
    if (stock < 20) return "bg-yellow-500";
    return "bg-emerald-600";
  };

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h2 className="text-2xl font-bold mb-3 sm:mb-0">Inventory</h2>
        <input
          type="text"
          placeholder="Search products..."
          className="border px-3 py-2 rounded-lg w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white shadow rounded-xl overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm">
              <th className="p-3">Product</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData
              .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
              .map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">{item.stock}</td>
                  <td className="p-3">{item.price}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-white text-sm ${getStockColor(item.stock)}`}>
                      {getStockStatus(item.stock)}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
