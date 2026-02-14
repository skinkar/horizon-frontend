'use client'
import React, { useState } from "react";
import {
    Calendar,
    ChevronLeft,
    ChevronRight,
    Star,
    MapPin,
    Waves,
    Wine,
    Sparkles,
    Heater,
    ChevronDown,
    Share2,
    Square,
    Users,
    Check
} from "lucide-react";

interface RoomOption {
    label: string;
    price: number;
}

interface Room {
    id: string;
    name: string;
    image: string;
    options: RoomOption[];
}

interface Hotel {
    id: string;
    name: string;
    distance: string;
    image: string;
    location: string;
    upgradePrice: number;
    amenities: string[];
    rooms: Room[];
}

const locations = [
    { id: "delhi", name: "Delhi", dates: "Sat, 24 Jun - Mon, 26 Jun" },
    { id: "manali", name: "Manali", dates: "Tue, 27 Jun - Thu, 29 Jun" },
    { id: "shimla", name: "Shimla", dates: "Fri, 30 Jun - Sat, 01 Jul" },
    { id: "kullu", name: "Kullu", dates: "Sun, 02 Jul - Mon, 03 Jul" },
];

const dummyRooms: Room[] = [
    {
        id: "r1",
        name: "Superior Room",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400",
        options: [
            { label: "Room Only", price: -1100 },
            { label: "Room + Breakfast", price: 0 },
            { label: "Room + Breakfast + Dinner", price: 200 },
            { label: "Room + Breakfast + Lunch + Dinner", price: 500 },
        ],
    },
    {
        id: "r2",
        name: "Premium Room",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=400",
        options: [
            { label: "Room Only", price: -1100 },
            { label: "Room + Breakfast", price: 0 },
            { label: "Room + Breakfast + Dinner", price: 200 },
            { label: "Room + Breakfast + Lunch + Dinner", price: 500 },
        ],
    },
    {
        id: "r3",
        name: "Deluxe Room",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=400",
        options: [
            { label: "Room Only", price: -1100 },
            { label: "Room + Breakfast", price: 0 },
            { label: "Room + Breakfast + Dinner", price: 200 },
            { label: "Room + Breakfast + Lunch + Dinner", price: 500 },
        ],
    },
];

const hotels: Record<string, Hotel[]> = {
    delhi: [
        {
            id: "1",
            name: "Lemon Tree Premier Hotel",
            distance: "0.5 Km away from Atal Tunnel",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400",
            location: "Mayur Vihar, Delhi",
            upgradePrice: 0,
            amenities: ["Pool", "In-house Bar", "Spa", "Hot Tub"],
            rooms: dummyRooms,
        },
        {
            id: "2",
            name: "Radisson Blu Marina Hotel",
            distance: "1.2 Km away from Metro",
            image: "https://images.unsplash.com/photo-1551882547-ff43c63faf79?auto=format&fit=crop&q=80&w=400",
            location: "Connaught Place, Delhi",
            upgradePrice: 1500,
            amenities: ["Pool", "Gym", "Restaurant"],
            rooms: dummyRooms,
        },
    ],
    manali: [],
    shimla: [],
    kullu: [],
};

