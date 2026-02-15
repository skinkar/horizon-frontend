"use client";

import HotelGallery from "./components/HotelGallery";
import HotelHeader from "./components/HotelHeader";
import HotelInfoBar from "./components/HotelInfoBar";
import RoomsSection from "./components/RoomsSection";
import AmenitiesSection from "./components/AmenitiesSection";
import AboutSection from "./components/AboutSection";
import ReviewsSection from "./components/ReviewsSection";
import NearbySection from "./components/NearbySection";
import SimilarHotels from "./components/PopularHotels";
import HotelTabs from "./components/HotelTabs";
import Policies from "@/app/listing/package-listing/package-details/components/Policies";
import PopularHotels from "./components/PopularHotels";
import PopularRestaurants from "./components/PopularRestaurants";
import PopularThingsToDo from "./components/PopularThingsToDo";

/* ================= DUMMY HOTEL DATA (Backend Ready Structure) ================= */

const hotelData = {
  name: "Royal Saray Resort",
  starRating: 4,
  address:
    "8591, Arakashan Road, Pahar Ganj, Uttar Pradesh and NCR, India, 110055",

  images: [
    "/destination-hotel/hotel1.png",
    "/destination-hotel/hotel2.png",
    "/destination-hotel/hotel3.png",
    "/destination-hotel/hotel4.png",
    "/destination-hotel/hotel5.png",
  ],

  /* ================= ROOMS ================= */
  rooms: [
    {
      id: "1",
      title: "Superior Room",
      images: [
        "/destination-hotel/hotelroom1.png",
        "/destination-hotel/hotelroom2.png",
      ],
      size: "198 Sq.ft",
      view: "Pool View",
      bed: "Queen Bed",
    },
    {
      id: "2",
      title: "Premium Room",
      images: [
        "/destination-hotel/hotelroom2.png",
        "/destination-hotel/hotelroom3.png",
      ],
      size: "198 Sq.ft",
      view: "Pool View",
      bed: "Queen Bed",
    },
    {
      id: "3",
      title: "Luxury Suite",
      images: [
        "/destination-hotel/hotelroom3.png",
        "/destination-hotel/hotelroom2.png",
      ],
      size: "198 Sq.ft",
      view: "Pool View",
      bed: "Queen Bed",
    },
    {
      id: "4",
      title: "Diamond Suite",
      images: [
        "/destination-hotel/hotelroom3.png",
        "/destination-hotel/hotelroom2.png",
      ],
      size: "198 Sq.ft",
      view: "Pool View",
      bed: "Queen Bed",
    },
  ],

  /* ================= AMENITIES ================= */
  propertyAmenities: [
    {
      title: "Internet",
      items: ["Free WiFi in public areas"],
    },
    {
      title: "Parking & Public Transport",
      items: ["Free parking", "Paid airport transfers"],
    },
    {
      title: "Guest services",
      items: ["24-hour front desk", "Room service"],
    },
    {
      title: "Food & Drink",
      items: ["Restaurant on site", "In-house bar"],
    },
    {
      title: "Outdoors",
      items: ["Swimming pool", "Garden area"],
    },
    {
      title: "Spa",
      items: ["Full-service spa", "Steam room"],
    },
  ],

  roomAmenities: [
    {
      title: "Bedrooms",
      items: ["Air conditioning", "Wardrobe"],
    },
    {
      title: "Bathrooms",
      items: ["Private bathroom", "Shower"],
    },
    {
      title: "Entertainment",
      items: ["Flat-screen TV"],
    },
    {
      title: "Transport",
      items: ["Airport transfers available"],
    },
  ],

  /* ================= ABOUT SECTION ================= */
  about: {
    title: "Lemon Tree Premier, Agra", // 👈 ADD THIS
    subTitle: "4-star hotel located in South West",
    description:
      "At Lemon Tree Premier, Delhi Airport, you can look forward to a return airport shuttle, a poolside bar and a cafe. Treat yourself to a hot stone massage, hydrotherapy or Ayurvedic treatments at Fresco, the on-site spa. Enjoy international cuisine, a poolside location, and al fresco dining at the two on-site restaurants.",

    perks: [
      "An outdoor pool with sunloungers and pool umbrellas",
      "Free self-parking and valet parking",
      "Buffet breakfast (surcharge), a banquet hall and laundry services",
      "Luggage storage, tour/ticket information and 2 meeting rooms",
      "Guest reviews say good things about the dining options and helpful staff",
    ],

    roomFeatures:
      "All 280 individually furnished rooms include comforts such as 24-hour room service and premium bedding.",

    moreAmenities: [
      "Memory foam beds and rollaway beds",
      "Bathrooms with rainfall showers",
      "32-inch LCD TVs with premium channels",
      "Wardrobes and coffee/tea makers",
    ],

    languages: ["English", "Hindi"],
  },

  /* ================= SAFETY ================= */
  safety: {
    cleanliness: "Disinfectant is used to clean the property",
    socialDistancing: "Social distancing measures in place",
    safetyMeasures: [
      "Personal protective equipment worn by staff",
      "Masks and gloves available",
      "Hand sanitiser provided",
    ],
  },

  /* ================= POLICIES ================= */
  policies: {
    checkIn: [
      "Check-in from 2 PM - midnight",
      "Early check-in subject to availability",
      "Minimum check-in age - 18",
    ],
    checkOut: [
      "Check-out before noon",
      "Late check-out subject to availability",
    ],
    instructions: [
      "Guests must contact property 24 hours before arrival for airport transfers",
      "Negative COVID-19 test result required at check-in",
    ],
    accessMethods: "Staffed front desk",
    pets: "No pets or service animals allowed",
    children: [
      "Children are welcome",
      "2 children under 5 stay free using existing beds",
      "Rollaway beds available for INR 1500 per night",
    ],
    paymentTypes: ["Visa", "Mastercard"],
  },
};

