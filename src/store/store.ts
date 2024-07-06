import { create } from "zustand";
import { persist } from "zustand/middleware";
import { checkValidityOfGuess, getRandomWord } from "../utils/word-util";
import { LetterStates } from "../types";

export interface GuessRow {
    guess: string,
    result?: LetterStates[]
}

type StoreState = {
    answer:string
    rows:GuessRow[]
}

type StoreActions = {
    addGuess: (userGuess:string)=>void,
    newGame: ()=>void
}

export const useStore = create<StoreState & StoreActions>()(
    persist(
        (set) => ({
            answer: getRandomWord(),
            rows: [],
            addGuess: (userGuess) => set((state) => ({
                rows: [
                    ...state.rows,
                    {
                        guess: userGuess,
                        result: checkValidityOfGuess(userGuess, state.answer)
                    }
                ]
            })),
            newGame: () => {
                set({
                    answer: getRandomWord(),
                    rows: []
                });
            }
        }),
        {
            name: 'wordle-word'
        }
    )
);