export const rules = [
    "1. Each guess must be a valid 5-letter word.",
    "2. The color of the tiles will change to show how close your guess was to the word."
]

export const examples = [
    {  
        id: Math.random()*10000,
        letterId: Math.random()*2000000,
        letters: ['L','U','N','N','H'],
        hint: "L is in the word and in the correct spot.",
        color:'bg-green-500',
        letterPosition:0
    },
    {   id: Math.random()*100000,
        letterId: Math.random()*200000,
        letters: ['C','O','L','O','R'],
        hint: "R is in the word but in the wrong spot.",
        color:'bg-yellow-500',
        letterPosition:4
    },
    {
        id: Math.random()*100000,
        letterId: Math.random()*20000,
        letters: ["V","A","G","U","E"],
        hint: "U is not in the word in any spot.",
        color:'bg-red-500',
        letterPosition:3
    }
]