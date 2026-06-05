export type CarStatus = "available" | "sold" | "reserved";

export interface Car {
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  priceFormatted: string;
  engine: string;
  power: string;
  zeroToHundred: string;
  topSpeed: string;
  transmission: string;
  mileage: string;
  color: string;
  status: CarStatus;
  image: string;
  images: string[];
  description: string;
  category: "Coupe" | "SUV" | "Convertible" | "Sedan";
}

export interface VeloxEvent {
  slug: string;
  title: string;
  date: string;
  location: string;
  category: string;
  accessType: string;
  price: string;
  image: string;
  description: string;
}
