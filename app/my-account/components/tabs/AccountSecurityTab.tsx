"use client";

import { useState } from "react";

interface Device {
  id: string;
  os: string;
  browser: string;
  location: string;
  timestamp: string;
  isCurrentDevice: boolean;
}

export default function AccountSecurityTab() {
  const [currentEmail, setCurrentEmail] = useState("tslaghi5673@gmail.com");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [passwordSubmitting, setPasswordSubmitting] = useState(false);

  const [devices] = useState<Device[]>([
    {
      id: "1",
      os: "Mac OS X 10.15",
      browser: "Safari",
      location: "CHENNAI, TN",
      timestamp: "Fri, 02 Aug at 12:32",
      isCurrentDevice: true,
    },
    {
      id: "2",
      os: "Mac OS X 10.15",
      browser: "Safari",
      location: "CHENNAI, TN",
      timestamp: "Fri, 02 Aug at 12:32",
      isCurrentDevice: false,
    },
  ]);

  const handleEmailSubmit = async () => {
    if (!newEmail.trim()) return;
    setEmailSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmailSubmitting(false);
    // Reset form
    setNewEmail("");
  };

  const handlePasswordChange = async () => {
    if (!currentPassword.trim()) return;
    setPasswordSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPasswordSubmitting(false);
    // Reset form
    setCurrentPassword("");
  };

  const handleSignOut = (deviceId: string) => {
    console.log("Signing out device:", deviceId);
    // Handle sign out logic
  };

  return (
    <div className="w-[807px] h-full rounded-[20px] px-[40px] py-[40px] space-y-[48px]">
      {/* ================= LOGGED-IN DEVICES ================= */}
      <div className="space-y-[24px]">
        <h2 className="text-[20px] font-semibold text-[#2B2B2B]">
          Logged-In Devices
        </h2>
        
        <p className="text-[13px] text-gray-500">
          Your account is currently signed in on{" "}
          <span className="text-[#FF6A00] font-medium">1 device</span>. For
          enhanced security, review the active devices and sign out from any
          unrecognized ones.
        </p>

        <div className="space-y-[16px]">
          {devices.map((device) => (
            <div
              key={device.id}
              className="flex items-center justify-between p-5 rounded-[10px] bg-[#FFF5EF] border border-[#FFE5D3]"
            >
              {/* Device Icon */}
              <div className="flex items-center gap-4">
                <div className="w-[64px] h-[64px] bg-white rounded-[10px] flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF6A00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>

                {/* Device Info */}
                <div>
                  <p className="font-semibold text-[#2B2B2B] mb-0.5 text-[14px]">
                    {device.os}
                  </p>
                  <p className="text-[13px] text-gray-600">{device.browser}</p>
                  <p className="text-[13px] text-gray-500">{device.location}</p>
                  <p className="text-[12px] text-gray-400 mt-1">
                    {device.timestamp}
                  </p>
                  {device.isCurrentDevice && (
                    <div className="inline-block mt-2">
                      <span className="text-[11px] font-medium text-[#2B2B2B] bg-white px-3 py-1 rounded-[6px] border border-gray-200">
                        CURRENT ACTIVITY
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Sign Out Button */}
              <button
                onClick={() => handleSignOut(device.id)}
                className="text-[#2B2B2B] text-[14px] font-semibold hover:text-[#FF6A00] transition px-4 py-2"
              >
                Sign Out
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#E5E7EB]" />

      {/* ================= CHANGE EMAIL ================= */}
      <div className="space-y-[24px]">
        <h2 className="text-[20px] font-semibold text-[#2B2B2B]">
          Change Email
        </h2>
        
        <p className="text-[13px] text-gray-500">
          Need to update your email? Submit your request below, and we'll
          carefully review and process it to maintain security of your account.
          You'll receive a confirmation email once the change is approved.
        </p>

        <div className="grid grid-cols-2 gap-[24px]">
          {/* Current Email */}
          <div>
            <label className="text-[13px] text-gray-500">
              Current Email
            </label>
            <input
              type="email"
              value={currentEmail}
              disabled
              className="mt-2 w-full h-[52px] bg-gray-200 rounded-[10px] px-4 text-gray-500 cursor-not-allowed outline-none"
            />
          </div>

          {/* New Email */}
          <div>
            <label className="text-[13px] text-gray-500">
              New Email
            </label>
            <input
              type="email"
              placeholder="Enter your new email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="mt-2 w-full h-[52px] bg-white rounded-[10px] px-4 outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleEmailSubmit}
          disabled={emailSubmitting || !newEmail.trim()}
          className="w-[188px] h-[60px] bg-[#FF6A00] text-white rounded-[10px] font-medium hover:bg-[#e56000] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {emailSubmitting ? (
            <>
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Request"
          )}
        </button>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#E5E7EB]" />

      {/* ================= CHANGE PASSWORD ================= */}
      <div className="space-y-[24px]">
        <h2 className="text-[20px] font-semibold text-[#2B2B2B]">
          Change Password
        </h2>

        <div className="flex gap-[24px] items-end">
          <div className="flex-1">
            <label className="text-[13px] text-gray-500">
              Current Password
            </label>
            <input
              type="password"
              placeholder="abf13r92y"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-2 w-full h-[52px] bg-white rounded-[10px] px-4 outline-none"
            />
          </div>

          <button
            onClick={handlePasswordChange}
            disabled={passwordSubmitting || !currentPassword.trim()}
            className="w-[188px] h-[60px] bg-[#FF6A00] text-white rounded-[10px] font-medium hover:bg-[#e56000] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {passwordSubmitting ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Changing...
              </>
            ) : (
              "Change Password"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}