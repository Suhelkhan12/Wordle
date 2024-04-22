import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getRandomWord } from "../utils/word-util";

type StoreState = {
    answer:string
    guesses:string[]
}

type StoreActions = {
    addGuess: (userGuess:string)=>void
}

export const useStore = create<StoreState & StoreActions>()(
    persist(
        (set)=>({
            answer: getRandomWord(),
            guesses: ['hello', 'store', 'penny', 'suhel', 'vinay', ],
            addGuess: (userGuess)=> set((state)=>({guesses: [...state.guesses,userGuess] }))
        }),
        {
            name:'wordle-word'
        }
    )
)