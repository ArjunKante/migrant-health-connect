import React, { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { PatientPortal } from "./components/PatientPortal";
import { HospitalPortal } from "./components/HospitalPortal";
import { TopBar } from "./components/TopBar";
import { GovernmentDashboard } from "./components/GovernmentDashboard";

export type UserType = {
  id: string;
  name" />;
    if (type === "emergency") return <XCircle className="w-5 h-5 text-red-500" />;
    return null;
: string;
  role: "patient" | "hospital" | "government";
  email: string;
  [key: string]: any;
};

  }

  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-function App() {
  const [user, setUser] = useState<User1">Complete Access History</h3>
      <p classNameType | null>(null);

  function handleLogout() {
    set="text-gray-500 text-sm mb-6">
        Detailed log of everyone whoUser(null);
  }

  return (
    <div>
      <Top has accessed, viewed, or modified your health recordsBar user={user} onLogout={handleLogout} />
      <div
      </p>
      <div className="flex flex className="max-w-6xl mx-auto px-3 pt-8">
        {!user && <LoginScreen onLogin={setUser} />}
        {user-col gap-4">
        {logs.map(log => (
          <div
            key={log.logId}
            class?.role === "patient" && <PatientPortal user={Name={`rounded-xl border ${getColor(log.type)} p-user} />}
        {user?.role === "hospital" &&4 flex flex-col md:flex-row justify-between gap- <HospitalPortal user={user} />}
        {user?.role === "government" && <GovernmentDashboard user={user4`}
          >
            <div>
              <div className="flex items-center gap-2 font-semibold mb-1">
                {getIcon(log.type)}
                Record {} />}
      </div>
    </div>
  );
}

export default App;