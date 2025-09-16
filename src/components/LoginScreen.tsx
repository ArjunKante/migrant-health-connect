import React, { use id: "HSP003",
      lastAccess: "2024-01-10State } from "react";
import { User, Hospital, Bar",
      authorized: true,
    },
    {
      name: "Chart } from "lucide-react";
import { UserType } fromBaby Memorial Hospital, Kozhikode",
      id: "HSP "../App";

const roles = [
  { label: "Patient", value004",
      lastAccess: "Never",
      authorized: false: "patient" },
  { label: "Hospital", value: ",
    },
  ];

  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="hospital" },
  { label: "Government", value: "government" },
font-semibold mb-1">Hospital Access Consent</h3];

const demoUsers = [
  {
    name: "Priya Krishnan",
>
      <p className="text-gray-500 text-sm mb-6">
           role: "patient",
    email: "priya.krishnan Manage which hospitals can access your medical records. You can revoke access at any time.
      </p>
@email.com",
    id: "P123456789",
    abhaId: "14-1234-5678-9012",
    age: 28,
    bloodType: "O      <div className="flex flex-col gap-4">
        {hospitals.map(h => (
          <div key={h+",
    aadhaar: "****.****.1234",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "hospital",
    email: "dr.rajesh.kumar.id} className="bg-gray-50 rounded-xl border flex items-center justify-between p-4 gap-4">
            <div class@hospital.com",
    id: "HOSP001",
    hospital: "Government Medical College,Name="flex items-center gap-3">
              <span className=" Thiruvananthapuram"
  },
  {
    name: "Health Analytics Officer",
    role: "government",
    email: "analytics@gov.in",
bg-gray-200 rounded-full p-2">
                <Hospital className="w-6 h-6" />
              </span>
              <div>
                <div className="    id: "GOV001"
  },
];

export function LoginScreenfont-semibold">{h.name}</div>
                <({ onLogin }: { onLogin: (u: UserType) => voiddiv className="text-xs text-gray-500">
                  Hospital ID }) {
  const [activeTab, setActiveTab] = useState<: {h.id}
                </div>
                <div className="text-xs text-gray-500">
                  Last"signin" | "create">("signin");
  const [role, setRole Access: {h.lastAccess}
                </div>
] = useState(roles[0].value);
  const [email, setEmail              </div>
            </div>
            <div className="flex items] = useState("");
  const [fullName, setFullName] =-center gap-2">
              {h useState("");
  const [password, setPassword] =.authorized ? (
                <>
                  <span className="flex items-center text-green-600 text useState("");
  const [agree, setAgree] = useState(false);
-sm gap-1">
                    <CheckCircle2 className  const [consent, setConsent] = useState(false);

  function="w-4 h-4" /> Authorized
                  </span>
 handleSignIn(e: React.FormEvent) {
    e.prevent                  <label className="inline-flex relative itemsDefault();
    const demo = demoUsers.find(u-center cursor-pointer">
                    <input => u.role === role);
    onLogin({
      id: email type="checkbox" checked={true} className="sr-only peer" readOnly />
                    <div class || "demo",
      name: demo?.name || "User",
     Name="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full role: role as UserType["role"],
      email,
      ... peer peer-checked:bg-black transition-all"></divdemo
    });
  }
  function handleCreate(e: React>
                  </label>
                </>
              ) : (
                <>
                  <span.FormEvent) {
    e.preventDefault();
    if (! className="flex items-center text-red-500 text-sm gap-1">
agree) return;
    onLogin({
      id: email || "demo                    <XCircle className="w-",
      name: fullName || "User",
      role: role4 h-4" /> Revoked
                  </span>
                  <label className as UserType["role"],
      email,
      abhaId: "14-="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" checked1234-5678-9012",
      age: 25,
      bloodType:={false} className="sr-only peer" readOnly />
                    <div className="w-9 "O+",
      aadhaar: "****.****.1234",
      consent
    });
  h-5 bg-gray-200 peer-focus:outline-none rounded-full transition-all }

  return (
    <div className="min-h-screen"></div>
                  </label>
                </>
              )}
            </div flex flex-col items-center justify-center bg-[#fcfcfc]>
          </div>
        ))}
      </div>
    </div px-2">
      <div className="flex flex-col items>
  );
}