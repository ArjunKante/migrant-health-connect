import React from "react";

export default function PatientInsuranceTab() {
  const annualLimit = 15000;
  const used = 8500;
  const remaining = annualLimit - used;
  const percent = (used / annualLimit) * 100;

  const claims = [
    {
      title: "Routine Checkup",
      date: "2024-01-15",
      hospital: "Government Medical College, TVM",
      amount: 500,
    },
    {
      title: "Blood Test - Complete Panel",
      date: "2024-01-10",
      hospital: "Aster Medcity, Kochi",
      amount: 2000,
    },
    {
      title: "Food Poisoning Treatment",
      date: "2023-12-20",
      hospital: "Government Medical College, TVM",
      amount: 6000,
    }
  ];

  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-2">Insurance Usage Tracker - 2024</h3>
      <p className="text-gray-500 text-sm mb-6">
        Track your annual insurance usage. Limits reset on January 1st each year.
      </p>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <span>Annual Limit</span>
          <span className="font-semibold text-black">₹{annualLimit.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Used Amount</span>
          <span className="font-semibold text-red-500">₹{used.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Remaining</span>
          <span className="font-semibold text-green-500">₹{remaining.toLocaleString()}</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden my-2">
          <div className="h-3 bg-black" style={{ width: `${percent}%` }} />
        </div>
        <div className="text-center text-xs text-gray-500">{percent.toFixed(1)}% of annual limit used</div>
      </div>
      <hr className="my-6" />
      <div>
        <h4 className="font-semibold mb-3">Insurance Claims History</h4>
        <div className="flex flex-col gap-2">
          {claims.map((claim, i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div>
                <div className="font-semibold">{claim.title}</div>
                <div className="text-xs text-gray-500">
                  {claim.date} • {claim.hospital}
                </div>
              </div>
              <div className="font-semibold text-rose-600 text-sm">₹{claim.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}