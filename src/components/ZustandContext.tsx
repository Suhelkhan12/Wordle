import { create } from "zustand";

type State = {
  countValue: number;
};

type Actions = {
  increaseCount: () => void;
  decreaseCount: () => void;
};

const useCountStore = create<State & Actions>((set) => ({
  countValue: 0,
  increaseCount: () => set((state) => ({ countValue: state.countValue + 1 })),
  decreaseCount: () => set((state) => ({ countValue: state.countValue - 1 })),
}));

export default useCountStore;
