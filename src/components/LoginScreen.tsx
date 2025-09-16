import React from "react";

export function LoginScreen({ onLogin }: { onLogin: (user: any) => void }) {
  // Replace with your real login form
  return (
    <div className="flex flex-col items-center mt-20">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() =>
          onLogin({ id: "1", name: "John Doe", role: "patient", email: "john@example.com" })
        }
      >
        Demo Login as Patient
      </button>
    </div>
  );
}