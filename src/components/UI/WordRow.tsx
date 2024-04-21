import LetterBox from "./LetterBox";
import { checkValidityOfGuess } from "../../utils/word-util";
type WordRowPropType = {
  letter: string;
};

const WordRow = ({ letter }: WordRowPropType) => {
  const guessState = checkValidityOfGuess(letter);
  // we did this so that we can conver our string letter into array and we can easity map over it
  const letterArray = letter.split("");
  return (
    <div className="grid grid-cols-5 gap-2 ">
      {letterArray.map((letter, ind) => (
        <LetterBox
          key={Math.random()}
          letter={letter}
          letterState={guessState[ind]}
        />
      ))}
    </div>
  );
};

export default WordRow;
