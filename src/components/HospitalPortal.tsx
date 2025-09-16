import React, { useState } from "react";
import { Shield, Search, User, Lock, AlertCircle, CheckCircle2, XCircle } from "lucide-react";

const demoPatients = [
  {
    name: "Priya Krishnan",
    id: "P123456789",
    age: 28,
    bloodType: "O+",
    lastVisit: "2024-01-15",
    consent: true,
  },
  {
    name: "Arjun Menon",
    id: "P987654321",
    age: 45,
    bloodType: "A+",
    lastVisit: null,
    consent: false,
  },
];

export function HospitalPortal({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState("search");
  const [query, setQuery] = useState("");
  const [patients] = useState(demoPatients);

  return (
    <div>
      <header className="flex items-center gap-4 mb-6">
        <span className="bg-gray-100 rounded-full p-3">
          <Shield className="w-8 h-8 text-black" />
        </span>
        <div>
          <h2 className="text-lg font-semibold">
            Hospital Portal - {user.hospital || "Government Medical College, Thiruvananthapuram"}
          </h2>
          <p className="text-gray-500 text-sm">
            Secure access to patient health records
          </p>
        </div>
      </header>
      <div className="flex mb-6 bg-gray-100 rounded-lg overflow-hidden">
        {["search", "records", "emergency", "requests", "log"].map(tab => (
          <button
            key={tab}
            className={`flex-1 px-4 py-2 font-medium ${
              activeTab === tab ? "bg-white shadow" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "search" && "Patient Search"}
            {tab === "records" && "Patient Records"}
            {tab === "emergency" && "Emergency Override"}
            {tab === "requests" && "Access Requests"}
            {tab === "log" && "My Activity Log"}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl border p-6 mb-4">
        <h3 className="font-semibold mb-2">Patient Record Search</h3>
        <p className="text-sm text-gray-500 mb-4">
          Search for patients using their Patient ID, Aadhaar, or ABHA number. Access requires patient consent.
        </p>
        <div className="flex gap-2">
          <input
            className="flex-1 border rounded-md px-3 py-2 bg-gray-50 focus:outline-none"
            placeholder="Enter Patient ID, Aadhaar, or ABHA number"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="bg-black text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-900">
            <Search className="w-4 h-4" /> Search
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {patients.map(p => (
          <div key={p.id} className="bg-white rounded-xl border p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="bg-gray-100 rounded-full p-2">
                <User className="w-6 h-6" />
              </span>
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-xs text-gray-500">
                  ID: {p.id} • Age: {p.age} • Blood Type: {p.bloodType}
                </div>
                <div className="text-xs text-gray-500">
                  Last Visit: {p.lastVisit ? p.lastVisit : "Never"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {p.consent ? (
                <>
                  <span className="flex items-center text-green-600 text-sm gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Consent Granted
                  </span>
                  <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Access Records
                  </button>
                </>
              ) : (
                <>
                  <span className="flex items-center text-red-500 text-sm gap-1">
                    <XCircle className="w-4 h-4" /> No Consent
                  </span>
                  <button className="border border-black text-black px-4 py-2 rounded flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> Request Access
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}