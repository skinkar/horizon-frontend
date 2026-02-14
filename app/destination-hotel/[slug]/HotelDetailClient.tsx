"use client"

import HotelGallery from "./components/HotelGallery"
import HotelHeader from "./components/HotelHeader"
import RoomsSection from "./components/RoomsSection"
import AmenitiesSection from "./components/AmenitiesSection"
import HotelPolicies from "./components/HotelPolicies"
import ReviewsSection from "./components/ReviewsSection"
import NearbySection from "./components/NearbySection"

export default function HotelDetailClient() {
  return (
    <main className="bg-white">

      <HotelGallery />
      <HotelHeader />
      <RoomsSection />
      <AmenitiesSection />
      <HotelPolicies />
      <ReviewsSection />
      <NearbySection />

    </main>
  )
}
