import { useState } from "react";
import WordRow from "../components/UI/WordRow";
import { useStore } from "../store/store";

const GUESS_LENGTH = 6;

const Gameplay = () => {
  const [guess, setGuess] = useState<string>("");
  const guesses = useStore((state) => state.guesses);

  let rows = [...guesses];
  if (rows.length < GUESS_LENGTH) {
    rows.push(guess);
  }
  const numberOfGuessRemaining = GUESS_LENGTH - rows.length;
  rows = rows.concat(Array(numberOfGuessRemaining).fill(""));

  return (
    <main className="h-screen flex justify-center items-center sm:pt-10 pt-14  text-white flex-col">
      <div className="flex flex-col gap-2">
        {rows.map((word, index) => (
          <WordRow letter={word} key={index} />
        ))}
      </div>

      <div className="mt-6 flex gap-4 flex-col flex-grow">
        <label>Input for text</label>
        <input
          type="text"
          value={guess}
          className=" text-black"
          onChange={(e) => setGuess(e.target.value)}
        />
      </div>
    </main>
  );
};

export default Gameplay;
