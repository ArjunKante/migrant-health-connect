import React, { useState } from "react";
import { Shield, User, Hospital, BarChart2 } from "lucide-react";

// Demo bar chart component (replace with real chart lib in production)
function DemoBarChart() {
  const data = [
    { district: "Thiruvananthapuram", value: 425000 },
    { district: "Malappuram", value: 410000 },
    { district: "Kochi", value: 380000 },
    { district: "Kozhikode", value: 320000 },
    { district: "Thrissur", value: 290000 },
    { district: "Kasargod", value: 200000 },
    { district: "Palakkad", value: 210000 },
    { district: "Kannur", value: 250000 },
    { district: "Alappuzha", value: 220000 },
    { district: "Kottayam", value: 180000 },
    { district: "Pathanamthitta", value: 140000 },
    { district: "Idukki", value: 120000 },
    { district: "Wayanad", value: 100000 },
  ];
  return (
    <div className="w-full h-64 flex items-end gap-3 px-4">
      {data.map(d => (
        <div key={d.district} className="flex flex-col items-center flex-1">
          <div
            className="bg-violet-300 rounded-t"
            style={{
              width: "22px",
              height: `${(d.value / 450000) * 160}px`,
              transition: "height 0.5s",
            }}
            title={d.value.toLocaleString()}
          />
          <span className="text-[10px] mt-1 text-gray-700 rotate-[-30deg]">{d.district}</span>
        </div>
      ))}
    </div>
  );
}

export function GovernmentDashboard({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState("district");

  return (
    <div>
      <header className="flex items-center gap-4 mb-6">
        <span className="bg-gray-100 rounded-full p-3">
          <Shield className="w-8 h-8 text-black" />
        </span>
        <div>
          <h2 className="text-lg font-semibold">
            Kerala Health Analytics Dashboard
          </h2>
          <p className="text-gray-500 text-sm">
            State-wide health information analytics and insights
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard icon={<User />} label="Total Patients" value="2,750,000" change="+2.4% from last month" />
        <StatCard icon={<Hospital />} label="Connected Hospitals" value="645" extra="Across all 14 districts" />
        <StatCard icon={<BarChart2 />} label="Health Records" value="15,600,000" extra="FHIR R4 compliant" />
        <StatCard icon={<Shield />} label="System Health" value="99.97%" extra="Uptime last 30 days" />
      </div>
      <div className="flex mb-6 bg-gray-100 rounded-lg overflow-hidden">
        {["district", "demographics", "disease", "trends", "hospital"].map(tab => (
          <button
            key={tab}
            className={`flex-1 px-4 py-2 font-medium ${
              activeTab === tab ? "bg-white shadow" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "district" && "District Overview"}
            {tab === "demographics" && "Demographics"}
            {tab === "disease" && "Disease Analytics"}
            {tab === "trends" && "Monthly Trends"}
            {tab === "hospital" && "Hospital Analytics"}
          </button>
        ))}
      </div>
      <div className="bg-white border rounded-xl p-6 mb-4">
        <h3 className="font-semibold mb-3">District-wise Health Data Distribution</h3>
        <p className="text-sm text-gray-500 mb-4">
          Patient registration and health record distribution across Kerala districts
        </p>
        <DemoBarChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-xl p-4">
          <h4 className="font-semibold mb-3">Top 5 Districts by Patient Count</h4>
          <ol className="text-sm space-y-1">
            <li>1. Thiruvananthapuram <span className="ml-2 text-gray-500">425,000</span></li>
            <li>2. Malappuram <span className="ml-2 text-gray-500">410,000</span></li>
            <li>3. Kochi <span className="ml-2 text-gray-500">380,000</span></li>
            <li>4. Kozhikode <span className="ml-2 text-gray-500">320,000</span></li>
            <li>5. Thrissur <span className="ml-2 text-gray-500">290,000</span></li>
          </ol>
        </div>
        <div className="bg-white border rounded-xl p-4">
          <h4 className="font-semibold mb-3">System Performance Indicators</h4>
          <ul className="text-sm space-y-1">
            <li className="flex justify-between">
              <span>FHIR Compliance</span>
              <span className="text-green-600 font-semibold">100%</span>
            </li>
            <li className="flex justify-between">
              <span>Data Security Score</span>
              <span className="text-green-600 font-semibold">98.5%</span>
            </li>
            <li className="flex justify-between">
              <span>System Availability</span>
              <span className="text-green-600 font-semibold">99.97%</span>
            </li>
            <li className="flex justify-between">
              <span>Emergency Overrides</span>
              <span className="text-orange-500 font-semibold">456 this month</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, extra, change }: any) {
  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">{icon}<span className="font-semibold">{label}</span></div>
      <div className="text-2xl font-bold">{value}</div>
      {change && <div className="text-xs text-green-600">{change}</div>}
      {extra && <div className="text-xs text-gray-500">{extra}</div>}
    </div>
  );
}