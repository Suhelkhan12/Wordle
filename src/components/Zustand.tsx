import useCountStore from "./ZustandContext";

const Zustand = () => {
  const countValue = useCountStore((state) => state.countValue);
  const increaseCountValue = useCountStore((state) => state.increaseCount);
  const decreaseCountValue = useCountStore((state) => state.decreaseCount);
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <p className="text-white">{countValue}</p>
      <button onClick={() => increaseCountValue()} className="bg-white p-2">
        Increase
      </button>
      <button onClick={() => decreaseCountValue()} className="bg-white p-2">
        Decrease
      </button>
    </div>
  );
};

export default Zustand;
