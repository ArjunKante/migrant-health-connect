import React, { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { PatientPortal } from "./components/PatientPortal";
import { HospitalPortal } from "./components/HospitalPortal";
import { GovernmentDashboard } from "./components/GovernmentDashboard";
import { TopBar } from "./components/TopBar";

export type UserType = {
  id: string;
  name: string;
  role: "patient" | "hospital" | "government";
  email: string;
  [key: string]: any;
};

function App() {
  const [user, setUser] = useState<UserType | null>(null);

  function handleLogout() {
    setUser(null);
  }

  return (
    <div>
      <TopBar user={user} onLogout={handleLogout} />
      <div className="max-w-6xl mx-auto px-3 pt-8">
        {!user && <LoginScreen onLogin={setUser} />}
        {user?.role === "patient" && <PatientPortal user={user} />}
        {user?.role === "hospital" && <HospitalPortal user={user} />}
        {user?.role === "government" && <GovernmentDashboard user={user} />}
      </div>
    </div>
  );
}
export default App;