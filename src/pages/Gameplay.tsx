import WordRow from "../components/UI/WordRow";
import { checkValidityOfGuess } from "../utils/word-util";

const Gameplay = () => {
  console.log(checkValidityOfGuess("allol", "smelt"));
  return (
    <main className="h-screen flex justify-center pt-10  text-white">
      <div className="flex flex-col gap-2">
        <WordRow letter="hello" />
        <WordRow letter="suhel" />
        <WordRow letter="world" />
        <WordRow letter="world" />
        <WordRow letter="world" />
        <WordRow letter="world" />
      </div>
    </main>
  );
};

export default Gameplay;
