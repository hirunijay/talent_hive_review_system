import React from "react";
import ProgressBar from "../Shared/ProgressBar";
import ReviewStarBar from "./ReviewStarBar";
import { MdStar } from "react-icons/md";

function ReviewCard() {
  return (
    <div className="border-none rounded-md w-1/4 p-3">
      <div className=" flex flex-row items-center gap-2 text-gray-800 text-2xl font-semibold">
        <MdStar size={24} color="#2228C3" />
        4.7 review (18756)
      </div>
      <div className="px-3 py-4">
        {[...Array(5)].map((_, index) => (
          <div className="flex flex-row items-center gap-2 mb-2" key={index}>
            <ProgressBar progress={25} />
            <ReviewStarBar score={5 - index} />
            <span className="text-gray-500">25%</span>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex items-center gap-2 my-5">
        <input type="checkbox" id="yourReviews" name="yourReviews" />
        <label htmlFor="yourReviews">Your Reviews</label>
      </div>
    </div>
  );
}

export default ReviewCard;
