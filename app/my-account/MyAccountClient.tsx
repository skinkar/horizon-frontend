"use client";

import { useState } from "react";
import AccountHero from "./components/AccountHero";
import AccountSidebar from "./components/AccountSidebar";
import MyAccountTab from "./components/tabs/MyAccountTab";
import AccountSecurityTab from "./components/tabs/AccountSecurityTab";
import AccountSearch from "./components/AccountSearch";

export default function MyAccountClient() {
  const [activeTab, setActiveTab] = useState("my-account");

  const isLoggedIn = true;

  const user = {
    firstName: "Tarun",
    lastName: "Singh",
    email: "tsingh5473@gmail.com",
    phone: "9864851324",
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <AccountHero isLoggedIn={isLoggedIn} user={user} />
      <AccountSearch onSearch={(value) => console.log(value)} />

      <div className="mt-10 flex gap-8">
        <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1">
          {activeTab === "my-account" && (
            <MyAccountTab isLoggedIn={isLoggedIn} user={user} />
          )}

          {activeTab === "account-security" && <AccountSecurityTab />}
        </div>
      </div>
    </div>
  );
}
