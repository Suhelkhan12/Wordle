import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getRandomWord } from "../utils/word-util";

type StoreState = {
    answer:string
    guesses:string[]
}

type StoreActions = {
    addGuess: (userGuess:string)=>void,
    newGame: ()=>void
}

export const useStore = create<StoreState & StoreActions>()(
    persist(
        (set)=>({
            answer: getRandomWord(),
            guesses: ['hello', 'store', 'penny', ],
            addGuess: (userGuess)=> set((state)=>({guesses: [...state.guesses,userGuess] })),
            newGame: ()=> {
                set({
                    answer: getRandomWord(),
                    guesses: []
                })
            }
        }),
        {
            name:'wordle-word'
        }
    )
)