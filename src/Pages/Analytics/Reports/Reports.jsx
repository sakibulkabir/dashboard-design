import { motion } from "framer-motion";

const reportData = [
  { title: "Total Visitors", value: "82,430", change: "+12%", color: "from-blue-500 to-blue-400" },
  { title: "Total Sales", value: "$68,900", change: "+8%", color: "from-emerald-500 to-emerald-400" },
  { title: "Orders Completed", value: "12,430", change: "+5%", color: "from-purple-500 to-purple-400" },
  { title: "Refund Requests", value: "340", change: "-2%", color: "from-rose-500 to-rose-400" },
];

export default function Reports() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold mb-5">Reports Summary</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {reportData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`rounded-xl p-5 text-white bg-gradient-to-r ${item.color} shadow-lg`}
          >
            <p className="text-sm opacity-90">{item.title}</p>
            <h3 className="text-3xl font-bold mt-1">{item.value}</h3>
            <p className="text-sm mt-2 bg-white/20 w-fit px-2 py-1 rounded-full">
              {item.change}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Report Table with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-8 bg-gray-50 p-5 rounded-xl shadow"
      >
        <h3 className="text-lg font-semibold mb-4">Detailed Reports</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-gray-200 text-gray-700 rounded-lg">
                <th className="p-3">Report</th>
                <th className="p-3">Value</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {[
                { name: "Sales Report", value: "$12,000", status: "Completed", date: "Nov 25" },
                { name: "Customer Analysis", value: "4,500 Users", status: "Pending", date: "Nov 22" },
                { name: "Delivery Summary", value: "3,200 Deliveries", status: "Completed", date: "Nov 20" },
              ].map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-3 font-medium">{row.name}</td>
                  <td className="p-3">{row.value}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        row.status === "Completed" ? "bg-emerald-500" : "bg-yellow-500"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="p-3">{row.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
