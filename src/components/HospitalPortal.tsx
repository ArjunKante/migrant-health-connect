import React, { useState } from "react";
import { UserType } from "../App";

function OverviewSection() {
  return <div>Welcome to the Hospital Overview!</div>;
}
function MedicalRecordsSection() {
  return <div>Here are the Medical Records.</div>;
}
function AccessHistorySection() {
  return <div>Here is the Access History.</div>;
}
function SettingsSection() {
  return <div>Hospital Settings go here.</div>;
}

export function HospitalPortal({ user }: { user: UserType }) {
  const [section, setSection] = useState<"overview" | "records" | "history" | "settings">("overview");

  return (
    <div className="flex">
      <nav className="flex flex-col p-4 border-r min-w-[180px]">
        <button
          className={`mb-2 text-left ${section === "overview" ? "font-bold" : ""}`}
          onClick={() => setSection("overview")}
        >
          Overview
        </button>
        <button
          className={`mb-2 text-left ${section === "records" ? "font-bold" : ""}`}
          onClick={() => setSection("records")}
        >
          Medical Records
        </button>
        <button
          className={`mb-2 text-left ${section === "history" ? "font-bold" : ""}`}
          onClick={() => setSection("history")}
        >
          Access History
        </button>
        <button
          className={`mb-2 text-left ${section === "settings" ? "font-bold" : ""}`}
          onClick={() => setSection("settings")}
        >
          Settings
        </button>
      </nav>
      <main className="flex-1 p-6">
        {section === "overview" && <OverviewSection />}
        {section === "records" && <MedicalRecordsSection />}
        {section === "history" && <AccessHistorySection />}
        {section === "settings" && <SettingsSection />}
      </main>
    </div>
  );
}
export default HospitalPortal;