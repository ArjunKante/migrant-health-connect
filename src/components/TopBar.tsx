import React from "react";

export function TopBar({
  title = "Migrant Health Connect",
  subtitle = "Secure, State-wide Healthcare Data Management System",
  user,
  onLogout,
}: {
  title?: string;
  subtitle?: string;
  user?: { name: string; role: string };
  onLogout?: () => void;
}) {
  return (
    <header className="w-full bg-white border-b px-8 py-4 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <span className="bg-gray-100 rounded-full p-1 mr-2">
            {/* Simple shield icon */}
            <svg width="28" height="28" fill="none" stroke="black" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 3l7 4v5c0 5.25-3.75 10-7 10s-7-4.75-7-10V7z" />
            </svg>
          </span>
          <span>
            <span className="font-bold text-xl">{title}</span>
            <br />
            <span className="text-sm text-gray-500">{subtitle}</span>
          </span>
        </div>
      </div>
      {user && (
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="font-semibold">{user.name}</div>
            <div className="text-xs text-gray-500">{user.role}</div>
          </div>
          {onLogout && (
            <button
              onClick={onLogout}
              className="border rounded-md px-4 py-1 bg-white hover:bg-gray-100 font-medium text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}