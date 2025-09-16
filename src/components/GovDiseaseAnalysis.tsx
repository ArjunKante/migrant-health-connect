import React from "react";

// Demo bar chart
function DiseaseBarChart() {
  const data = [
    { label: "Hypertension", value: 285000 },
    { label: "Diabetes Type 2", value: 235000 },
    { label: "Cardiovascular Disease", value: 145000 },
    { label: "Respiratory Disorder", value: 120000 },
    { label: "Mental Health", value: 90000 },
    { label: "Kidney Disease", value: 65000 },
  ];
  const maxValue = 300000;
  return (
    <div className="w-full h-60 flex items-end gap-4 px-4">
      {data.map(d => (
        <div key={d.label} className="flex flex-col items-center flex-1">
          <div
            className="bg-orange-400 rounded-t"
            style={{
              width: "35px",
              height: `${(d.value / maxValue) * 200}px`,
              transition: "height 0.5s",
            }}
            title={d.value.toLocaleString()}
          />
          <span className="text-xs mt-2 text-gray-700 rotate-[-40deg]">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function GovDiseaseAnalyticsTab() {
  const stats = [
    { label: "Hypertension", value: 285000, percent: "12.5%" },
    { label: "Diabetes Type 2", value: 235000, percent: "10.3%" },
    { label: "Cardiovascular Disease", value: 145000, percent: "6.4%" },
  ];

  return (
    <div>
      <div className="bg-white border rounded-xl p-6 mb-6">
        <div className="font-semibold mb-2">Disease Prevalence Analysis</div>
        <div className="text-gray-500 text-sm mb-3">
          Most common health conditions across Kerala (anonymized data)
        </div>
        <DiseaseBarChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-white border rounded-xl p-4">
            <div className="font-bold mb-1">{s.label}</div>
            <div className="text-2xl font-semibold">{s.value.toLocaleString()}</div>
            <div className="text-xs text-gray-500">{s.percent} of population</div>
          </div>
        ))}
      </div>
    </div>
  );
}