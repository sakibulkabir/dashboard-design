import { useState } from "react";

export default function NewCustomer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Customer:", form);
    alert("Customer Added Successfully!");
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Customer
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-gray-600 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter customer name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-600 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="+880 01xxxxxxxxx"
              value={form.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-gray-600 font-medium">Address</label>
            <textarea
              name="address"
              placeholder="Customer address"
              value={form.address}
              onChange={handleChange}
              rows="3"
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Status */}
          <div>
            <label className="text-gray-600 font-medium">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option>Active</option>
              <option>Pending</option>
              <option>Blocked</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="reset"
              className="px-5 py-2 rounded-xl border border-gray-400 hover:bg-gray-100 transition"
              onClick={() =>
                setForm({ name: "", email: "", phone: "", address: "", status: "Active" })
              }
            >
              Reset
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
