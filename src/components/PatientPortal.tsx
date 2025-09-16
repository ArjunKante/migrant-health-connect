import React, { useState } from "react";
import { Shield, CheckCircle2, AlertCircle } from "lucide-react";

export function PatientPortal({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Demo data (usually fetched from API)
  const info = {
    patientId: user.patientId || "P123456789",
    aadhaar: user.aadhaar || "****.****.1234",
    abhaId: user.abhaId || "14-1234-5678-9012",
    age: user.age || 28,
    bloodType: user.bloodType || "O+",
  };

  return (
    <div>
      <header className="flex items-center gap-4 mb-6">
        <span className="bg-gray-100 rounded-full p-3">
          <Shield className="w-8 h-8 text-black" />
        </span>
        <div>
          <h2 className="text-lg font-semibold">
            Patient Portal - {user.name}
          </h2>
          <p className="text-gray-500 text-sm">
            Manage your health records and privacy settings
          </p>
        </div>
      </header>

      <div className="flex mb-6 bg-gray-100 rounded-lg overflow-hidden">
        {["overview", "medical", "history", "consent", "insurance"].map(tab => (
          <button
            key={tab}
            className={`flex-1 px-4 py-2 font-medium ${
              activeTab === tab ? "bg-white shadow" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "overview" && "Overview"}
            {tab === "medical" && "Medical Records"}
            {tab === "history" && "Access History"}
            {tab === "consent" && "Consent Management"}
            {tab === "insurance" && "Insurance Tracker"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Patient Info */}
        <div className="bg-white rounded-xl border p-6 flex-1">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <UserIcon /> Patient Information
          </h3>
          <div className="text-sm text-gray-700">
            <div className="flex justify-between mb-1"><span>Patient ID:</span><span>{info.patientId}</span></div>
            <div className="flex justify-between mb-1"><span>Aadhaar:</span><span>{info.aadhaar}</span></div>
            <div className="flex justify-between mb-1"><span>ABHA ID:</span><span>{info.abhaId}</span></div>
            <div className="flex justify-between mb-1"><span>Age:</span><span>{info.age} years</span></div>
            <div className="flex justify-between"><span>Blood Type:</span><span>{info.bloodType}</span></div>
          </div>
        </div>
        {/* Insurance */}
        <div className="bg-white rounded-xl border p-6 flex-1">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span>₹</span> Insurance Status
          </h3>
          <div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Used: ₹8,500</span>
              <span>Limit: ₹15,000</span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 mb-1">
              <div className="h-2 rounded-full bg-gray-800" style={{ width: "57%" }} />
            </div>
            <div className="text-xs text-gray-500 mb-2">₹6,500 remaining for 2024</div>
            <span className="inline-block bg-gray-100 rounded px-3 py-1 text-xs">Active</span>
          </div>
        </div>
        {/* Privacy/Consent */}
        <div className="bg-white rounded-xl border p-6 flex-1">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" /> Privacy Status
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-center gap-2">
              Data Encryption <CheckCircle2 className="w-4 h-4 text-green-500" />
            </li>
            <li className="flex items-center gap-2">
              Consent Active <CheckCircle2 className="w-4 h-4 text-green-500" />
            </li>
            <li className="flex items-center gap-2">
              Emergency Access <AlertCircle className="w-4 h-4 text-orange-500" />
            </li>
          </ul>
          <div className="mt-3">
            <span className="block w-full h-6 bg-gray-100 rounded-full text-xs flex items-center justify-center text-gray-700">
              FHIR R4 Compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"/>
    </svg>
  );
}