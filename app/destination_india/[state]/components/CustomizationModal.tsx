"use client"

import React, { useState } from 'react'
import { X, Star, CheckCircle2, Calendar, MapPin, BadgeDollarSign, ChevronLeft, Minus, Plus, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
interface CustomizationModalProps {
  isOpen: boolean
  onClose: () => void
  stateName: string
  theme: any
}


const CustomizationModal = ({ isOpen, onClose, stateName }: CustomizationModalProps) => {
    const [step, setStep] = useState(1)
    const [selectedDestinations, setSelectedDestinations] = useState<string[]>(['Manali', 'Srinagar', 'Jaipur', 'Delhi'])
    const [selectedTheme, setSelectedTheme] = useState<string | null>(null)
    const [dateRange, setDateRange] = useState<{ from: string; to: string } | null>(null)
    const [departureCity, setDepartureCity] = useState("Lucknow")
    const [selectedBudget, setSelectedBudget] = useState<string | null>(null)

    if (!isOpen) return null

    const removeDestination = (dest: string) => {
        setSelectedDestinations(selectedDestinations.filter(d => d !== dest))
    }

    const themes = [
        { id: 'solo', title: 'Solo Travel', desc: 'Travel solo and enjoy your peaceful journey', image: '/themes/solo.jpg', label: 'Solo Trip' },
        { id: 'romantic', title: 'Romantic Travel', desc: 'Travel with your partner to the most beautiful places', image: '/themes/romantic.jpg', label: 'Romantic Trip' },
        { id: 'family', title: 'Family Travel', desc: 'Travel with your loved ones & enjoy your journey', image: '/themes/family.jpg', label: 'Family Trip' },
        { id: 'adventure', title: 'Adventure Travel', desc: 'Go through mountains, peaks and hills', image: '/themes/adventure.jpg', label: 'Adventure Trip' },
    ]


    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-5xl overflow-auto rounded-lg bg-white shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>

                <div className="flex flex-col p-8 md:p-12 md:h-[90vh]">
                    {/* Header: Context & Stepper */}
                    {step < 6 && (
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar">
                                <span className="flex items-center gap-1 shrink-0 rounded-full border border-gray-200 px-3 py-1 text-sm font-gilroy-medium text-gray-700">
                                    {stateName} <X className="h-3 w-3 cursor-pointer" />
                                </span>
                                {selectedDestinations.length > 0 && step >= 2 && (
                                    <span className="flex items-center gap-1 shrink-0 rounded-full border border-gray-200 px-3 py-1 text-sm font-gilroy-medium text-gray-700">
                                        {selectedDestinations.length} Places Added <X className="h-3 w-3 cursor-pointer" />
                                    </span>
                                )}
                                {step >= 3 && (
                                    <span className="flex items-center gap-1 shrink-0 rounded-full border border-gray-200 px-3 py-1 text-sm font-gilroy-medium text-gray-700">
                                        8 Days <X className="h-3 w-3 cursor-pointer" />
                                    </span>
                                )}
                                {step >= 4 && selectedTheme && (
                                    <span className="flex items-center gap-1 shrink-0 rounded-full border border-gray-200 px-3 py-1 text-sm font-gilroy-medium text-gray-700">
                                        {themes.find(t => t.id === selectedTheme)?.label} <X className="h-3 w-3 cursor-pointer" />
                                    </span>
                                )}
                                {step >= 5 && (
                                    <span className="flex items-center gap-1 shrink-0 rounded-full border border-gray-200 px-3 py-1 text-sm font-gilroy-medium text-gray-700">
                                        {departureCity} <X className="h-3 w-3 cursor-pointer" />
                                    </span>
                                )}
                            </div>

                            {/* Stepper */}
                            <div className="flex w-full gap-2">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div
                                        key={i}
                                        className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-primary-orange' : 'bg-gray-100'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step Content */}
                    <div className="flex-1 flex flex-col items-center justify-center relative">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full flex flex-col items-center text-center"
                                >
                                    <h2 className="mb-8 font-gilroy-bold text-2xl md:text-3xl text-gray-900">
                                        Pick your must-visit destinations
                                    </h2>
                                    <div className="w-full max-w-2xl">
                                        <div className="relative mb-6">
                                            <label className="absolute -top-2 left-4 bg-white px-2 text-xs text-gray-400">
                                                Select Destination(s)
                                            </label>
                                            <div className="flex min-h-[56px] w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-2 text-left">
                                                <span className="text-gray-900 font-gilroy-medium">Manali</span>
                                                <X className="h-4 w-4 text-gray-400" />
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                                            {selectedDestinations.map((dest) => (
                                                <span
                                                    key={dest}
                                                    className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-gilroy-medium text-gray-700 shadow-sm"
                                                >
                                                    {dest}
                                                    <X
                                                        className="h-3 w-3 cursor-pointer text-gray-400 hover:text-gray-600"
                                                        onClick={() => removeDestination(dest)}
                                                    />
                                                </span>
                                            ))}
                                        </div>

                                        <div className="relative mb-12 flex justify-center">

                                            <Button
                                                onClick={() => setStep(2)}
                                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A2B3D] hover:bg-[#2A3B4D] text-white px-12 py-6 rounded-xl font-gilroy-bold"
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full flex flex-col items-center text-center"
                                >
                                    <div className="absolute left-0 top-0">
                                        <button onClick={() => setStep(1)} className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
                                            <ChevronLeft className="h-4 w-4" /> Back
                                        </button>
                                    </div>
                                    <h2 className="mb-8 font-gilroy-bold text-2xl md:text-3xl text-gray-900">
                                        Select your travel dates
                                    </h2>
                                    <div className="w-full max-w-xl bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
                                        {/* Simple Calendar UI */}
                                        <div className="flex items-center justify-between mb-6 px-2">
                                            <span className="font-gilroy-bold text-gray-900">May 2024</span>
                                            <div className="flex gap-4">
                                                <button className="text-gray-400">{"<"}</button>
                                                <button className="text-gray-400">{">"}</button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2 mb-4">
                                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                <div key={day} className="text-[10px] text-gray-400 font-gilroy-medium">{day}</div>
                                            ))}
                                            {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
                                                <div
                                                    key={date}
                                                    className={`h-10 flex items-center justify-center rounded-lg text-sm font-gilroy-medium cursor-pointer transition-colors
                                                        ${date >= 20 && date <= 28 ? 'bg-primary-orange text-white' : 'hover:bg-gray-50 text-gray-700'}
                                                        ${date === 20 ? 'rounded-r-none' : ''}
                                                        ${date === 28 ? 'rounded-l-none' : ''}
                                                    `}
                                                >
                                                    {date}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <div className="text-left">
                                                <div className="text-[10px] text-gray-400 font-gilroy-medium uppercase">Selection Dates</div>
                                                <div className="text-sm font-gilroy-bold text-gray-900 flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" /> Tue 20 May - Wed 28 May 2024
                                                </div>
                                            </div>
                                            <button className="text-xs font-gilroy-bold text-primary-orange uppercase">Decide Later</button>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => setStep(3)}
                                        className="bg-[#1A2B3D] hover:bg-[#2A3B4D] text-white px-12 py-6 rounded-xl font-gilroy-bold"
                                    >
                                        Next
                                    </Button>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full flex flex-col items-center text-center"
                                >
                                    <div className="absolute left-0 top-0">
                                        <button onClick={() => setStep(2)} className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
                                            <ChevronLeft className="h-4 w-4" /> Back
                                        </button>
                                    </div>
                                    <h2 className="mb-8 font-gilroy-bold text-2xl md:text-3xl text-gray-900">
                                        What's your trip theme?
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-12">
                                        {themes.map((theme) => (
                                            <div
                                                key={theme.id}
                                                onClick={() => setSelectedTheme(theme.id)}
                                                className={`relative group cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-300
                                                    ${selectedTheme === theme.id ? 'border-primary-orange shadow-[0_10px_30px_-10px_rgba(255,107,0,0.3)]' : 'border-transparent hover:border-gray-200'}
                                                `}
                                            >
                                                <div className="aspect-3/4 overflow-hidden">
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                                    <img
                                                        src={theme.image}
                                                        alt={theme.title}
                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=300&h=400';
                                                        }}
                                                    />
                                                </div>
                                                <div className="absolute bottom-0 left-0 right-0 p-4 text-left z-20">
                                                    <div className={`mb-1 h-1 w-8 rounded-full transition-colors ${selectedTheme === theme.id ? 'bg-primary-orange' : 'bg-white'}`} />
                                                    <h3 className="text-sm font-gilroy-bold text-white mb-1">{theme.title}</h3>
                                                    <p className="text-[10px] text-white/80 line-clamp-2 leading-tight">
                                                        {theme.desc}
                                                    </p>
                                                </div>
                                                {selectedTheme === theme.id && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="absolute top-3 right-3 z-30 flex h-6 w-6 items-center justify-center rounded-full bg-primary-orange shadow-md"
                                                    >
                                                        <CheckCircle2 className="h-4 w-4 text-white" />
                                                    </motion.div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <Button
                                        onClick={() => setStep(4)}
                                        className="bg-[#1A2B3D] hover:bg-[#2A3B4D] disabled:bg-gray-300 text-white px-12 py-6 rounded-xl font-gilroy-bold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 mt-[-20px]"
                                        disabled={!selectedTheme}
                                    >
                                        Next
                                    </Button>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full flex flex-col items-center text-center"
                                >
                                    <div className="absolute left-0 top-0">
                                        <button onClick={() => setStep(3)} className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
                                            <ChevronLeft className="h-4 w-4" /> Back
                                        </button>
                                    </div>
                                    <h2 className="mb-8 font-gilroy-bold text-2xl md:text-3xl text-gray-900">
                                        Where are you travelling from?
                                    </h2>
                                    <div className="w-full max-w-2xl">
                                        <div className="relative mb-8">
                                            <label className="absolute -top-2 left-4 bg-white px-2 text-xs text-gray-400">
                                                Select Departure City
                                            </label>
                                            <div className="flex min-h-[56px] w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-2 text-left">
                                                <span className="text-gray-900 font-gilroy-medium">{departureCity}</span>
                                                <ChevronDown className="h-4 w-4 text-gray-400" />
                                            </div>
                                        </div>

                                        <div className="relative mb-12 flex justify-center mt-8">
                                            <div className="w-64 h-64 opacity-20 pointer-events-none">
                                                <svg viewBox="0 0 200 200" fill="currentColor" className="text-gray-300">
                                                    <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                                                    <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                                                    <MapPin className="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                                                </svg>
                                            </div>
                                            <Button
                                                onClick={() => setStep(5)}
                                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A2B3D] hover:bg-[#2A3B4D] text-white px-12 py-6 rounded-xl font-gilroy-bold shadow-lg"
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full flex flex-col items-center text-center"
                                >
                                    <div className="absolute left-0 top-0">
                                        <button onClick={() => setStep(4)} className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
                                            <ChevronLeft className="h-4 w-4" /> Back
                                        </button>
                                    </div>
                                    <h2 className="mb-8 font-gilroy-bold text-2xl md:text-3xl text-gray-900">
                                        Tell us your estimated budget
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mb-12">
                                        {[
                                            '10K - 50K INR', '50K - 1L INR', '1L - 2L INR',
                                            '2L - 3L INR', '3L - 4L INR', '5L INR Or Above'
                                        ].map((budget) => (
                                            <button
                                                key={budget}
                                                onClick={() => setSelectedBudget(budget)}
                                                className={`h-14 rounded-xl border transition-all duration-300 font-gilroy-medium text-sm
                                                    ${selectedBudget === budget
                                                        ? 'border-primary-orange bg-white text-gray-900 shadow-md'
                                                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}
                                                `}
                                            >
                                                {budget}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="relative mb-12 flex justify-center mt-[-20px]">
                                        <div className="w-64 h-64 opacity-20 pointer-events-none">
                                            <svg viewBox="0 0 200 200" fill="currentColor" className="text-gray-300">
                                                <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                                                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                                            </svg>
                                        </div>
                                        <Button
                                            onClick={() => setStep(6)}
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A2B3D] hover:bg-[#2A3B4D] text-white px-12 py-6 rounded-xl font-gilroy-bold shadow-lg"
                                            disabled={!selectedBudget}
                                        >
                                            Create Itinerary
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 6 && (
                                <motion.div
                                    key="step6"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full max-w-md bg-white rounded-3xl p-12 text-center"
                                >
                                    <h2 className="mb-4 font-gilroy-bold text-2xl text-primary-orange">
                                        Request Received Successfully!!
                                    </h2>
                                    <p className="mb-8 text-gray-600 font-gilroy-medium text-sm leading-relaxed">
                                        Our team representative will promptly reach out to you to facilitate the booking of your seamless travel experience.
                                    </p>
                                    <Button
                                        onClick={onClose}
                                        className="bg-[#1A2B3D] hover:bg-[#2A3B4D] text-white px-10 py-5 rounded-xl font-gilroy-bold transition-all duration-300 shadow-lg active:scale-95"
                                    >
                                        Explore Packages
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer */}
                    {step < 6 && (
                        <div className="mt-auto flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-8 gap-6">
                            {/* Rating */}
                            <div className="flex items-center gap-4">
                                <div className="text-left py-2 px-4 border-r border-gray-100">
                                    <div className="flex items-center gap-1 font-gilroy-bold text-gray-900">
                                        4.5 <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <div className="text-xs text-gray-400 font-gilroy-medium">6500+ Reviews</div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                                        <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] md:text-xs font-gilroy-bold text-gray-900 leading-tight">100% Customized</div>
                                        <div className="text-[10px] md:text-[10px] text-gray-400">Trips</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                                        <Calendar className="h-5 w-5 text-cyan-500" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] md:text-xs font-gilroy-bold text-gray-900 leading-tight">Instant & Flexible</div>
                                        <div className="text-[10px] md:text-[10px] text-gray-400">Planning</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                                        <MapPin className="h-5 w-5 text-cyan-500" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] md:text-xs font-gilroy-bold text-gray-900 leading-tight">Multi-City</div>
                                        <div className="text-[10px] md:text-[10px] text-gray-400">Adventures</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                                        <BadgeDollarSign className="h-5 w-5 text-cyan-500" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] md:text-xs font-gilroy-bold text-gray-900 leading-tight">Budget-Friendly</div>
                                        <div className="text-[10px] md:text-[10px] text-gray-400">Trips</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CustomizationModal