const HotelAvailability = () => {
    const [selectedLoc, setSelectedLoc] = useState("delhi");
    const [selectedStars, setSelectedStars] = useState(3);
    const [selectedHotels, setSelectedHotels] = useState<Record<string, { roomId: string; optionIndex: number }>>({});

    const handleSelectHotel = (hotelId: string, roomId: string, optionIndex: number) => {
        setSelectedHotels(prev => ({
            ...prev,
            [hotelId]: { roomId, optionIndex }
        }));
    };

    const handleRemoveHotel = (hotelId: string) => {
        setSelectedHotels(prev => {
            const newState = { ...prev };
            delete newState[hotelId];
            return newState;
        });
    };

    return (
        <div className="py-12 border-t border-gray-200">
            <div className="flex flex-col lg:flex-row justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-gilroy-semibold text-[#16242A]">Check Availability</h2>
                </div>
                <button className="flex items-center gap-2 text-[#FF6A00] font-gilroy-semibold text-sm">
                    <Calendar size={16} />
                    Change Dates
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-full space-y-8">
                    {/* LOCATION TABS */}
                    <div className="relative group">
                        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
                            {locations.map((loc) => (
                                <button
                                    key={loc.id}
                                    onClick={() => setSelectedLoc(loc.id)}
                                    className={`min-w-[200px] p-4 rounded-xl border text-center transition-all ${selectedLoc === loc.id
                                        ? "border-[#FF6A00] bg-white ring-1 ring-[#FF6A00]"
                                        : "border-gray-200 bg-white hover:border-gray-300"
                                        }`}
                                >
                                    <p className={`font-gilroy-bold text-base mb-1 ${selectedLoc === loc.id ? "text-[#FF6A00]" : "text-[#16242A]"}`}>
                                        {loc.name}
                                    </p>
                                    <p className="text-[10px] font-gilroy-medium text-gray-500 uppercase tracking-wider">
                                        {loc.dates}
                                    </p>
                                </button>
                            ))}
                        </div>
                        <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronLeft size={18} />
                        </button>
                        <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    {/* STAR RATING SELECTOR */}
                    <div>
                        <p className="text-base font-gilroy-bold text-[#16242A] mb-4">Select Your Hotel Type</p>
                        <div className="grid grid-cols-3 gap-4 max-w-2xl">
                            {[3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setSelectedStars(star)}
                                    className={`py-3 rounded-xl border font-gilroy-bold text-sm flex items-center justify-center gap-1 transition-all ${selectedStars === star
                                        ? "bg-[#FF6A00] text-white border-[#FF6A00]"
                                        : "bg-white text-[#16242A] border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    {star} <Star size={14} fill={selectedStars === star ? "white" : "none"} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* HOTEL LIST */}
                    <div className="space-y-4">
                        {(hotels[selectedLoc] || []).length > 0 ? (
                            hotels[selectedLoc].map((hotel) => (
                                <HotelCard
                                    key={hotel.id}
                                    hotel={hotel}
                                    selectedState={selectedHotels[hotel.id]}
                                    onSelect={(roomId, optIdx) => handleSelectHotel(hotel.id, roomId, optIdx)}
                                    onRemove={() => handleRemoveHotel(hotel.id)}
                                />
                            ))
                        ) : (
                            <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-gray-200">
                                <p className="text-gray-400 font-gilroy-medium">No hotels found for this selection.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

function HotelCard({
    hotel,
    selectedState,
    onSelect,
    onRemove
}: {
    hotel: Hotel;
    selectedState?: { roomId: string; optionIndex: number };
    onSelect: (roomId: string, optionIndex: number) => void;
    onRemove: () => void;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm group transition-all duration-300">
            <div className="flex flex-col md:flex-row relative">
                {/* SELECTED BADGE */}
                {selectedState && (
                    <div className="absolute top-4 right-24 z-10 px-3 py-1 bg-[#E1F7F7] text-[#2B6F82] text-[10px] font-gilroy-bold rounded-full border border-[#2B6F82]/10 uppercase tracking-tighter">
                        Selected
                    </div>
                )}

                <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                    <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="p-6 flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-gilroy-bold text-[#16242A] mb-1">{hotel.name}</h3>
                            <p className="text-xs font-gilroy-medium text-gray-400 mb-4">{hotel.distance}</p>

                            <div className="flex flex-wrap gap-4">
                                {hotel.amenities.map((amenity) => (
                                    <div key={amenity} className="flex items-center gap-1.5 text-[#16242A]">
                                        {getAmenityIcon(amenity)}
                                        <span className="text-[11px] font-gilroy-medium">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="flex items-baseline justify-end gap-1 mb-1">
                                <span className="text-gray-900 font-gilroy-bold text-xl">+ ₹ {hotel.upgradePrice}</span>
                            </div>
                            <p className="text-[10px] font-gilroy-medium text-[#FF6A00] mb-3">₹ 0 Booking Fees</p>

                            <div className="flex gap-2">
                                {selectedState ? (
                                    <>
                                        <button
                                            onClick={onRemove}
                                            className="border border-[#FF6A00] text-[#FF6A00] px-4 py-2.5 rounded-lg text-sm font-gilroy-bold hover:bg-orange-50 transition-colors"
                                        >
                                            Remove Stay
                                        </button>
                                        <button
                                            onClick={() => setIsExpanded(!isExpanded)}
                                            className="bg-[#FF6A00] text-white px-4 py-2.5 rounded-lg text-sm font-gilroy-bold hover:bg-[#e65f00] transition-colors"
                                        >
                                            {isExpanded ? "Close Rooms" : "Edit Stay"}
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="bg-[#FF6A00] text-white px-6 py-2.5 rounded-lg text-sm font-gilroy-bold hover:bg-[#e65f00] transition-colors"
                                    >
                                        {isExpanded ? "Close Rooms" : "Book Now"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto px-6 py-3 bg-[#EBF9FF] flex justify-between items-center">
                        <div className="flex items-center gap-1.5 text-[#00A3FF]">
                            <MapPin size={14} />
                            <span className="text-xs font-gilroy-bold">{hotel.location}</span>
                        </div>
                        <button className="text-[#00A3FF] text-xs font-gilroy-bold flex items-center gap-1 hover:underline">
                            More Details
                            <ChevronDown size={14} className="-rotate-90" />
                        </button>
                    </div>
                </div>
            </div>

            {/* EXPANDED ROOM SELECTION */}
            {isExpanded && (
                <div className="p-6 border-t border-gray-100 bg-gray-50/30 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
                        {hotel.rooms.map((room) => (
                            <RoomCard
                                key={room.id}
                                room={room}
                                isCurrentSelectedRoom={selectedState?.roomId === room.id}
                                currentOptionIndex={selectedState?.roomId === room.id ? selectedState.optionIndex : 1} // Index 1 is the +0 option
                                onSelectRoom={(optIdx) => {
                                    onSelect(room.id, optIdx);
                                    setIsExpanded(false);
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function RoomCard({
    room,
    isCurrentSelectedRoom,
    currentOptionIndex,
    onSelectRoom
}: {
    room: Room;
    isCurrentSelectedRoom: boolean;
    currentOptionIndex: number;
    onSelectRoom: (optionIndex: number) => void;
}) {
    const [localOptionIndex, setLocalOptionIndex] = useState(currentOptionIndex);

    return (
        <div className="min-w-[340px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <div className="relative h-40">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md flex items-center gap-1">
                    <Share2 size={12} className="text-white" />
                    <span className="text-[10px] font-gilroy-bold text-white">15+</span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h4 className="font-gilroy-bold text-base text-[#16242A] mb-4">{room.name}</h4>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                    <Amenity icon={<Square size={12} />} text="195 Sq ft" />
                    <Amenity icon={<MapPin size={12} />} text="Pool View" />
                    <Amenity icon={<Users size={12} />} text="Queen Bed" />
                </div>

                <button className="text-[11px] font-gilroy-bold text-[#FF6A00] hover:underline mb-6 text-left">More Details</button>

                <div className="space-y-3 mb-8">
                    {room.options.map((opt, idx) => (
                        <label key={idx} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${localOptionIndex === idx ? "border-[#FF6A00]" : "border-gray-300"}`}>
                                    {localOptionIndex === idx && <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />}
                                </div>
                                <input
                                    type="radio"
                                    className="hidden"
                                    name={`room-${room.id}`}
                                    checked={localOptionIndex === idx}
                                    onChange={() => setLocalOptionIndex(idx)}
                                />
                                <span className={`text-[11px] font-gilroy-medium ${localOptionIndex === idx ? "text-[#16242A]" : "text-gray-500"}`}>
                                    {opt.label}
                                </span>
                            </div>
                            <span className={`text-[11px] font-gilroy-bold ${opt.price > 0 ? "text-gray-900" : opt.price < 0 ? "text-green-600" : "text-[#FF6A00]"}`}>
                                {opt.price > 0 ? `+ ₹ ${opt.price}` : opt.price < 0 ? `- ₹ ${Math.abs(opt.price)}` : "+ ₹ 0"}
                            </span>
                        </label>
                    ))}
                    <div className="pt-2">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center">
                                <Check size={10} className="text-transparent" />
                            </div>
                            <span className="text-[11px] font-gilroy-medium text-gray-500">1 Extra Bed</span>
                            <span className="ml-auto text-[11px] font-gilroy-bold text-gray-900">+ ₹ 500</span>
                        </label>
                    </div>
                </div>

                <div className="mt-auto border-t border-gray-100 -mx-5 px-5 pt-4">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <p className="text-lg font-gilroy-bold text-[#16242A]">
                                {room.options[localOptionIndex].price >= 0 ? "+" : "-"} ₹ {Math.abs(room.options[localOptionIndex].price)}
                            </p>
                            <p className="text-[10px] font-gilroy-medium text-gray-400">Includes taxes and fees</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-gilroy-medium text-[#FF6A00]">₹ 0 Booking Fees</p>
                            <button
                                onClick={() => onSelectRoom(localOptionIndex)}
                                className="bg-[#FF6A00] text-white px-6 py-2 rounded-lg text-sm font-gilroy-bold hover:bg-[#e65f00] transition-colors mt-1"
                            >
                                Book Room
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Amenity({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-1.5 text-gray-400">
            {icon}
            <span className="text-[10px] font-gilroy-medium uppercase tracking-tight">{text}</span>
        </div>
    );
}

function getAmenityIcon(name: string) {
    switch (name.toLowerCase()) {
        case "pool": return <Waves size={14} className="text-gray-400" />;
        case "in-house bar": return <Wine size={14} className="text-gray-400" />;
        case "spa": return <Sparkles size={14} className="text-gray-400" />;
        case "hot tub": return <Heater size={14} className="text-gray-400" />;
        default: return null;
    }
}

export default HotelAvailability;
