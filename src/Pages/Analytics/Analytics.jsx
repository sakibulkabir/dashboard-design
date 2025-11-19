import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 1500 },
  { month: "Feb", value: 2200 },
  { month: "Mar", value: 1700 },
  { month: "Apr", value: 5200 },
  { month: "May", value: 4700 },
  { month: "Jun", value: 6300 },
  { month: "Jul", value: 4100 },
  { month: "Aug", value: 6200 },
  { month: "Sep", value: 3900 },
  { month: "Oct", value: 5200 },
  { month: "Nov", value: 3100 },
  { month: "Dec", value: 4300 },
];

export default function Analytics() {
  return (
    <div className="bg-white shadow rounded-xl p-6 w-full">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5">
        <h2 className="text-xl font-semibold">Analytics Overview</h2>

        <select className="mt-3 sm:mt-0 border p-2 rounded-lg text-sm">
          <option>Last 12 Months</option>
          <option>Last 6 Months</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      <div className="w-full h-[300px] sm:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              fill="url(#colorValue)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
