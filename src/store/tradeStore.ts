import { create } from "zustand";

type TradeState = {
  wantedItemId: string;
  offeredItemId?: string;
  setWantedItem: (itemId: string) => void;
  setOfferedItem: (itemId: string) => void;
  resetTrade: () => void;
};

export const useTradeStore = create<TradeState>((set) => ({
  wantedItemId: "charizard-vmax",
  offeredItemId: undefined,
  setWantedItem: (wantedItemId) => set({ wantedItemId }),
  setOfferedItem: (offeredItemId) => set({ offeredItemId }),
  resetTrade: () => set({ wantedItemId: "charizard-vmax", offeredItemId: undefined })
}));
