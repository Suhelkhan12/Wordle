import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="button mt-4 hover:bg-yellow-300 font-medium"
    >
      {children}
    </button>
  );
};

export default Button;
