import LetterBox from "./LetterBox";

type WordRowPropType = {
  letter: string;
};

const WordRow = ({ letter }: WordRowPropType) => {
  // we did this so that we can conver our string letter into array and we can easity map over it
  const letterArray = letter.split("");
  return (
    <div className="grid grid-cols-5 gap-2 ">
      {letterArray.map((letter) => (
        <LetterBox key={Math.random()} letter={letter} />
      ))}
    </div>
  );
};

export default WordRow;
