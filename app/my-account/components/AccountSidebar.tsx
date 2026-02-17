const menuItems = [
  { id: "my-account", label: "My Account" },
  { id: "account-security", label: "Account Security" },
  { id: "bookings", label: "My Bookings" },
  { id: "rewards", label: "Phoenix Fly Rewards" },
  { id: "tag", label: "Tag & Earn Rewards" },
  { id: "refer", label: "Refer & Earn Rewards" },
  { id: "advantage", label: "Phoenix Fly Advantage" },
  { id: "wallet", label: "My Wallet" },
  { id: "contact", label: "Contact & Support" },
  { id: "notifications", label: "Notification Settings" },
  { id: "feedback", label: "Feedback" },
];

export default function AccountSidebar({ activeTab, setActiveTab }: any) {
  return (
    <div className="w-[380px] p-[10px] space-y-[4px] bg-transparent">

      {menuItems.map((item) => {
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              w-[360px]
              h-[62px]
              px-[20px]
              rounded-[10px]
              text-left
              flex items-center
              transition-all duration-200
              ${
                isActive
                  ? "bg-[#FFE8D2] text-[#FF6A00] font-medium"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }
            `}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
