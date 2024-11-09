"use client";
import { useEffect, useRef, useState } from "react";

type PopoverProps = {
  children: React.ReactNode;
  content?: React.ReactNode;
  trigger?: any;
};

function Popover({ children, content, trigger = "click" }: PopoverProps) {
  const [show, setShow] = useState(false);

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setShow(true);
    }
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setShow(false);
    }
  };

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit flex justify-end relative"
    >
      <div onClick={() => setShow(!show)}>{children}</div>
      <div
        hidden={!show}
        className="min-w-fit w-fit h-fit absolute top-[120%] z-50 transition-all"
      >
        <div className="rounded bg-white text-gray-700 p-4 shadow-[0px_0px_10px_rgba(197,197,197,0.5)] mb-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Popover;
