"use client";
import React, { useEffect, useState, UIEvent, useRef } from "react";
import CommentCard from "./CommentCard";

function CommentSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const [isScrollingUp, setIsScrollingUp] = useState(1);
  const [isScrollingDown, setIsScrollingDown] = useState(0);

  // const handleScroll = (e: UIEvent<HTMLDivElement>) => {
  //   const target = e.target as HTMLDivElement;
  //   const { scrollTop, scrollHeight, clientHeight } = target;
  //   const position = Math.ceil(
  //     (scrollTop / (scrollHeight - clientHeight)) * 100
  //   );
  //   setScrollPosition(position);
  // };

  // blur effect when scrolling
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const currentScroll = e.currentTarget.scrollTop;
    setPrevScrollPosition(scrollPosition);
    setScrollPosition(currentScroll);
  };

  useEffect(() => {
    // detect whether scrolling up or down
    if (scrollPosition > prevScrollPosition) {
      console.log("Scrolling down");
      setIsScrollingUp(0);
      setIsScrollingDown(1);
    } else {
      console.log("Scrolling up");
      setIsScrollingUp(1);
      setIsScrollingDown(0);
    }
  }, [scrollPosition]);

  return (
    <div
      className="review-container relative w-3/4 pl-12 pr-2 h-[60vh] overflow-auto scrollbar"
      onScroll={handleScroll}
    >
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(255,255,255,${isScrollingDown}), transparent)`,
        }}
        className={`sticky z-40 h-1/4 w-full -mt-[11%] top-0 right-0`}
      ></div>
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <CommentCard />
          <hr className="mt-1 mb-6" />
        </div>
      ))}
      <div
        style={{
          background: `linear-gradient(to top, rgba(255,255,255,${isScrollingUp}), transparent)`,
        }}
        className="sticky z-40 h-1/4 w-full -mt-[11%] bottom-0 right-0"
      ></div>
    </div>
  );
}

export default CommentSection;
