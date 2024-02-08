import WordRow from "../components/UI/WordRow";

const Gameplay = () => {
  return (
    <main className="h-screen flex justify-center pt-10  text-white">
      <div className="flex flex-col gap-2">
        <WordRow letter="hello" />
        {/* <WordRow letter="suhel" /> */}
        {/* <WordRow letter="solar" /> */}
        {/* <WordRow letter="penny" /> */}
        {/* <WordRow letter="world" /> */}
        {/* <WordRow letter="rahul" /> */}
      </div>
    </main>
  );
};

export default Gameplay;
