/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { LETTER_LENGTH } from "../components/UI/WordRow";
import { useStore } from "../store/store";

const useGuess = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const addGuess = useStore((state) => state.addGuess);
  const [guess, setGuess] = useState("");
  const previousGuess = usePrevious(guess);

  const onKeyDown = (e: KeyboardEvent) => {
    const letter = e.key;
    setGuess((currGuess) => {
      const newGuess = letter.length === 1 ? currGuess + letter : currGuess;

      switch (letter) {
        case "Backspace":
          return newGuess.slice(0, -1);
        case "Enter":
          if (newGuess.length === LETTER_LENGTH) {
            addGuess(newGuess);
            return "";
          }
      }

      if (currGuess.length === LETTER_LENGTH) {
        return currGuess;
      }
      return newGuess;
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    if (guess.length === 0 && previousGuess?.length === LETTER_LENGTH) {
      addGuess(previousGuess);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guess]);

  return [guess, setGuess];
};

export default useGuess;

// usePrevious function
function usePrevious<T>(value: T): T {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: any = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
