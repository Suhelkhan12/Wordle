// according to three rules of worlde word state
export enum LetterStates {
    Miss,
    Present,
    Match
}

export interface ZustandStoreState {
    answer: string|null,
    guesses: string[],
    addGuess: (guess:string)=>void,
}