const reviewsData = [
  {
    id: "1",
    rating: 5,
    title: "Excellent",
    user: "Tarun Singh",
    date: "Jul 08, 2023",
    category: "Family",
    stayType: "2-Night Stay",
    verified: true, // 👈 ADD THIS
    comment:
      "This was my third stay and I am not disappointed. Wonderful property and amazing staff.",
    images: [
      "/destination-hotel/review1.png",
      "/destination-hotel/review2.png",
    ],
    likes: 15,
    dislikes: 2,
    reply: {
      author: "Phoenix Fly", // 👈 change from admin
      role: "Admin", // 👈 add role
      date: "Jul 08, 2023",
      comment:
        "Thanks a lot for using our services. We would love to serve you again!", // 👈 change from message
    },
  },
];

/* ================= popularhotels ================= */
const similarHotelsData = [
  {
    id: "1",
    image: "/destination-hotel/hotelname1.jpg",
    name: "Lemon Tree Premier Hotel",
    location: "Uttar Pradesh",
    price: 5999,
    bookingFees: 0,
  },
  {
    id: "2",
    image: "/destination-hotel/hotelname1.jpg",
    name: "Lemon Tree Premier Hotel",
    location: "Uttar Pradesh",
    price: 5999,
    bookingFees: 0,
  },
  {
    id: "3",
    image: "/destination-hotel/hotelname1.jpg",
    name: "Lemon Tree Premier Hotel",
    location: "Uttar Pradesh",
    price: 5999,
    bookingFees: 0,
  },
  {
    id: "4",
    image: "/destination-hotel/hotelname1.jpg",
    name: "Lemon Tree Premier Hotel",
    location: "Uttar Pradesh",
    price: 5999,
    bookingFees: 0,
  },
];
/*popular restaurant*/
const restaurantsData = [
  {
    id: "1",
    image: "/destination-hotel/restaurant1.png",
    name: "Republic Of Noodles",
    cuisines: "Chinese, Italian, Continental, Thai",
    distance: "0.3 Km",
    from: "Lemon Tree Premier",
  },
  {
    id: "2",
    image: "/destination-hotel/restaurant2.png",
    name: "Citrus Cafe",
    cuisines: "Chinese, Italian, Continental",
    distance: "0.3 Km",
    from: "Lemon Tree Premier",
  },
  {
    id: "3",
    image: "/destination-hotel/restaurant3.png",
    name: "Clever Fox Cafe",
    cuisines: "Chinese, Italian, Continental",
    distance: "0.3 Km",
    from: "Lemon Tree Premier",
  },
];

/*popluarthings */
const activitiesData = [
  {
    id: "1",
    image: "/destination-hotel/activity1.png",
    title: "Old Delhi Street Food Tour",
    duration: "3h Approx",
    distance: "3 Km",
    from: "Lemon Tree Premier",
  },
  {
    id: "2",
    image: "/destination-hotel/activity2.png",
    title: "Humayun’s Tomb Visit",
    duration: "3h Approx",
    distance: "3 Km",
    from: "Lemon Tree Premier",
  },
  {
    id: "3",
    image: "/destination-hotel/activity3.png",
    title: "Explore Red Fort",
    duration: "3h Approx",
    distance: "3 Km",
    from: "Lemon Tree Premier",
  },
];

/* ================= COMPONENT ================= */

export default function HotelDetailClient() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-10">
      <HotelGallery images={hotelData.images} />

      <HotelTabs />

      <HotelHeader
        hotel={{
          name: hotelData.name,
          starRating: hotelData.starRating,
          address: hotelData.address,
        }}
      />

      <RoomsSection rooms={hotelData.rooms} />

      <AmenitiesSection
        propertyAmenities={hotelData.propertyAmenities}
        roomAmenities={hotelData.roomAmenities}
      />

      <AboutSection hotel={hotelData} />
      <Policies />

      <ReviewsSection reviews={reviewsData} />
      <NearbySection
        mapImage="/destination-hotel/nearby-map.png"
        touristPlaces={[
          { name: "DLF Promenade Vasant Kunj", distance: "6 min drive" },
          { name: "DLF Emporio Vasant Kunj", distance: "7 min drive" },
          { name: "Dada Dev Mandir", distance: "13 min drive" },
        ]}
        transportHubs={[
          {
            name: "Delhi Aero City Station",
            distance: "5 min walk",
            type: "metro",
          },
          {
            name: "New Delhi Palam Station",
            distance: "10 min drive",
            type: "train",
          },
          {
            name: "Delhi (DEL-Indira Gandhi Intl)",
            distance: "9 min drive",
            type: "airport",
          },
        ]}
      />

      <PopularHotels hotels={similarHotelsData} />
      <PopularRestaurants restaurants={restaurantsData} />
      <PopularThingsToDo activities={activitiesData} />
    </div>
  );
}
