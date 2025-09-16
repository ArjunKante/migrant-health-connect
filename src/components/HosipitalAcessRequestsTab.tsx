import React from "react";

export default function HospitalAccessRequestsTab() {
  return (
    <div className="bg-white rounded-xl border p-6 min-h-[300px] flex flex-col items-center justify-center">
      <div className="w-full mb-6">
        <h3 className="font-semibold mb-1">Access Requests</h3>
        <p className="text-gray-500 text-sm">
          Patient consent requests sent through the system
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {/* Icon */}
        <svg width="48" height="48" fill="none" stroke="#b0b0c0" strokeWidth={2} viewBox="0 0 24 24" className="mb-2">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="16" y2="10" />
        </svg>
        <div className="font-semibold text-gray-400 mb-1">No access requests</div>
        <div className="text-sm text-gray-400 text-center">
          Requests will appear here when you request access to patient records
        </div>
      </div>
    </div>
  );
}