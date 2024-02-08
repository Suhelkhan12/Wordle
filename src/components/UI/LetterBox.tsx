type LetterBoxProp = {
  letter: string;
};

const LetterBox = ({ letter }: LetterBoxProp) => {
  return (
    <span className=" flex justify-center items-center border-[2px] border-gray-400 sm:text-[2rem] text-[28px] uppercase font-bold sm:w-14 sm:h-14 w-12 h-12  ">
      {letter}
    </span>
  );
};

export default LetterBox;
