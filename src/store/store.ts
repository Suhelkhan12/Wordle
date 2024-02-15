import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ZustandStoreState } from "../types";
import { getRandomWord } from "../utils/word-util";

export const useStore = create<ZustandStoreState>()(
  devtools(
    persist(
      (set) => ({
        answer: null,
        guesses: ["hello", "solar", "penny"],
        addGuess: (guess: string) =>
          set((state) => ({
            guesses: [...state.guesses, guess],
          })),
      }),
      { name: "wordle" }
    )
  )
);

getRandomWord().then((word) => {
  useStore.setState({ answer: word });
});
