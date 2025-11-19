import { useState } from "react";

export default function NewProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "In Stock",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product:", form);
    alert("Product added successfully!");
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Product Name */}
          <div>
            <label className="text-gray-600 font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-gray-600 font-medium">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              value={form.category}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-gray-600 font-medium">Price</label>
            <input
              type="number"
              name="price"
              placeholder="$0.00"
              value={form.price}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Stock Status */}
          <div>
            <label className="text-gray-600 font-medium">Stock Status</label>
            <select
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option>In Stock</option>
              <option>Limited</option>
              <option>Out of Stock</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-600 font-medium">Description</label>
            <textarea
              name="description"
              placeholder="Enter product description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-gray-600 font-medium">Product Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
              className="mt-1 w-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="reset"
              className="px-5 py-2 rounded-xl border border-gray-400 hover:bg-gray-100 transition"
              onClick={() =>
                setForm({
                  name: "",
                  category: "",
                  price: "",
                  stock: "In Stock",
                  description: "",
                  image: null,
                })
              }
            >
              Reset
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
