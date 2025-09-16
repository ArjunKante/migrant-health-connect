import React from "react";

// Simple bar chart for hospital networks
function HospitalBarChart() {
  const data = [
    { label: "Government", value: 1200000 },
    { label: "Private", value: 1350000 },
    { label: "Specialty", value: 400000 },
    { label: "Community Health Centers", value: 300000 },
  ];
  const maxValue = 1400000, h = 220, w = 330;
  const x = i => 30 + (i * (w/(data.length)));
  const barW = 65;
  return (
    <svg width={w+40} height={h+50}>
      {/* gridlines */}
      {[0,350000,700000,1050000,1400000].map(yval =>
        <g key={yval}>
          <line x1={30} y1={h-(yval*h/maxValue)+20} x2={w+30} y2={h-(yval*h/maxValue)+20} stroke="#eee"/>
          <text x={0} y={h-(yval*h/maxValue)+25} fontSize={10} fill="#b0b0b0">{yval}</text>
        </g>
      )}
      {/* bars */}
      {data.map((d,i) => (
        <rect key={d.label}
          x={x(i)} y={h-(d.value*h/maxValue)+20}
          width={barW} height={(d.value*h/maxValue)}
          fill="#6ee7b7" />
      ))}
      {/* x axis labels */}
      {data.map((d,i) =>
        <text key={d.label} x={x(i)+barW/2} y={h+38} fontSize={12} textAnchor="middle" fill="#888">{d.label}</text>
      )}
    </svg>
  );
}

export default function GovHospitalAnalyticsTab() {
  return (
    <div>
      <div className="bg-white border rounded-xl p-6 mb-6">
        <div className="font-semibold mb-2">Hospital Network Analysis</div>
        <div className="text-gray-500 text-sm mb-3">
          Distribution and performance of healthcare facilities across Kerala
        </div>
        <HospitalBarChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border rounded-xl p-4">
          <div className="font-bold mb-1">Government</div>
          <div className="text-2xl font-semibold">180</div>
          <div className="text-xs text-gray-500">Serving 1,200,000 patients</div>
        </div>
        <div className="bg-white border rounded-xl p-4">
          <div className="font-bold mb-1">Private</div>
          <div className="text-2xl font-semibold">245</div>
          <div className="text-xs text-gray-500">Serving 1,350,000 patients</div>
        </div>
        <div className="bg-white border rounded-xl p-4">
          <div className="font-bold mb-1">Specialty</div>
          <div className="text-2xl font-semibold">125</div>
          <div className="text-xs text-gray-500">Serving 400,000 patients</div>
        </div>
        <div className="bg-white border rounded-xl p-4">
          <div className="font-bold mb-1">Community Health Centers</div>
          <div className="text-2xl font-semibold">95</div>
          <div className="text-xs text-gray-500">Serving 300,000 patients</div>
        </div>
      </div>
      <div className="bg-white border rounded-xl p-4 flex flex-col md:flex-row gap-3 justify-between">
        <div className="flex-1 text-center">
          <div className="text-lg font-semibold text-green-600">0</div>
          <div className="text-xs text-gray-500 mt-1">Security Breaches</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-lg font-semibold text-blue-600">100%</div>
          <div className="text-xs text-gray-500 mt-1">FHIR Compliance</div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-lg font-semibold text-orange-600">456</div>
          <div className="text-xs text-gray-500 mt-1">Emergency Overrides</div>
        </div>
      </div>
    </div>
  );
}