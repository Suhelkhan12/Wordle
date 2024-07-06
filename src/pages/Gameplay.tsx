import WordRow from "../components/UI/WordRow";
import { GuessRow, useStore, GUESS_LENGTH, GameStates } from "../store/store";
import useGuess from "../hooks/useGuess";

const Gameplay = () => {
  const [guess, setGuess] = useGuess();
  const guesses = useStore((state) => state.rows);
  const gameState = useStore((state) => state.gameState);
  const newGame = useStore((state) => state.newGame);

  let rows: GuessRow[] = [...guesses];
  console.log(rows.length);
  if (rows.length < GUESS_LENGTH) {
    rows.push({ guess });
  }
  //handling game end state
  const isGameOver = gameState !== GameStates.playing;

  const numberOfGuessRemaining = GUESS_LENGTH - rows.length;
  rows = rows.concat(Array(numberOfGuessRemaining).fill(""));

  return (
    <main className="h-screen flex justify-center items-center sm:pt-10 pt-14  text-white flex-col">
      <div className="flex flex-col gap-2">
        {rows.map(({ guess, result }, index) => (
          <WordRow letter={guess} key={index} result={result} />
        ))}
      </div>

      {isGameOver && (
        <div className=" fixed top-0 flex-col min-h-screen w-screen flex items-center justify-center bg-black/50">
          <div className=" border border-black max-w-[300px] text-center w-full py-4 rounded-lg bg-white text-black text-[1.5rem] mx-auto  ">
            <span className=" block mb-12">
              {gameState === GameStates.lost ? "Game Over!" : "You won!"}
            </span>
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
