import { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { PatientPortal } from "./components/PatientPortal";
import { HospitalPortal } from "./components/HospitalPortal";
import { GovernmentDashboard } from "./components/GovernmentDashboard";
import { Shield } from "lucide-react";

type UserRole = "patient" | "hospital" | "government";

interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-semibold">Migrant Health Connect</h1>
                <p className="text-muted-foreground">Secure, State-wide Healthcare Data Management System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground capitalize">{user.role} Portal</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm border rounded-md hover:bg-accent"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {user.role === "patient" && <PatientPortal user={user} />}
        {user.role === "hospital" && <HospitalPortal user={user} />}
        {user.role === "government" && <GovernmentDashboard user={user} />}
      </main>
    </div>
  );
}