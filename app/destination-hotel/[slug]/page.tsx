import HotelDetailClient from "./HotelDetailClient"

export default function Page({ params }: { params: { slug: string } }) {


  const hotel = {
    name: "Royal Saray Resort",
    location: "Udaipur, Rajasthan",
    rating: 4.5,
    reviewsCount: 124,
    price: 8500,

    images: [
      "/destination-hotel/hotel1.png",
      "/destination-hotel/hotel2.png",
      "/destination-hotel/hotel3.png",
      "/destination-hotel/hotel4.png",
      "/destination-hotel/hotel5.png",
      "/destination-hotel/hotel6.png",
    ],
  }

  return <HotelDetailClient />
}
