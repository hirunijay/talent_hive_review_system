import React from "react";
import { MdStar, MdThumbUp, MdThumbDown, MdMoreVert } from "react-icons/md";
import ReviewStarBar from "./ReviewStarBar";

function CommentCard() {
  return (
    <div className="bg-white p-3 border-none w-full">
      <div className="flex items-center mb-2">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full text-white font-bold">
          MA
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold">Mihály A.</h3>
          <p className="text-sm font-normal">Vendor</p>
        </div>
        <MdMoreVert className="ml-auto cursor-pointer" />
      </div>
      <div className="flex flex-row gap-2">
        <ReviewStarBar score={5} size={16} />
        <p className="text-xs text-gray-500">3 weeks ago</p>
      </div>
      <p className="text-sm text-gray-800 mb-2">
        I am a late starter in web development, but this course even in 2024 is
        a good resource. Cannot be called an up-to-date course, but the last
        section shows how easy to make websites with grid.
      </p>
      <p className="text-sm text-gray-800 mb-4">It was a pleasure.</p>
      <div className="flex items-center text-gray-500 text-xs">
        <span>Helpful?</span>
        <MdThumbUp className="ml-2 cursor-pointer" />
        <MdThumbDown className="ml-2 cursor-pointer" />
      </div>
    </div>
  );
}

export default CommentCard;
