import { LetterStates } from "../types";
import wordBank from '../../data/workBank.json'

export function getRandomWord(){

    const randomIndex = Math.floor(Math.random() * wordBank.length);
    return wordBank[randomIndex]
}

const word:string =  getRandomWord()
// the guess which user entered I have to compare it letter by letter with the original
// letter and for every letter I'm going to return a letter state that is why this function
// has LetterStates[] return type. Just think about the rules of wordle..

/**
 * well it is not quite good implementation because it will not work for more than one letter present in the user input
 * allol and smelt :- first l in allol will give match for smelt, simillarly it will give yess for second and third l because l in smelt will always exist
 */
export function checkValidityOfGuess(guess:string, generatedWord:string = word): LetterStates[]{
    const guessArray = guess.split('');
    const generatedWordArray = generatedWord.split('');

    // setting type of result
    const result: LetterStates[] = [];

    if(guessArray.length !== generatedWordArray.length){
        return result;
    }

    // basicallya map is created here
    const answerLetterCount: Record<string, number> = {};

    guessArray.forEach((letter , i)=>{
        const currAnswerLetter = generatedWordArray[i];

        answerLetterCount[currAnswerLetter] = answerLetterCount[currAnswerLetter] ? answerLetterCount[currAnswerLetter]+1 : 1;

        if(currAnswerLetter === letter){
            result.push(LetterStates.Match);
        }else if(generatedWordArray.includes(letter)){
            result.push(LetterStates.Present)
        }else{
            result.push(LetterStates.Miss)
        }
    });

    result.forEach((currResult, resultIndex)=>{
        // if no letter is present there
        if(currResult !== LetterStates.Present){
            return;
        }

        const guessLetter = guessArray[resultIndex];

        generatedWordArray.forEach((currAnsLetter , answerIndex)=>{
            if(currAnsLetter !== guessLetter){
                return;
            }
            
            if(result[answerIndex] === LetterStates.Match){
                result[resultIndex] = LetterStates.Miss
            }

            if(answerLetterCount[guessLetter]<= 0){
                result[resultIndex] = LetterStates.Miss
            }
        });

        answerLetterCount[guessLetter]--;
    })
    return result;
}