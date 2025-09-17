import React, { useState } from "react";
import { UserType } from "../App";

const roles = [
  { label: "Patient", value: "patient" },
  { label: "Hospital", value: "hospital" },
  { label: "Government", value: "government" },
];

// Demo user list is simplified for brevity
const demoUsers: (UserType & { password: string })[] = [
  {
    id: "P123",
    name: "Priya Krishnan",
    role: "patient",
    email: "priya@email.com",
    password: "priyapass",
  },
  {
    id: "H001",
    name: "Dr. Rajesh Kumar",
    role: "hospital",
    email: "rajesh@hospital.com",
    password: "hospitalpass",
  },
  {
    id: "G001",
    name: "Health Analytics Officer",
    role: "government",
    email: "analytics@gov.in",
    password: "govpass",
  },
];

export function LoginScreen({ onLogin }: { onLogin: (u: UserType) => void }) {
  const [role, setRole] = useState(roles[0].value);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    const user = demoUsers.find(u => u.role === role && u.email === email);
    if (!user) {
      setError("User not found.");
      return;
    }
    if (user.password !== password) {
      setError("Incorrect password.");
      return;
    }
    setError("");
    onLogin(user);
  }

  return (
    <form onSubmit={handleSignIn} className="max-w-sm mx-auto flex flex-col gap-3">
      <select value={role} onChange={e => setRole(e.target.value)} className="border rounded p-2">
        {roles.map(r => (
          <option key={r.value} value={r.value}>{r.label}</option>
        ))}
      </select>
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
        className="border rounded p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={e => setPassword(e.target.value)}
        className="border rounded p-2"
      />
      {error && <div className="text-red-500">{error}</div>}
      <button type="submit" className="bg-black text-white rounded p-2">Sign In</button>
    </form>
  );
}
export default LoginScreen;