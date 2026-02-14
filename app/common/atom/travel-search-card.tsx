import {
    Calendar,
    ChevronDown,
    CheckSquare,
    Square,
    Users,
    Plane,
} from "lucide-react";

export default function TravelSearchCard() {
    return (
        <section className="px-8 py-16">
            <div className="w-full max-w-6xl mx-auto">
                <div className="w-full bg-[#B3E5F1] rounded-xl p-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <InputBox label="Leaving From" value="Delhi" />
                        <InputBox label="Destination" value="Chandigarh" />
                        <InputBox
                            label="Travellers"
                            value="2 Travellers, 1 Room"
                            icon={<Users size={18} />}
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <SelectBox label="Theme" value="Romantic Travel" />
                        <DateBox label="Departure" value="21-05" />
                        <DateBox label="Return" value="25-05" />
                    </div>

                    {/* Flight Added */}
                    <div className="flex items-center gap-2 mt-4 text-sm font-gilroy-medium text-gray-800">
                        <CheckSquare size={18} className="text-black" />
                        Flight Added
                        <Plane size={16} />
                        <ChevronDown size={16} />
                    </div>

                </div>
                {/* Options */}
                <div className="mt-6 space-y-3 text-sm font-gilroy-medium text-gray-700">
                    <Option label="Don’t Add Return Flight" checked={false} />
                    <Option label="Don’t Add Cab" checked={false} />
                </div>

                {/* Search */}
                <button className="mt-6 w-64 rounded-lg bg-[#e6762e] py-3 text-white font-gilroy-semibold hover:opacity-90">
                    Search
                </button>
            </div>
        </section>
    );
}

/* ---------------- Components ---------------- */

function InputBox({
    label,
    value,
    icon,
}: {
    label: string;
    value: string;
    icon?: React.ReactNode;
}) {
    return (
        <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-sm font-gilroy-semibold">{value}</p>
            </div>
            {icon}
        </div>
    );
}

function SelectBox({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-sm font-gilroy-medium">{value}</p>
            </div>
            <ChevronDown size={18} />
        </div>
    );
}

function DateBox({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-sm font-gilroy-semibold">{value}</p>
            </div>
            <Calendar size={18} />
        </div>
    );
}

function Option({
    label,
    checked,
}: {
    label: string;
    checked: boolean;
}) {
    return (
        <div className="flex items-center gap-2 cursor-pointer">
            {checked ? (
                <CheckSquare size={18} />
            ) : (
                <Square size={18} />
            )}
            {label}
        </div>
    );
}
