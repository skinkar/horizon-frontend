"use client";

import { Search } from "lucide-react";
import { useState } from "react";

interface Props {
  onSearch?: (value: string) => void;
}

export default function AccountSearch({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch?.(value); // future backend ready
  };

  return (
    <div className="flex justify-center my-8">
      <div className="relative w-[480px]">
        
        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search in My Account"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="
            w-full
            h-[52px]
            rounded-full
            bg-[#F1F2F4]
            pl-12
            pr-6
            text-sm
            outline-none
            focus:ring-2
            focus:ring-[#FF6A00]/30
            transition
          "
        />
      </div>
    </div>
  );
}
