export interface Property {
  id: number | string;
  title: string;
  description: string;
  price: string | number;
  imageUrl: string;
  noOfBedrooms: string;
  noOfBathrooms: string;
  area?: string;
  type: string;
}
