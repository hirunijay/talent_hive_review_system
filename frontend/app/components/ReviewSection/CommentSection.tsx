"use client";
import React, { useCallback, useEffect, useState, UIEvent } from "react";
import CommentCard from "./CommentCard";

function CommentSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    console.log(position);
    setScrollPosition(position);
  };

  return (
    <div
      className="review-container relative w-3/4 pl-12 pr-2 h-[60vh] overflow-auto scrollbar"
      onScroll={handleScroll}
    >
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(255,255,255,${
            scrollPosition / 100
          }), transparent)`,
        }}
        className={`sticky z-40 h-1/4 w-full -mt-[11%] top-0 right-0`}
      ></div>
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <CommentCard />
          <hr className="mt-1 mb-6" />
        </div>
      ))}
      <div className="sticky z-40 h-1/4 w-full bg-gradient-to-t from-white to-transparent -mt-[11%] bottom-0 right-0"></div>
    </div>
  );
}

export default CommentSection;
