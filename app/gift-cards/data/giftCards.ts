import { GiftCard, GiftTransaction } from "../type";

export const giftCards: GiftCard[] = [
  {
    id: "birthday",
    title: "Happy Birthday!",
    subtitle: "Make their special day unforgettable.",
    image: "/gift/birthday-card.jpg",
    type: "fixed",
  },
  {
    id: "holidays",
    title: "Happy Holidays!",
    subtitle: "Wrap up the season with the gift of travel.",
    image: "/gift/holidays-card.jpg",
    type: "fixed",
  },
  {
    id: "anniversary",
    title: "Happy Anniversary!",
    subtitle: "Give the gift of shared experiences.",
    image: "/gift/anniversary-card.jpg",
    type: "fixed",
  },
  {
    id: "mothers-day",
    title: "Happy Mother's Day!",
    subtitle: "Celebrate with a getaway she deserves.",
    image: "/gift/mothersday-card.jpg",
    type: "fixed",
  },
  {
    id: "friendship-day",
    title: "Happy Friendship Day!",
    subtitle: "Thank your travel buddy with a trip.",
    image: "/gift/friendshipday-card.jpg",
    type: "fixed",
  },
  {
    id: "custom",
    title: "Phoenix Fly Custom Card",
    subtitle: "Create your own custom travel gift card.",
    image: "/gift/custom-card.jpg",
    type: "custom",
  },
];

export const giftTransactions: GiftTransaction[] = [
  {
    id: "1",
    type: "sent", // ADD THIS
    title: "Happy Holidays Gift Card",
    image: "/gift/holidays-card.jpg",
    amount: 2000,
    receiver: "Tarun Singh",
    email: "tarun23@gmail.com",
    phone: "+91 9843334456",
    sentOn: "04 May 2025",
    redeemedOn: "Not Redeemed",
    message: "Wishing you joy and a wonderful holiday!",
  },
    {
    id: "2",
    type: "sent", // ADD THIS
    title: "Happy Holidays Gift Card",
    image: "/gift/holidays-card.jpg",
    amount: 2000,
    receiver: "Tarun Singh",
    email: "tarun23@gmail.com",
    phone: "+91 9843334456",
    sentOn: "04 May 2025",
    redeemedOn: "Not Redeemed",
    message: "Wishing you joy and a wonderful holiday!",
  },
    {
    id: "3",
    type: "sent", // ADD THIS
    title: "Happy Holidays Gift Card",
    image: "/gift/holidays-card.jpg",
    amount: 2000,
    receiver: "Tarun Singh",
    email: "tarun23@gmail.com",
    phone: "+91 9843334456",
    sentOn: "04 May 2025",
    redeemedOn: "Not Redeemed",
    message: "Wishing you joy and a wonderful holiday!",
  },
    {
    id: "4",
    type: "sent", // ADD THIS
    title: "Happy Holidays Gift Card",
    image: "/gift/holidays-card.jpg",
    amount: 2000,
    receiver: "Tarun Singh",
    email: "tarun23@gmail.com",
    phone: "+91 9843334456",
    sentOn: "04 May 2025",
    redeemedOn: "Not Redeemed",
    message: "Wishing you joy and a wonderful holiday!",
  },
    {
    id: "5",
    type: "sent", // ADD THIS
    title: "Happy Holidays Gift Card",
    image: "/gift/holidays-card.jpg",
    amount: 2000,
    receiver: "Tarun Singh",
    email: "tarun23@gmail.com",
    phone: "+91 9843334456",
    sentOn: "04 May 2025",
    redeemedOn: "Not Redeemed",
    message: "Wishing you joy and a wonderful holiday!",
  },
  {
    id: "2",
    type: "received",
    title: "Happy Wedding Day",
    image: "/gift/anniversary-card.jpg",
    amount: 2000,
    receiver: "Rahul Mehta",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    sentOn: "04 May 2025",
    redeemedOn: "10 May 2025",
    message:
      "Here’s a little something to help you unwind and create beautiful memories.",
  },
];
