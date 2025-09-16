import React from "react";

export default function HospitalActivityLogTab() {
  // Demo: No activity, but some emergency override logs
  const emergencyLogs = [
    {
      patient: "Ravi Nair (P555666777)",
      doctor: "Dr. Rajesh Kumar (DOC12345)",
      time: "2024-01-14 02:30:15",
      reason: "Unconscious patient - car accident, need blood type and allergies",
      data: "Blood Type (B+), Allergies (None), Current Medications (None)",
      logId: "EMG001",
    },
    {
      patient: "Meera Pillai (P888999000)",
      doctor: "Dr. Suresh Pillai (DOC67890)",
      time: "2024-01-12 18:45:22",
      reason: "Cardiac arrest - need medical history and medications",
      data: "Medical History, Current Medications, Allergies",
      logId: "EMG002",
    },
  ];

  return (
    <div>
      {/* My Activity Log */}
      <div className="bg-white rounded-xl border p-6 mb-6 min-h-[220px] flex flex-col items-center justify-center">
        <div className="w-full mb-6">
          <h3 className="font-semibold mb-1">My Activity Log</h3>
          <p className="text-gray-500 text-sm">
            Complete record of all your actions and patient interactions
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          {/* Clock icon */}
          <svg width="44" height="44" fill="none" stroke="#b0b0c0" strokeWidth={2} viewBox="0 0 24 24" className="mb-2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <div className="font-semibold text-gray-400 mb-1">No activity logged yet</div>
          <div className="text-sm text-gray-400 text-center">
            Your actions will be recorded here for audit purposes
          </div>
        </div>
      </div>
      {/* Emergency Override Audit Logs */}
      <div className="bg-white rounded-xl border p-6">
        <h3 className="font-semibold mb-3">Emergency Override Audit Logs</h3>
        <p className="text-gray-500 text-sm mb-4">
          Immutable record of all emergency access events at this hospital
        </p>
        <div className="flex flex-col gap-4">
          {emergencyLogs.map(log => (
            <div key={log.logId} className="bg-red-50 border border-red-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <span className="inline-block text-xs font-bold px-2 py-1 rounded bg-red-600 text-white mr-2">
                  EMERGENCY ACCESS
                </span>
                <span className="inline-block text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-700">
                  Logged & Verified
                </span>
                <div className="font-semibold mt-2">Patient: {log.patient}</div>
                <div className="text-sm text-gray-500 mb-1">
                  Doctor: {log.doctor}<br />
                  Time: {log.time}
                </div>
                <div className="text-sm mb-1"><span className="font-semibold">Reason:</span> {log.reason}</div>
                <div className="text-sm text-gray-700"><span className="font-semibold">Data Accessed:</span> {log.data}</div>
              </div>
              <div className="text-xs text-gray-400 mt-2 md:mt-0 md:ml-4">Logged: {log.logId}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}