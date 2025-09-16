import React from "react";
import { AlertTriangle } from "lucide-react";

export default function HospitalEmergencyOverrideTab() {
  return (
    <div>
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-6 h-6 text-orange-600" />
          <span className="text-orange-700 font-semibold">
            Emergency Override (“Break-Glass” Access)
          </span>
        </div>
        <p className="text-gray-700 mb-4">
          This feature allows access to critical patient data during emergencies when the patient is unconscious. All emergency access is permanently logged and audited.
        </p>
        <div className="bg-orange-100 border border-orange-300 rounded-md p-4 mb-4 text-sm">
          <div className="font-semibold mb-2">Emergency Access Restrictions</div>
          <ul className="list-disc ml-5 text-orange-700">
            <li>Only critical data: Blood type, allergies, major diseases, current medications</li>
            <li>Patient must be unconscious or unable to provide consent</li>
            <li>All access is permanently logged with doctor ID and reason</li>
            <li>Misuse will result in immediate system alerts and investigation</li>
          </ul>
        </div>
        <form>
          <div className="mb-3">
            <label className="block text-sm font-semibold mb-1">Patient ID</label>
            <input
              className="w-full border rounded-md px-3 py-2 bg-orange-50 focus:outline-none"
              placeholder="Enter Patient ID for emergency access"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-semibold mb-1">Emergency Reason (Required)</label>
            <textarea
              className="w-full border rounded-md px-3 py-2 bg-orange-50 focus:outline-none"
              placeholder="Describe the medical emergency and why immediate access is needed"
              rows={2}
            />
          </div>
          <button
            type="submit"
            disabled
            className="w-full bg-rose-300 text-white rounded-md py-2 font-semibold flex items-center justify-center gap-2 mt-2 cursor-not-allowed"
          >
            <AlertTriangle className="w-5 h-5" />
            Initiate Emergency Override
          </button>
        </form>
      </div>
      <div className="bg-white border rounded-xl p-6">
        <h4 className="font-semibold mb-3">Emergency Data Preview</h4>
        <p className="text-gray-500 text-sm mb-4">
          Critical information available through emergency override
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-md p-4">
            <div className="font-semibold">Blood Type & Allergies</div>
            <div className="text-xs text-gray-500">Essential for immediate treatment</div>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <div className="font-semibold">Current Medications</div>
            <div className="text-xs text-gray-500">To avoid drug interactions</div>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <div className="font-semibold">Major Medical Conditions</div>
            <div className="text-xs text-gray-500">Chronic diseases affecting treatment</div>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <div className="font-semibold">Emergency Contacts</div>
            <div className="text-xs text-gray-500">Next of kin information</div>
          </div>
        </div>
      </div>
    </div>
  );
}