"use client";

import { useEffect, useState } from "react";

const sections = [
    {
        id: "intro",
        title: "Introduction: Beyond The Tourist Trail",
    },
    {
        id: "hidden-gems",
        title: "The Hidden Gems: 10 Must-See Spots",
    },
    {
        id: "why-listed",
        title: "Why These Places Made The List",
    },
    {
        id: "final-thoughts",
        title: "Final Thoughts: Rediscovering Europe Quietly",
    },
];

const BlogContentWithTOC = () => {
    const [activeId, setActiveId] = useState<string>("intro");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
            }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-[#F2F4F6] px-6 md:px-8 py-16 font-gilroy-medium">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12">

                {/* ================= TOC ================= */}
                <aside className="hidden md:block">
                    <div className="sticky top-28">
                        <h4 className="text-sm font-gilroy-semibold text-slate-900 mb-4">
                            Table Of Content
                        </h4>

                        <ul className="space-y-3 text-sm">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        className={`block transition ${activeId === section.id
                                            ? "text-orange-500 font-gilroy-semibold"
                                            : "text-slate-600 hover:text-slate-900"
                                            }`}
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* ================= CONTENT ================= */}
                <article className="space-y-14 text-slate-700 leading-relaxed">

                    {/* Intro */}
                    <section id="intro" className="scroll-mt-32">
                        <h2 className="text-xl md:text-2xl font-gilroy-semibold text-slate-900 mb-4">
                            Introduction: Beyond The Tourist Trail
                        </h2>
                        <p className="mb-4">
                            Europe is known for its iconic destinations — Paris, Rome, Barcelona — but what about the places that don’t show up on your average postcard? Tucked between the big names are towns, villages, and coastal retreats that offer all the charm without the crowds. This guide is for the curious traveler eager to discover Europe’s quieter side.
                        </p>
                        <p className="mb-4">
                            Europe is known for its iconic destinations — Paris, Rome, Barcelona — but what about the places that don’t show up on your average postcard?
                        </p>
                        <p className="mb-4">
                            Europe is known for its iconic destinations — Paris, Rome, Barcelona — but what about the places that don’t show up on your average postcard? Tucked between the big names are towns to discover Europe’s quieter side.
                        </p>
                        <p className="mb-4">
                            Europe is known for its iconic destinations — Paris, Rome, Barcelona — but what about the places that don’t show up on your average postcard? Tucked between the big names are towns, villages, and coastal retreats that offer all the charm for the traveler eager to discover Europe’s quieter side.
                        </p>
                        <p className="mb-4">
                            Europe is known for its iconic destinations — Paris, Rome, Barcelona — but what about the places that don’t show up on your average postcard? Tucked between the big names are towns and villages that reveal Europe’s quieter side.
                        </p>
                    </section>

                    {/* Hidden Gems */}
                    <section id="hidden-gems" className="scroll-mt-32">
                        <h2 className="text-xl md:text-2xl font-gilroy-semibold text-slate-900 mb-6">
                            The Hidden Gems: 10 Must-See Spots
                        </h2>

                        <ol className="list-decimal pl-5 space-y-3 text-sm md:text-base">
                            <li>
                                <strong>Hallstatt, Austria</strong> – This fairytale lakeside village surrounded by the Dachstein Alps looks like it was made for postcards, yet often escapes mainstream itineraries. A peaceful alternative to Austria’s ski-heavy towns.
                            </li>

                            <li>
                                <strong>Albarracín, Spain</strong> – A medieval town painted in dusty pink and orange hues, Albarracín is perched on a cliff and wrapped in ancient walls, with narrow lanes and Moorish architecture.
                            </li>

                            <li>
                                <strong>Giethoorn, Netherlands</strong> – Nicknamed the “Venice of the North,” this idyllic Dutch village has no roads — only canals, boats, and bike paths.
                            </li>

                            <li>
                                <strong>Ronda, Spain</strong> – Dramatically set over a deep gorge, Ronda offers ancient bridges, sweeping views, and a rich cultural heritage that inspired Hemingway and Orson Welles.
                            </li>

                            <li>
                                <strong>Korčula, Croatia</strong> – Often overshadowed by Dubrovnik, Korčula is a quiet island with medieval walls, olive groves, and crystal-clear Adriatic waters.
                            </li>

                            <li>
                                <strong>Dinant, Belgium</strong> – With its dramatic cliffside citadel and saxophone-themed charm (it’s Adolphe Sax’s hometown), Dinant is a delight along the Meuse River.
                            </li>

                            <li>
                                <strong>Vipava Valley, Slovenia</strong> – A dream for wine lovers and cyclists, this fertile valley is Slovenia’s secret Tuscany, complete with hilltop villages and vineyard trails.
                            </li>

                            <li>
                                <strong>Rovinj, Croatia</strong> – Colorful facades, a hilltop church, and a waterfront promenade make Rovinj a relaxing escape that feels more Italian than Slavic.
                            </li>

                            <li>
                                <strong>Bay of Kotor, Montenegro</strong> – Far less crowded than nearby Croatia, this bay curves along a fjord-like coast dotted with old towns like Perast and Kotor.
                            </li>

                            <li>
                                <strong>Colmar, France</strong> – It feels like stepping into a storybook. With timber-framed houses, canals, and flowers everywhere, Colmar is a pastel dream in the Alsace region.
                            </li>

                        </ol>
                    </section>

                    {/* Why These */}
                    <section id="why-listed" className="scroll-mt-32">
                        <h2 className="text-xl md:text-2xl font-gilroy-semibold text-slate-900 mb-4">
                            Why These Places Made The List
                        </h2>

                        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                            <li>Travel in shoulder seasons for fewer crowds.</li>
                            <li>Choose family-run stays for authentic experiences.</li>
                            <li>Plan transport in advance for remote areas.</li>
                            <li>Learn a few local words — it goes a long way.</li>
                            <li>Respect local communities and travel responsibly.</li>
                        </ul>
                    </section>

                    {/* Final Thoughts */}
                    <section id="final-thoughts" className="scroll-mt-32">
                        <h2 className="text-xl md:text-2xl font-gilroy-semibold text-slate-900 mb-4">
                            Final Thoughts: Rediscovering Europe Quietly
                        </h2>
                        <p>
                            The real magic of Europe often hides in plain sight — in the unassuming
                            towns and serene landscapes just beyond the usual path. These hidden
                            gems promise a slower, deeper, and more personal travel experience.
                        </p>
                    </section>

                </article>
            </div>
        </section>
    );
};

export default BlogContentWithTOC;
