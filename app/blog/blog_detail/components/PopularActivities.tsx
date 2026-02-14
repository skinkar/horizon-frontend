import {
    Footprints,
    Building2,
    UtensilsCrossed,
    Landmark,
    Tent,
    Ship,
    Church,
    Bike,
    ShoppingBag,
    Soup,
} from "lucide-react";

const activities = [
    { label: "Walking Tours", count: 1178, icon: Footprints },
    { label: "City Tours", count: 466, icon: Building2 },
    { label: "Dinner Cruises", count: 65, icon: UtensilsCrossed },
    { label: "Art Museums", count: 88, icon: Landmark },
    { label: "Camp Stays", count: 7, icon: Tent },
    { label: "Cruises", count: 465, icon: Ship },
    { label: "Historic Temples Tours", count: 464, icon: Church },
    { label: "Bike Trips", count: 879, icon: Bike },
    { label: "Shopping Malls", count: 33, icon: ShoppingBag },
    { label: "Culinary Tours", count: 446, icon: Soup },
];

const PopularActivities = () => {
    return (
        <section className="bg-[#F2F4F6] py-12 px-4 md:px-8 font-gilroy-medium">
            <div className="mx-auto max-w-7xl text-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-gilroy-semibold text-slate-900 mb-4">
                    Explore Popular Activities
                </h2>

                {/* Description */}
                <p className="max-w-4xl mx-auto text-sm md:text-base text-slate-600 leading-relaxed mb-10">
                    Europe is full of iconic destinations, but some of its true treasures
                    lie off the beaten path. Explore our list of hidden gems, from the
                    picturesque village of Hallstatt in Austria to the stunning beaches of
                    Montenegro. Find out why these lesser-known spots should be on your
                    travel radar.
                </p>

                {/* Pills */}
                <div className="flex flex-wrap justify-center gap-3">
                    {activities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={index}
                                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-800 hover:shadow-md transition"
                            >
                                <Icon className="w-4 h-4 text-slate-700" />
                                <span>
                                    {item.label} ({item.count})
                                </span>
                            </button>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default PopularActivities;
