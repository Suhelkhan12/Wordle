import { LetterStates } from "../types";

export async function getRandomWord(){
    try{
        const response = await fetch(
            "https://random-word-api.herokuapp.com/word?length=5"
          );
          const [word] = await response.json();
          console.log(word);
          return word;
    }catch(err){
        console.log(err)
    }
}



// the guess which user entered I have to compare it letter by letter with the original
// letter and for every letter I'm going to return a letter state that is why this function
// has LetterStates[] return type. Just think about the rules of wordle..
export function checkValidityOfGuess(guess:string, generatedWord:string): LetterStates[]{
    console.log({guess,generatedWord})
    const guessArray = guess.split('');
    const generatedWordArray = generatedWord.split('');

    // setting type of result
    const result: LetterStates[] = [];

    generatedWordArray.forEach((currGeneratedWordLetter, i) => {
        const currGuessLetter = guessArray[i];
        
        if (currGuessLetter === currGeneratedWordLetter) {
            result.push(LetterStates.Match);
        } else if (guessArray.includes(currGeneratedWordLetter)) {
            result.push(LetterStates.Present);
        } else {
            result.push(LetterStates.Miss);
        }
    });
    

    return result;
}