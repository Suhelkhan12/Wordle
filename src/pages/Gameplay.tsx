import { useState } from "react";
import WordRow from "../components/UI/WordRow";
import { useStore } from "../store/store";
import { LETTER_LENGTH } from "../components/UI/WordRow";
const GUESS_LENGTH = 6;

const Gameplay = () => {
  const [guess, setGuess] = useState<string>("");
  const guesses = useStore((state) => state.guesses);
  const addGuess = useStore((state) => state.addGuess);
  const newGame = useStore((state) => state.newGame);

  let rows = [...guesses];
  console.log(rows.length);
  if (rows.length < GUESS_LENGTH) {
    rows.push(guess);
  }
  //handling game end state
  const isGameOver = GUESS_LENGTH === guesses.length;

  const numberOfGuessRemaining = GUESS_LENGTH - rows.length;
  rows = rows.concat(Array(numberOfGuessRemaining).fill(""));

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGuess = e.target.value;
    if (newGuess.length === LETTER_LENGTH) {
      addGuess(newGuess);
      setGuess("");
      return;
    }
    setGuess(newGuess);
  };

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
          onChange={handleOnchange}
          disabled={isGameOver}
        />
      </div>

      {isGameOver && (
        <div className=" fixed top-0 flex-col min-h-screen w-screen flex items-center justify-center bg-black/50">
          <div className=" border border-black max-w-[300px] text-center w-full py-4 rounded-lg bg-white text-black text-[1.5rem] mx-auto  ">
            <span className=" block mb-12">Game Over!</span>
            <div className=" mx-auto flex">
              <button
                onClick={() => {
                  newGame();
                  setGuess("");
                }}
                className=" mx-auto text-[1.25rem] border border-green-500  text-white bg-green-500 rounded-md px-4 py-2 transition hover:bg-green-600 shadow-lg"
              >
                New game
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gameplay;
