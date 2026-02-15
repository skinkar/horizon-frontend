"use client"

import { Users, BedDouble, Coffee, MapPin } from "lucide-react"

export default function HotelInfoBar() {
  return (
    <div className="border-t border-gray-200 mt-6 pt-5">

      <div className="flex gap-10 text-sm text-gray-700">

        <div className="flex items-center gap-2">
          <BedDouble size={18} />
          30 Rooms
        </div>

        <div className="flex items-center gap-2">
          <Users size={18} />
          Max 150 Guests
        </div>

        <div className="flex items-center gap-2">
          <Coffee size={18} />
          Free Breakfast
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          Near Lake Pichola
        </div>

      </div>
    </div>
  )
}
