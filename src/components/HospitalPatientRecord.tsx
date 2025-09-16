import React from "react";
import { User, Edit2 } from "lucide-react";

export default function HospitalPatientRecordsTab() {
  // Normally, this would be dynamic based on selected patient
  const patient = {
    name: "Priya Krishnan",
    id: "P123456789",
    age: 28,
    bloodType: "O+",
    records: [
      {
        title: "Routine Checkup",
        date: "2024-01-15",
        treatment: "Blood pressure monitoring",
        medications: "Continue Amlodipine",
        notes: "Patient responding well to treatment",
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-1">Patient Records Management</h3>
      <p className="text-gray-500 text-sm mb-4">
        View and edit medical records for patients who have granted consent
      </p>
      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <User className="w-6 h-6 text-gray-600" />
          <div>
            <div className="font-semibold">{patient.name}</div>
            <div className="text-xs text-gray-500">
              ID: {patient.id} • Age: {patient.age} • Blood Type: {patient.bloodType}
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-700">{patient.records.length} Record(s)</div>
      </div>
      {patient.records.map((rec, i) => (
        <div key={i} className="bg-white border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div className="mb-2 md:mb-0">
            <div className="font-semibold">{rec.title}</div>
            <div className="text-xs text-gray-500 mb-1">{rec.date}</div>
            <div className="text-sm">
              <span className="font-semibold">Treatment:</span> {rec.treatment}
            </div>
            <div className="text-sm">
              <span className="font-semibold">Medications:</span> {rec.medications}
            </div>
            <div className="text-sm">
              <span className="font-semibold">Notes:</span> {rec.notes}
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button className="flex items-center gap-1 border rounded-md px-3 py-1 text-xs font-semibold bg-white hover:bg-gray-100">
              <Edit2 className="w-4 h-4" /> Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}