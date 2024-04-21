import React from "react";

type RuleType = {
  letters: string[];
  hint: string;
  letterId: number;
  color: string;
  letterPosition: number;
};

const RuleExample: React.FC<RuleType> = ({
  letters,
  hint,
  letterId,
  color,
  letterPosition,
}: RuleType) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        {letters.map((letter, index) => (
          <div
            key={letterId + index}
            className={`border-[2px] border-slate-400 w-10 h-10 flex justify-center items-center ${
              index === letterPosition && color
            } `}
          >
            <p className="font-bold text-2xl">{letter}</p>
          </div>
        ))}
      </div>
      <p className="mt-1">{hint}</p>
    </div>
  );
};

export default RuleExample;
