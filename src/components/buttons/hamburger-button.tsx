import { useState } from "react";
import { Button } from "../ui/button";

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
      <span className="relative inline-block h-6 w-5">
        <span
          className={`ease absolute top-1/2 -mt-0.5 block h-0.5 w-5 rounded bg-black transition-transform duration-300 ${isActive ? "delay-120 transition-timing-function-[cubic-bezier(0.215,0.61,0.355,1)] rotate-45" : "transition-timing-function-[cubic-bezier(0.55,0.055,0.675,0.19)] transition-transform duration-300"}`}
        >
          <span
            className={`absolute block h-0.5 w-5 rounded bg-black content-[''] ${isActive ? "top-0 opacity-0 transition-[top_75ms_ease,opacity_75ms_120ms_ease]" : "-top-1.5"}`}
          />
          <span
            className={`absolute block h-0.5 w-5 rounded bg-black content-[''] ${isActive ? "transition-timing-function-[cubic-bezier(0.215,0.61,0.355,1)] bottom-0 -rotate-90 transition-[bottom_75ms_ease,transform_75ms_120ms]" : "-bottom-1.5"}`}
          />
        </span>
      </span>
    </Button>
  );
};
