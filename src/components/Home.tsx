import Logo from "../assets/wordle-icon.svg";
const Home = () => {
  return (
    <div className="h-full flex justify-center items-center text-white">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="logo" className="w-[80px] h-[80px]" />
        <h2 className="font-bold text-[64px] ">WordGamble</h2>
        <p className="text-[40px] font-medium w-[450px] text-center leading-tight">
          Get 6 chances to guess a 5-letter word.
        </p>
        <button className="button mt-4">Play</button>
      </div>
    </div>
  );
};

export default Home;
