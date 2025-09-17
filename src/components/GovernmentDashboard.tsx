import React, { useState } from "react";
import { UserType } from "../App";

function Overview() {
  return <div>Government Dashboard Overview</div>;
}
function Analytics() {
  return <div>Health Analytics Section</div>;
}
function AccessRequests() {
  return <div>Access Requests Section</div>;
}
function Settings() {
  return <div>Government Settings Section</div>;
}

export function GovernmentDashboard({ user }: { user: UserType }) {
  const [section, setSection] = useState<"overview" | "analytics" | "requests" | "settings">("overview");

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
          className={`mb-2 text-left ${section === "analytics" ? "font-bold" : ""}`}
          onClick={() => setSection("analytics")}
        >
          Analytics
        </button>
        <button
          className={`mb-2 text-left ${section === "requests" ? "font-bold" : ""}`}
          onClick={() => setSection("requests")}
        >
          Access Requests
        </button>
        <button
          className={`mb-2 text-left ${section === "settings" ? "font-bold" : ""}`}
          onClick={() => setSection("settings")}
        >
          Settings
        </button>
      </nav>
      <main className="flex-1 p-6">
        {section === "overview" && <Overview />}
        {section === "analytics" && <Analytics />}
        {section === "requests" && <AccessRequests />}
        {section === "settings" && <Settings />}
      </main>
    </div>
  );
}
export default GovernmentDashboard;