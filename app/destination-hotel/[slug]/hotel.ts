export const hotels: Hotel[] = [
  {
    id: "1",
    slug: "royal-saray-resort",
    name: "Royal Saray Resort",
    starRating: 4,
    rating: 8.6,
    reviewCount: 324,
    address:
      "8591, Arakashan Road, Pahar Ganj, Uttar Pradesh and NCR, India, 110055",

    images: [
      "/destination-hotel/hotel1.png",
      "/destination-hotel/hotel2.png",
      "/destination-hotel/hotel3.png",
    ],

    rooms: [
      {
        id: "r1",
        title: "Superior Room",
        images: [
          "/destination-hotel/hotelroom1.png",
          "/destination-hotel/hotelroom2.png",
        ],
        size: "198 Sq.ft",
        view: "Pool View",
        bed: "Queen Bed",
        price: 4500,
        available: true,
      },
      {
        id: "r2",
        title: "Luxury Suite",
        images: [
          "/destination-hotel/hotelroom3.png",
          "/destination-hotel/hotelroom2.png",
        ],
        size: "300 Sq.ft",
        view: "Sea View",
        bed: "King Bed",
        price: 8200,
        available: false,
      },
    ],

    propertyAmenities: [
      {
        key: "internet",
        title: "Internet",
        items: ["Free WiFi in public areas"],
      },
      {
        key: "parking",
        title: "Parking & Public Transport",
        items: ["Free parking", "Paid airport transfers"],
      },
      {
        key: "guest",
        title: "Guest services",
        items: ["24-hour front desk", "Room service"],
      },
    ],

    roomAmenities: [
      {
        key: "bedrooms",
        title: "Bedrooms",
        items: ["Air conditioning", "Wardrobe"],
      },
      {
        key: "bathrooms",
        title: "Bathrooms",
        items: ["Private bathroom", "Shower"],
      },
    ],
  },
];
