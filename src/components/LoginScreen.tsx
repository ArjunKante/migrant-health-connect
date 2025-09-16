import React, { useState } from "react";
import { CheckCircle2, XCircle, Hospital } from "lucide-react";
import { UserType } from "../App"; // Adjust the import if UserType is defined elsewhere

const roles = [
  { label: "Patient", value: "patient" },
  { label: "Hospital", value: "hospital" },
  { label: "Government", value: "government" },
];

const demoUsers: UserType[] = [
  {
    id: "P123456789",
    name: "Priya Krishnan",
    role: "patient",
    email: "priya.krishnan@email.com",
    abhaId: "14-1234-5678-9012",
    age: 28,
    bloodType: "O+",
    aadhaar: "****.****.1234",
    consent: true,
  },
  {
    id: "HOSP001",
    name: "Dr. Rajesh Kumar",
    role: "hospital",
    email: "dr.rajesh.kumar@hospital.com",
    hospital: "Government Medical College, Thiruvananthapuram",
  },
  {
    id: "GOV001",
    name: "Health Analytics Officer",
    role: "government",
    email: "analytics@gov.in",
  },
];

// Example hospital access consent list for patients
const hospitals = [
  {
    name: "Baby Memorial Hospital, Kozhikode",
    id: "HSP003",
    lastAccess: "2024-01-10",
    authorized: true,
  },
  {
    name: "KIMS Hospital, Trivandrum",
    id: "HSP004",
    lastAccess: "Never",
    authorized: false,
  },
];

export function LoginScreen({ onLogin }: { onLogin: (u: UserType) => void }) {
  const [activeTab, setActiveTab] = useState<"signin" | "create">("signin");
  const [role, setRole] = useState(roles[0].value);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [consent, setConsent] = useState(false);

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    const demo = demoUsers.find(u => u.role === role);
    onLogin({
      id: email || "demo",
      name: demo?.name || "User",
      role: role as UserType["role"],
      email,
      ...demo,
    });
  }

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) return;
    onLogin({
      id: email || "demo",
      name: fullName || "User",
      role: role as UserType["role"],
      email,
      abhaId: "14-1234-5678-9012",
      age: 25,
      bloodType: "O+",
      aadhaar: "****.****.1234",
      consent,
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfcfc] px-2">
      <div className="bg-white rounded-xl border p-6 w-full max-w-md">
        <h3 className="font-semibold mb-1">Hospital Access Consent</h3>
        <p className="text-gray-500 text-sm mb-6">
          Manage which hospitals can access your medical records. You can revoke access at any time.
        </p>
        {/* Demo: Show hospital access for patient */}
        {role === "patient" && (
          <div className="flex flex-col gap-4 mb-4">
            {hospitals.map(h => (
              <div key={h.id} className="bg-gray-50 rounded-xl border flex items-center justify-between p-4 gap-4">
                <div className="flex items-center gap-3">
                  <span className="bg-gray-200 rounded-full p-2">
                    <Hospital className="w-6 h-6" />
                  </span>
                  <div>
                    <div className="font-semibold">{h.name}</div>
                    <div className="text-xs text-gray-500">Hospital ID: {h.id}</div>
                    <div className="text-xs text-gray-500">Last Access: {h.lastAccess}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {h.authorized ? (
                    <span className="flex items-center text-green-600 text-sm gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Authorized
                    </span>
                  ) : (
                    <span className="flex items-center text-red-500 text-sm gap-1">
                      <XCircle className="w-4 h-4" /> Revoked
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Sign in/Create account (demo) */}
        <form onSubmit={activeTab === "signin" ? handleSignIn : handleCreate} className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select className="border rounded p-2 w-full" value={role} onChange={e => setRole(e.target.value)}>
              {roles.map(r => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              className="border rounded p-2 w-full"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          {activeTab === "create" && (
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                className="border rounded p-2 w-full"
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
              />
            </div>
          )}
          {activeTab === "create" && (
            <label className="inline-flex relative items-center cursor-pointer mt-2 mb-2">
              <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-black transition-all"></div>
              <span className="ml-3 text-xs text-gray-500">I agree to the terms</span>
            </label>
          )}
          <button
            className="bg-black text-white rounded p-2 font-semibold mt-2"
            type="submit"
            disabled={activeTab === "create" && !agree}
          >
            {activeTab === "signin" ? "Sign in" : "Create Account"}
          </button>
        </form>
        <div className="flex gap-2 mt-4 justify-center text-sm">
          <button
            className={`underline ${activeTab === "signin" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            Sign in
          </button>
          <span>|</span>
          <button
            className={`underline ${activeTab === "create" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("create")}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;