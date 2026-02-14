import { CalendarIcon } from "lucide-react";

const BlogDetailsHero = () => {
    return (
        <section className="w-full px-4 md:px-8 py-12 pt-20 bg-[#F2F4F6] font-gilroy-medium">
            <div className="mx-auto max-w-7xl">

                {/* Title & Description */}
                <div className="max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-gilroy-semibold leading-tight text-slate-900 mb-4">
                        Top 10 Hidden Gems In Europe
                    </h1>

                    <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-6">
                        Europe is full of iconic destinations, but some of its true treasures
                        lie off the beaten path. Explore our list of hidden gems, from the
                        picturesque village of Hallstatt in Austria to the stunning beaches of
                        Montenegro. Find out why these lesser-known spots should be on your
                        travel radar.
                    </p>

                    {/* Author & Date */}
                    <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="author"
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="font-gilroy-medium text-slate-800">
                                Tarun Singh
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="inline-block rounded-sm text-xs">
                                <CalendarIcon className="w-4 h-4" />
                            </span>
                            <span>08 May, 2025</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="mt-10 rounded-3xl">
                    <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1600"
                        alt="Traveler standing in front of a waterfall"
                        className="h-[420px] w-full rounded-[1.4rem] object-cover md:h-[480px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default BlogDetailsHero;
