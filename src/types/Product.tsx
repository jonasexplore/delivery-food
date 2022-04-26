import { StaticImageData } from "next/image";

export type Category = {
  id: string;
  category: string;
};

export type Product = {
  id: string;
  frontCover: StaticImageData;
  company: string;
  deliveryTime: string;
  categories: Category[];
};
