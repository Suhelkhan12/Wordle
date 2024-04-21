import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import { rules, examples } from "../../../data/data";
import Button from "./Button";
import RuleExample from "./RuleExample";

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  const modalContainer = document.getElementById("modal")!;
  return createPortal(
    <div className="modal-wrapper">
      <div className="w-full h-full">
        <div className="modal-overlay" onClick={onClose}></div>
        <div className="h-screen w-full flex justify-center">
          <div className="modal-card">
            <div className="flex justify-end">
              <Button onClick={onClose}>
                <RxCross2 className="sm:text-[1.5rem] text-[18px] " />
              </Button>
            </div>

            <div className=" text-slate-100">
              <h3 className="sm:text-[2rem] text-[28px] font-bold">
                How to Play?
              </h3>
              <p className="sm:text-[1.5rem] font-medium leading-normal">
                Guess the Wordle in 6 tries.
              </p>

              <ul className="mt-2 flex flex-col gap-1">
                {rules.map((rule) => (
                  <li key={rule}>
                    <p>{rule}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 mt-4">
                <p className="font-semibold text-[18px]">Examples</p>
                <ul className="flex flex-col gap-4">
                  {examples.map((example) => (
                    <li key={example.id}>
                      <RuleExample {...example} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    modalContainer
  );
};

export default Modal;
