import React from "react";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

type ReviewStarBarProps = {
  score: number;
  size?: number;
};

function ReviewStarBar({ score = 0, size = 20 }: ReviewStarBarProps) {
  return (
    <div className="flex flex-row">
      {[...Array(5)].map((_, index) =>
        index < score ? (
          <MdStar size={size} key={index} color="#2228C3" />
        ) : (
          <MdStarBorder size={size} key={index} color="#2228C3" />
        )
      )}
    </div>
  );
}

export default ReviewStarBar;
