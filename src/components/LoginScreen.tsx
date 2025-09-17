import React, { useState } from "react";
import { UserType } from "../App";

const roles = [
  { label: "Patient", value: "patient" },
  { label: "Hospital", value: "hospital" },
  { label: "Government", value: "government" },
];

type EmergencyContact = {
  name: string;
  phone: string;
  relationship: string;
};

export function LoginScreen({ onLogin }: { onLogin: (u: UserType) => void }) {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [role, setRole] = useState(roles[0].value);

  // Shared fields
  const [aadhaar, setAadhaar] = useState("");
  const [abha, setAbha] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup only
  const [emergencyContact, setEmergencyContact] = useState<EmergencyContact>({
    name: "",
    phone: "",
    relationship: "",
  });

  const [error, setError] = useState("");

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!(aadhaar || abha)) {
      setError("Please enter either Aadhaar or ABHA ID.");
      return;
    }
    if (!email || !password) {
      setError("Email and password required.");
      return;
    }
    onLogin({
      id: aadhaar || abha,
      name: "User",
      role: role as UserType["role"],
      email,
      aadhaar,
      abhaId: abha,
    });
  }

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!(aadhaar || abha)) {
      setError("Please enter either Aadhaar or ABHA ID.");
      return;
    }
    if (!email || !password) {
      setError("Email and password required.");
      return;
    }
    // Simulate signup - you could add more logic here
    onLogin({
      id: aadhaar || abha,
      name: "User",
      role: role as UserType["role"],
      email,
      aadhaar,
      abhaId: abha,
      emergencyContact: emergencyContact.name
        ? emergencyContact
        : undefined,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-md mt-10">
        <div className="bg-white rounded-xl border p-6">
          <div className="flex gap-2 mb-6 justify-center text-sm">
            <button
              className={`underline ${activeTab === "signin" ? "font-bold" : ""}`}
              onClick={() => setActiveTab("signin")}
            >
              Sign In
            </button>
            <span>|</span>
            <button
              className={`underline ${activeTab === "signup" ? "font-bold" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>
          <form
            onSubmit={activeTab === "signin" ? handleSignIn : handleSignUp}
            className="flex flex-col gap-3"
          >
            <select
              className="border rounded p-2"
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              {roles.map(r => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Aadhaar Number"
              value={aadhaar}
              maxLength={12}
              onChange={e => setAadhaar(e.target.value.replace(/\D/g, ""))}
            />
            <div className="text-center text-xs text-gray-500">or</div>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="ABHA ID"
              value={abha}
              onChange={e => setAbha(e.target.value)}
            />
            <input
              className="border rounded p-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              className="border rounded p-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />

            {/* Emergency contact fields for Sign Up only */}
            {activeTab === "signup" && (
              <fieldset className="border rounded p-3">
                <legend className="text-xs font-semibold text-gray-600">
                  Emergency Contact (Optional)
                </legend>
                <input
                  className="border rounded p-2 mt-2 mb-1 w-full"
                  type="text"
                  placeholder="Name"
                  value={emergencyContact.name}
                  onChange={e =>
                    setEmergencyContact(c => ({ ...c, name: e.target.value }))
                  }
                />
                <input
                  className="border rounded p-2 mb-1 w-full"
                  type="tel"
                  placeholder="Phone"
                  value={emergencyContact.phone}
                  onChange={e =>
                    setEmergencyContact(c => ({ ...c, phone: e.target.value.replace(/\D/g, "") }))
                  }
                />
                <input
                  className="border rounded p-2 w-full"
                  type="text"
                  placeholder="Relationship"
                  value={emergencyContact.relationship}
                  onChange={e =>
                    setEmergencyContact(c => ({ ...c, relationship: e.target.value }))
                  }
                />
              </fieldset>
            )}

            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="bg-black text-white rounded p-2 mt-2"
            >
              {activeTab === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;