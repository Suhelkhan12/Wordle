import { LetterStates } from "../../types";

type LetterBoxProp = {
  letter: string;
  letterState?: LetterStates;
};

// for styling letter according to letterState basesd ongues
const letterStateStyles = {
  [LetterStates.Miss]: "bg-red-500",
  [LetterStates.Present]: "bg-yellow-500",
  [LetterStates.Match]: "bg-green-500",
};

const LetterBox = ({ letter, letterState }: LetterBoxProp) => {
  // getting the style for individual letter bos
  const letterBoxStyle =
    letterState && letterState === null ? "" : letterStateStyles[letterState];

  return (
    <span
      className={` ${letterBoxStyle} flex justify-center items-center border-[2px] border-gray-400 sm:text-[2rem] text-[28px] uppercase font-bold sm:w-14 sm:h-14 w-12 h-12  `}
    >
      {letter}
    </span>
  );
};

export default LetterBox;
