import React from "react";

// Simple pie chart using SVG for demo
function DemoPieChart() {
  // Each arc is: [color, percent, label]
  const arcs = [
    ["#a78bfa", 21, "0-18"],
    ["#6ee7b7", 26, "19-35"],
    ["#fde68a", 24, "36-50"],
    ["#fbbf24", 17, "51-65"],
    ["#d8b4fe", 12, "65+"],
  ];
  let cumulative = 0;
  const total = arcs.reduce((sum, a) => sum + a[1], 0);

  return (
    <svg width="180" height="180" viewBox="0 0 36 36" className="block mx-auto my-4">
      {arcs.map(([color, percent], i) => {
        const start = (cumulative / total) * 100;
        cumulative += percent as number;
        const end = (cumulative / total) * 100;
        const large = percent as number > 18 ? 1 : 0;
        const a = (start / 100) * 2 * Math.PI;
        const b = (end / 100) * 2 * Math.PI;
        const x1 = 18 + 16 * Math.sin(a);
        const y1 = 18 - 16 * Math.cos(a);
        const x2 = 18 + 16 * Math.sin(b);
        const y2 = 18 - 16 * Math.cos(b);
        return (
          <path
            key={i}
            d={`
              M 18 18
              L ${x1} ${y1}
              A 16 16 0 ${large} 1 ${x2} ${y2}
              Z
            `}
            fill={color as string}
            stroke="#fff"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}

export default function GovDemographicsTab() {
  // For bars
  const stats = [
    { label: "0-18 years", value: 580000, color: "#a78bfa" },
    { label: "19-35 years", value: 720000, color: "#6ee7b7" },
    { label: "36-50 years", value: 650000, color: "#fde68a" },
    { label: "51-65 years", value: 480000, color: "#fbbf24" },
    { label: "65+ years", value: 320000, color: "#d8b4fe" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Pie Chart */}
      <div className="bg-white border rounded-xl p-6">
        <div className="font-semibold mb-2">Age Group Distribution</div>
        <div className="text-gray-500 text-sm mb-2">
          Patient distribution across different age groups in Kerala
        </div>
        <DemoPieChart />
        <div className="flex justify-around mt-2 text-xs">
          <span className="text-purple-400">0-18: 21%</span>
          <span className="text-green-400">19-35: 26%</span>
          <span className="text-yellow-400">36-50: 24%</span>
          <span className="text-orange-400">51-65: 17%</span>
          <span className="text-purple-300">65+: 12%</span>
        </div>
      </div>
      {/* Age Group Stats */}
      <div className="bg-white border rounded-xl p-6">
        <div className="font-semibold mb-2">Age Group Statistics</div>
        <div className="text-gray-500 text-sm mb-3">
          Detailed breakdown of patient demographics
        </div>
        <div className="flex flex-col gap-2">
          {stats.map(s => (
            <div key={s.label}>
              <div className="flex justify-between items-center text-sm mb-1">
                <span>{s.label}</span>
                <span className="text-gray-800 font-semibold">{s.value.toLocaleString()}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-200 mb-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${(s.value / 720000) * 100}%`,
                    backgroundColor: s.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}