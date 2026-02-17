interface Props {
  isLoggedIn: boolean;
  user: any;
}

export default function MyAccountTab({ isLoggedIn, user }: Props) {
  if (!isLoggedIn) {
    return (
      <div className="flex justify-between items-center bg-white rounded-[20px] p-8 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            You are not logged in.
          </h2>
          <p className="text-gray-500">
            Login to your account view account details
          </p>
        </div>

        <button className="bg-[#FF6A00] text-white px-8 py-3 rounded-[10px]">
          Login Now
        </button>
      </div>
    );
  }

  return (
    <div className="w-[807px] h-full  rounded-[20px] px-[40px] py-[40px] space-y-[48px]">

      {/* ================= PERSONAL INFORMATION ================= */}
      <div className="space-y-[24px]">

        <h2 className="text-[20px] font-semibold text-[#2B2B2B]">
          Personal Information
        </h2>

        {/* Avatar Section */}
        <div className="flex justify-center items-center gap-[64px] py-4">

          {/* Upload Image */}
          <div className="flex flex-col items-center">
            <div className="w-[96px] h-[96px] rounded-full border-[3px] border-[#FF6A00] overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=12"
                className="w-full h-full object-cover"
                alt="Profile"
              />
            </div>

            <p className="mt-3 text-[14px] font-medium">
              Upload Image
            </p>
            <button className="text-[#FF6A00] text-[12px] mt-1">
              Remove Image
            </button>
          </div>

          <span className="text-gray-400 text-[14px]">Or</span>

          {/* Upload Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-[96px] h-[96px] rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=5"
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>

            <p className="mt-3 text-[14px] font-medium">
              Upload Avatar
            </p>
            <button className="text-[#FF6A00] text-[12px] mt-1">
              Remove Avatar
            </button>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-[24px]">

          <div>
            <label className="text-[13px] text-gray-500">
              First Name
            </label>
            <input
              defaultValue={user.firstName}
              className="mt-2 w-full h-[52px] bg-white rounded-[10px] px-4 outline-none"
            />
          </div>

          <div>
            <label className="text-[13px] text-gray-500">
              Last Name
            </label>
            <input
              defaultValue={user.lastName}
              className="mt-2 w-full h-[52px] bg-white rounded-[10px] px-4 outline-none"
            />
          </div>

          <div>
            <label className="text-[13px] text-gray-500">
              Email
            </label>
            <input
              defaultValue={user.email}
              className="mt-2 w-full h-[52px] bg-gray-200 rounded-[10px] px-4 outline-none"
            />
          </div>

          <div className="flex gap-[16px]">

            <div className="flex-1">
              <label className="text-[13px] text-gray-500">
                Gender
              </label>
              <select className="mt-2 w-full h-[52px] bg-white rounded-[10px] px-4 outline-none">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="text-[13px] text-gray-500">
                Date Of Birth
              </label>
              <input
                type="date"
                className="mt-2 w-full h-[52px] bg-white rounded-[10px] px-4 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#E5E7EB]" />

      {/* ================= CONTACT INFORMATION ================= */}
      <div className="space-y-[24px]">

        <h2 className="text-[20px] font-semibold text-[#2B2B2B]">
          Contact Information
        </h2>

        <div className="grid grid-cols-2 gap-[24px]">

          {/* Phone */}
          <div>
            <label className="text-[13px] text-gray-500">
              Phone Number
            </label>

            <div className="flex mt-2 gap-[12px]">
              <div className="w-[70px] h-[52px] bg-white rounded-[10px] flex items-center justify-center">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  className="w-[24px]"
                  alt="India"
                />
              </div>

              <input
                defaultValue={user.phone}
                className="flex-1 h-[52px] bg-white rounded-[10px] px-4 outline-none"
              />
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="text-[13px] text-gray-500">
              Emergency Contact
            </label>

            <div className="flex mt-2 gap-[12px]">
              <div className="w-[70px] h-[52px] bg-white rounded-[10px] flex items-center justify-center">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  className="w-[24px]"
                  alt="India"
                />
              </div>

              <input
                defaultValue={user.phone}
                className="flex-1 h-[52px] bg-white rounded-[10px] px-4 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button className="w-[188px] h-[60px] bg-[#FF6A00] text-white rounded-[10px] font-medium">
        Save Changes
      </button>
    </div>
  );
}
