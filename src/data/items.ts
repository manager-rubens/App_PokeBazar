import type { BackpackItem, MarketItem } from "../types";

export const assets = {
  avatars: {
    user: "https://www.figma.com/api/mcp/asset/aaeac8d3-30ca-4139-9398-b4f4386aaf7a",
    backpack: "https://www.figma.com/api/mcp/asset/89a4a718-17d7-4833-bc8d-1f665353f4fa",
    leo: "https://www.figma.com/api/mcp/asset/67ea589a-9b15-42f9-930c-8f1ab68bf6f9",
    mia: "https://www.figma.com/api/mcp/asset/2dabf7d7-8e4c-4332-b0d0-f8c6bd8d8567",
    dani: "https://www.figma.com/api/mcp/asset/514b636b-236f-4451-9ae6-81d92e55fa32",
    luca: "https://www.figma.com/api/mcp/asset/3f41fcbc-8068-4f8c-bc44-d5ce5857e42f"
  },
  market: {
    mewtwo: "https://www.figma.com/api/mcp/asset/db28f22b-0d86-4ce0-8eb6-c774e6c9fb91",
    bulbasaur: "https://www.figma.com/api/mcp/asset/9f5d5653-729d-4901-92fe-cd106f7aed2f",
    charizard: "https://www.figma.com/api/mcp/asset/672aec74-2115-4542-be29-8fa3bf2c7192",
    pikachu: "https://www.figma.com/api/mcp/asset/238ba6a9-4fac-4a2e-835e-0994668069cb"
  },
  detail: {
    charizardHero: "https://www.figma.com/api/mcp/asset/e7d5437b-cb64-4a25-9395-ec846d506028",
    ownerLeo: "https://www.figma.com/api/mcp/asset/1b96e375-3691-4c4e-be12-46ba50c138b6"
  },
  backpack: {
    pikachu: "https://www.figma.com/api/mcp/asset/26c0a799-f337-4561-b58b-22e834aac61c",
    charizard: "https://www.figma.com/api/mcp/asset/5c0bf455-9dfd-4fda-a3aa-34cb0fee82d3",
    eevee: "https://www.figma.com/api/mcp/asset/be09a866-3aae-46c6-904e-54c8258f9aec",
    mewtwo: "https://www.figma.com/api/mcp/asset/0fcb4812-ad0b-45fd-b44f-a6437fa114da"
  }
};

export const marketItems: MarketItem[] = [
  {
    id: "mewtwo-gx",
    name: "Mewtwo GX",
    category: "Cartas",
    rarity: "Ultra raro",
    condition: "Muito bom",
    power: 5,
    owner: { name: "Leo", age: 8, avatar: assets.avatars.leo },
    image: assets.market.mewtwo,
    hero: assets.market.mewtwo,
    accent: "#FFE9E7",
    description:
      "Carta Mewtwo GX bem guardada, perfeita para quem está montando uma coleção psíquica. O dono procura cartas raras ou brinquedos pequenos em bom estado."
  },
  {
    id: "bulbasaur-holo",
    name: "Bulbasaur Holo",
    category: "Cartas",
    rarity: "Raro",
    condition: "Bom",
    power: 4,
    owner: { name: "Bia", age: 7, avatar: assets.avatars.mia },
    image: assets.market.bulbasaur,
    hero: assets.market.bulbasaur,
    accent: "#E5FFF6",
    description:
      "Bulbasaur com brilho holográfico e bordas bem conservadas. Ideal para completar a página de iniciais verdes da coleção."
  },
  {
    id: "charizard-vmax",
    name: "Charizard VMAX",
    category: "Cartas",
    rarity: "Hiper raro",
    condition: "Excelente",
    power: 5,
    owner: { name: "Leo", age: 8, avatar: assets.detail.ownerLeo },
    image: assets.market.charizard,
    hero: assets.detail.charizardHero,
    accent: "#FFE9E7",
    description:
      "Esta carta é um Charizard VMAX Shiny raro da coleção Destinos Brilhantes. Está em estado Mint, sempre guardada no sleeve e no top loader. O brilho é incrível! Procuro outras cartas raras para completar minha coleção."
  },
  {
    id: "pikachu-v",
    name: "Pikachu V",
    category: "Cartas",
    rarity: "Especial",
    condition: "Ótimo",
    power: 4,
    owner: { name: "Luca", age: 6, avatar: assets.avatars.luca },
    image: assets.market.pikachu,
    hero: assets.market.pikachu,
    accent: "#FFF4BF",
    description:
      "Pikachu sorridente, pronto para entrar numa nova mochila. O dono gosta de trocas por cartas elétricas ou bonecos articulados."
  }
];

export const backpackItems: BackpackItem[] = [
  {
    id: "bag-pikachu",
    name: "Pikachu",
    category: "Cartas",
    rarity: "Comum",
    power: 3,
    image: assets.backpack.pikachu,
    bg: "#F1F5F9"
  },
  {
    id: "bag-charizard",
    name: "Charizard",
    category: "Cartas",
    rarity: "Raro",
    power: 5,
    image: assets.backpack.charizard,
    bg: "#FFD166"
  },
  {
    id: "bag-eevee",
    name: "Eevee",
    category: "Cartas",
    rarity: "Comum",
    power: 3,
    image: assets.backpack.eevee,
    bg: "#F1F5F9"
  },
  {
    id: "bag-mewtwo",
    name: "Mewtwo",
    category: "Cartas",
    rarity: "Comum",
    power: 4,
    image: assets.backpack.mewtwo,
    bg: "#F1F5F9"
  }
];

export function getMarketItem(itemId?: string) {
  return marketItems.find((item) => item.id === itemId) ?? marketItems[2];
}

export function getBackpackItem(itemId?: string) {
  return backpackItems.find((item) => item.id === itemId);
}
