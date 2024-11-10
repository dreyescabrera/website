import { useState } from "react";
import { Button } from "./ui/button";

type HamburgerButtonProps = {
  onClick?: (newValue: boolean) => void;
};

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick?.(!isActive);
  };

  return (
    <Button
      className={`transition-all duration-300`}
      onClick={handleClick}
      variant="ghost"
      size="icon"
    >
      <span className="w-5 h-6 inline-block relative">
        <span
          className={`block top-1/2 -mt-0.5 w-5 h-0.5 bg-black rounded absolute 
          transition-transform duration-300 ease 
          ${isActive ? "rotate-45 delay-120 transition-timing-function-[cubic-bezier(0.215,0.61,0.355,1)]" : "transition-transform duration-300 transition-timing-function-[cubic-bezier(0.55,0.055,0.675,0.19)]"}`}
        >
          <span
            className={`w-5 h-0.5 bg-black rounded absolute content-[''] block 
            ${isActive ? "top-0 opacity-0 transition-[top_75ms_ease,opacity_75ms_120ms_ease]" : "-top-1.5"}`}
          />
          <span
            className={`w-5 h-0.5 bg-black rounded absolute content-[''] block 
            ${isActive ? "bottom-0 -rotate-90 transition-[bottom_75ms_ease,transform_75ms_120ms] transition-timing-function-[cubic-bezier(0.215,0.61,0.355,1)]" : "-bottom-1.5"}`}
          />
        </span>
      </span>
    </Button>
  );
};
