import React from "react";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

type ReviewStarBarProps = {
  score: number;
};

function ReviewStarBar({ score = 0 }: ReviewStarBarProps) {
  return (
    <div className="flex flex-row">
      {[...Array(5)].map((_, index) =>
        index < score ? <MdStar key={index} /> : <MdStarBorder key={index} />
      )}
    </div>
  );
}

export default ReviewStarBar;
