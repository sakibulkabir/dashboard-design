import { useState } from "react";

export default function Customers() {
  const [search, setSearch] = useState("");

  const customers = [
    { name: "Sakibul Kabir Risat", email: "risat@gmail.com", phone: "01976237653", status: "Active", join: "Nov 20, 2024" },
    { name: "Momin", email: "momin@gmail.com", phone: "+01976237653", status: "Pending", join: "Nov 22, 2024" },
    { name: "Hani", email: "hani@gmail.com", phone: "+01976237653", status: "Blocked", join: "Nov 19, 2024" },
    { name: "Roni", email: "roni@gmail.com", phone: "+01976237653", status: "Active", join: "Nov 18, 2024" },
  ];

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">Customers</h2>

        <input
          type="text"
          placeholder="Search customers..."
          className="border p-2 rounded-lg w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="mt-6 bg-white shadow rounded-xl overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm">
              <th className="p-3">Customer</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Status</th>
              <th className="p-3">Joined</th>
            </tr>
          </thead>

          <tbody>
            {customers
              .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
              .map((c, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-3 font-medium">{c.name}</td>
                  <td className="p-3">{c.email}</td>
                  <td className="p-3">{c.phone}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm
                        ${
                          c.status === "Active"
                            ? "bg-emerald-500"
                            : c.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-rose-500"
                        }
                      `}
                    >
                      {c.status}
                    </span>
                  </td>

                  <td className="p-3">{c.join}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
