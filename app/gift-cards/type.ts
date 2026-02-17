// For Gift Templates (Grid Page)
export interface GiftCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  type: "fixed" | "custom";
}

// For Gift History (Sent / Received)
export type GiftType = "sent" | "received";

export interface GiftTransaction {
  id: string;
  type: GiftType; // VERY IMPORTANT
  title: string;
  image: string;
  amount: number;
  receiver: string;
  email: string;
  phone: string;
  sentOn: string;
  redeemedOn: string;
  message: string;
}
