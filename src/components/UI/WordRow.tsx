import { LetterStates } from "../../types";

type WordRowPropType = {
  letter: string;
  result: LetterStates[] | undefined;
};

export const LETTER_LENGTH = 5;

type LetterBoxProp = {
  letter: string;
  letterState?: LetterStates;
};

// for styling letter according to letterState basesd ongues
const letterStateStyles = {
  [LetterStates.Miss]: "bg-red-500 border-red-500",
  [LetterStates.Present]: "bg-yellow-500 border-yellow-500",
  [LetterStates.Match]: "bg-green-500 border-green-500",
};

const LetterBox = ({ letter, letterState }: LetterBoxProp) => {
  // getting the style for individual letter bos
  const letterBoxStyle =
    letterState === undefined ? "" : letterStateStyles[letterState];

  return (
    <span
      className={` ${letterBoxStyle} flex justify-center items-center border-[2px] border-gray-400 sm:text-[2rem] text-[28px] uppercase font-bold sm:w-14 sm:h-14 w-12 h-12  `}
    >
      {letter}
    </span>
  );
};

const WordRow = ({ letter = "", result = [] }: WordRowPropType) => {
  // we did this so that we can conver our string letter into array and we can easity map over it
  const letterRemaining = LETTER_LENGTH - letter.length;
  const letterArray = letter.split("").concat(Array(letterRemaining).fill(""));

  return (
    <div className="grid grid-cols-5 gap-2 ">
      {letterArray.length > 0 &&
        letterArray.map((letter, ind) => (
          <LetterBox key={ind} letter={letter} letterState={result[ind]} />
        ))}
    </div>
  );
};

export default WordRow;
