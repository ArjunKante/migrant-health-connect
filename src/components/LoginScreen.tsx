import React, { useState } from "react";
import { Shield, User, Hospital, BarChart } from "lucide-react";

const roles = [
  { label: "Patient", value: "patient" },
  { label: "Hospital", value: "hospital" },
  { label: "Government", value: "government" },
];

const demoUsers = [
  {
    name: "Priya Krishnan",
    role: "patient",
    email: "priya.krishnan@email.com",
    extra: {
      patientId: "P123456789",
      abhaId: "14-1234-5678-9012",
      age: 28,
      bloodType: "O+",
      aadhaar: "****.****.1234",
    },
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "hospital",
    email: "dr.rajesh.kumar@hospital.com",
    extra: {
      hospital: "Government Medical College, Thiruvananthapuram",
    },
  },
  {
    name: "Health Analytics Officer",
    role: "government",
    email: "analytics@gov.in",
    extra: {},
  },
];

export function LoginScreen({ onLogin }: { onLogin: (user: any) => void }) {
  const [activeTab, setActiveTab] = useState<"signin" | "create">("signin");
  const [role, setRole] = useState(roles[0].value);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    // In production, validate credentials and fetch user info
    let demo = demoUsers.find(u => u.role === role);
    onLogin({
      id: email || "demo",
      name: demo?.name || "User",
      role,
      email,
      ...demo?.extra,
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfcfc] px-2">
      <div className="flex flex-col items-center mb-8">
        <span className="bg-gray-100 rounded-full p-4 mb-2">
          <Shield className="w-10 h-10 text-black" />
        </span>
        <h1 className="text-3xl font-semibold text-center">Migrant Health Connect</h1>
        <p className="text-gray-500 text-center mt-1">Access your health information securely</p>
      </div>
      <div className="w-full max-w-md bg-white rounded-xl border p-8 shadow-sm">
        <h2 className="text-lg font-semibold mb-1">Access Migrant Health Connect</h2>
        <p className="text-gray-500 mb-4 text-sm">Sign in to your account or create a new one</p>
        <div className="flex mb-4 bg-gray-100 rounded-lg overflow-hidden">
          <button
            className={`flex-1 px-4 py-2 font-medium ${activeTab === "signin" ? "bg-white shadow" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`flex-1 px-4 py-2 font-medium ${activeTab === "create" ? "bg-white shadow" : ""}`}
            onClick={() => setActiveTab("create")}
          >
            Create Account
          </button>
        </div>
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <div className="relative">
              <select
                className="w-full border rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring"
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                {roles.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              <span className="absolute left-2 top-2 text-gray-400">
                <User className="w-4 h-4" />
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-black text-white rounded-md py-2 font-semibold mt-2 hover:bg-gray-900"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="w-full max-w-md bg-white rounded-xl border p-6 mt-6">
        <h3 className="font-semibold mb-1">Demo Access</h3>
        <p className="text-gray-500 text-sm mb-3">Quick login for demonstration purposes</p>
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center gap-3 border rounded-md px-4 py-2 hover:bg-gray-50"
            onClick={() => onLogin({ ...demoUsers[0], id: "P123456789", ...demoUsers[0].extra })}
          >
            <User className="w-4 h-4" /> Login as Priya Krishnan (patient)
          </button>
          <button
            className="flex items-center gap-3 border rounded-md px-4 py-2 hover:bg-gray-50"
            onClick={() => onLogin({ ...demoUsers[1], id: "HOSP001", ...demoUsers[1].extra })}
          >
            <Hospital className="w-4 h-4" /> Login as Dr. Rajesh Kumar (hospital)
          </button>
          <button
            className="flex items-center gap-3 border rounded-md px-4 py-2 hover:bg-gray-50"
            onClick={() => onLogin({ ...demoUsers[2], id: "GOV001" })}
          >
            <BarChart className="w-4 h-4" /> Login as Health Analytics Officer (government)
          </button>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 text-gray-400">
        <span className="text-2xl">?</span>
      </div>
    </div>
  );
}