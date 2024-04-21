import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/UI/Modal";
import Button from "../components/UI/Button";
import Logo from "../assets/wordle-icon.svg";

const Home = () => {
  const [rulesModalVisibility, setRulesModalVisibility] = useState<
    boolean | null
  >(null);
  const navigate = useNavigate();

  const handleGameStart = () => {
    navigate("/gameplay");
  };

  const showModal = () => {
    setRulesModalVisibility((prev) => !prev);
  };

  const hideModal = () => {
    setRulesModalVisibility((prev) => !prev);
  };

  return (
    <main className="h-full flex flex-col justify-center items-center text-white px-4 sm:px-0 ">
      {rulesModalVisibility && <Modal onClose={hideModal} />}
      <div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="sm:w-[5rem] sm:h-[5rem] h-[60px] w-[60px]"
          />
          <h1 className="sm:font-bold sm:text-[4rem] text-[40px] font-medium ">
            WordGamble
          </h1>
          <p className="sm:text-[2.5rem] text-[30px] font-normal sm:font-medium  sm:w-[450px] w-[100%] text-center leading-tight">
            Get 6 chances to guess a 5-letter word.
          </p>
        </div>
        <div className="flex items-center justify-center mt-4 gap-10">
          <Button onClick={showModal}>How to play?</Button>
          <Button onClick={handleGameStart}>Play</Button>
        </div>
        <div className="mt-6">
          <Button
            onClick={() => {
              navigate("/zustand");
            }}
          >
            Zustand
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
