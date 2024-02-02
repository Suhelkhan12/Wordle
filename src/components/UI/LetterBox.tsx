type LetterBoxProp = {
  letter: string;
};

const LetterBox = ({ letter }: LetterBoxProp) => {
  return (
    <span className=" flex justify-center items-center border-[2px] border-gray-400 text-[2rem] uppercase font-bold w-14 h-14  ">
      {letter}
    </span>
  );
};

export default LetterBox;
