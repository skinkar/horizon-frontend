"use client"

import { Button } from "@/components/ui/button"
import {
    MapPin,
    IndianRupee,
    Layers,
    Route,
    ArrowRight,
    MessageCircle,
} from "lucide-react"

export default function CustomizeBooking() {
    return (
        <section className="w-full md:px-8 px-4 py-12">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="md:text-4xl text-3xl font-gilroy-semibold title-heading mb-3">
                        Customize Your Booking
                    </h2>
                    <p className="md:text-base text-sm font-gilroy-medium sub-title">
                        Customize every aspect of your journey to fit your budget,
                        schedule, and group dynamics.
                    </p>
                </div>

                {/* Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden bg-white shadow-sm">

                    {/* Left Gradient Panel */}
                    <div className="md:p-12 p-8 bg-gradient-to-br from-[#FFD9BD] to-[#B3E5F1]">
                        <h3 className="md:text-4xl text-3xl font-gilroy-semibold title-heading leading-tight mb-6 text-center md:text-left">
                            Let Our Experts Tailor A{" "}
                            <span className="text-orange-500">Customized Package</span>
                            That Caters To Your Preferences
                        </h3>

                        <button className="flex items-center gap-2 text-gray-800 font-gilroy-medium hover:gap-3 transition-all md:text-base text-sm text-center md:text-left">
                            Make Your Custom Itinerary Now!
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="p-6 md:p-12 md:py-16 flex flex-col justify-between">

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-6 md:gap-10 mb-10">

                            <Feature
                                icon={<Layers />}
                                title="100% Customized Trips"
                                desc="Tailor-made travel experiences just for you."
                            />

                            <Feature
                                icon={<Route />}
                                title="Multi-City Adventures"
                                desc="Visit multiple destinations in one seamless trip."
                            />

                            <Feature
                                icon={<MapPin />}
                                title="Instant & Flexible Planning"
                                desc="Pick your own dates that fits your schedule."
                            />

                            <Feature
                                icon={<IndianRupee />}
                                title="Budget-Friendly Trips"
                                desc="Smart recommendations that match your budget."
                            />
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col md:flex-row gap-4 font-gilroy-medium  md:mt-10">
                            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-lg w-full md:w-1/2">
                                Customize Now
                            </Button>

                            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-lg flex items-center gap-2 w-full md:w-1/2">
                                Whatsapp Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* Feature Item */
interface FeatureProps {
    icon: React.ReactNode
    title: string
    desc: string
}

function Feature({ icon, title, desc }: FeatureProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mb-3 text-orange-500">
                {icon}
            </div>
            <h4 className="font-gilroy-semibold text-gray-900 mb-1 text-center">
                {title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed text-center">
                {desc}
            </p>
        </div>
    )
}
