import CheckIcon from "@/assets/icons/check.svg?react";
import CopyIcon from "@/assets/icons/copy.svg?react";
import { Button } from "../ui/button";

import { useState } from "react";

export const CopyEmailButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("hello@dreyescabrera.dev");

    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  return (
    <Button
      variant="outline"
      data-role="copy-email"
      className={`overflow-hidden *:leading-none ${isActive ? "bg-emerald-50 hover:bg-emerald-50" : ""}`}
      onClick={handleClick}
    >
      {isActive ? (
        <CheckIcon className="text-emerald-600" />
      ) : (
        <CopyIcon className="fill-zinc-700" />
      )}
      <span
        className={`relative transition-transform duration-300 after:absolute after:-bottom-8 after:left-0 after:content-['Copied!'] ${isActive ? "-translate-y-8" : ""}`}
      >
        Copy email
      </span>
    </Button>
  );
};
