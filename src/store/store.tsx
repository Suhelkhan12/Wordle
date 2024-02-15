import { create } from "zustand";

interface StoreStateType {
  bears: number;
  increaseBearPopulation: () => void;
  resetBearPopulation: () => void;
}

export const useStore = create<StoreStateType>((set) => ({
  bears: 0,
  increaseBearPopulation: () => set((state) => ({ bears: state.bears + 1 })),
  resetBearPopulation: () => set(() => ({ bears: 0 })),
}));
