export type ItemCategory = "Cartas" | "Bonecos" | "Veiculos";

export type Owner = {
  name: string;
  age: number;
  avatar: string;
};

export type MarketItem = {
  id: string;
  name: string;
  category: ItemCategory;
  rarity: string;
  condition: string;
  power: number;
  owner: Owner;
  image: string;
  hero: string;
  accent: string;
  description: string;
};

export type BackpackItem = {
  id: string;
  name: string;
  category: ItemCategory;
  rarity: string;
  power: number;
  image: string;
  bg: string;
};
