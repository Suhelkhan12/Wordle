import { create } from "zustand";
import { persist } from "zustand/middleware";
import { checkValidityOfGuess, getRandomWord } from "../utils/word-util";
import { LetterStates } from "../types";

export const GUESS_LENGTH = 6;


export enum GameStates {
    playing = "playing",
    won = "won",
    lost = "lost"
}

export interface GuessRow {
    guess: string,
    result?: LetterStates[]
}

type StoreState = {
    answer:string
    rows:GuessRow[]
    gameState: GameStates
}

type StoreActions = {
    addGuess: (userGuess:string)=>void,
    newGame: ()=>void
}

export const useStore = create<StoreState & StoreActions>()(
    persist(
        (set, get) => ({
            answer: getRandomWord(),
            rows: [],
            gameState: GameStates.playing,
            addGuess: (guess) => {
                const result = checkValidityOfGuess(guess, get().answer);
                const isWin = result.every(i => i === LetterStates.Match);

                const rows =  [
                    ...get().rows,
                    {
                        guess,
                        result
                    }
                ];
                set(() => ({
                    rows,
                    gameState: isWin ? GameStates.won : (rows.length === GUESS_LENGTH) ? GameStates.lost : GameStates.playing,
                }));
            },
            newGame: () => {
                set({
                    answer: getRandomWord(),
                    rows: [],
                    gameState: GameStates.playing
                });
            }
        }),
        {
            name: 'wordle-word'
        }
    )
);