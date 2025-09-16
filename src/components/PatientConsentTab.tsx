import React from "react";
import { Hospital, CheckCircle2, XCircle } from "lucide-react";

export default function PatientConsentTab() {
  const hospitals = [
    {
      name: "Government Medical College, Thiruvananthapuram",
      id: "HSP001",
      lastAccess: "2024-01-15",
      authorized: true,
    },
    {
      name: "KIMS Hospital, Kochi",
      id: "HSP002",
      lastAccess: "Never",
      authorized: false,
    },
    {
      name: "Aster Medcity, Kochi",
      id: "HSP003",
      lastAccess: "2024-01-10",
      authorized: true,
    },
    {
      name: "Baby Memorial Hospital, Kozhikode",
      id: "HSP004",
      lastAccess: "Never",
      authorized: false,
    },
  ];

  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-1">Hospital Access Consent</h3>
      <p className="text-gray-500 text-sm mb-6">
        Manage which hospitals can access your medical records. You can revoke access at any time.
      </p>
      <div className="flex flex-col gap-4">
        {hospitals.map(h => (
          <div key={h.id} className="bg-gray-50 rounded-xl border flex items-center justify-between p-4 gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-gray-200 rounded-full p-2">
                <Hospital className="w-6 h-6" />
              </span>
              <div>
                <div className="font-semibold">{h.name}</div>
                <div className="text-xs text-gray-500">Hospital ID: {h.id}</div>
                <div className="text-xs text-gray-500">Last Access: {h.lastAccess}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {h.authorized ? (
                <>
                  <span className="flex items-center text-green-600 text-sm gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Authorized
                  </span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" readOnly />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-black transition-all"></div>
                  </label>
                </>
              ) : (
                <>
                  <span className="flex items-center text-red-500 text-sm gap-1">
                    <XCircle className="w-4 h-4" /> Revoked
                  </span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" readOnly />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full transition-all"></div>
                  </label>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}