import React from "react";
import { MdThumbUp, MdThumbDown, MdMoreVert } from "react-icons/md";
import ReviewStarBar from "./ReviewStarBar";
import UserAvatar from "../Shared/UserAvatar";

function CommentCard() {
  return (
    <div className="bg-white p-3 border-none w-full">
      <div className="flex items-center mb-3">
        <UserAvatar proId="MA" />
        <div className="ml-3">
          <h3 className="text-sm font-semibold">Mihály A.</h3>
          <p className="text-sm font-normal">Vendor</p>
        </div>
        <MdMoreVert size={18} className="ml-auto cursor-pointer" />
      </div>
      <div className="flex flex-row items-center gap-2 mb-3">
        <ReviewStarBar score={5} size={16} />
        <p className="text-sm text-gray-500">3 weeks ago</p>
      </div>
      <p className="text-base text-gray-800 mb-2 pr-5">
        Lorem ipsum dolor sit amet. Qui enim repudiandae aut dicta voluptatem
        sed ipsum dolores. Nam doloribus sapiente aut explicabo fugit non
        placeat tempore est repellat voluptatem. Et facere delectus non debitis
        repellat id possimus voluptatem eum nulla voluptas et veritatis corporis
        qui maiores internos in consequatur eius. Et doloremque earum ut
        expedita pariatur ea nobis odit est recusandae aliquid. Quo dolore
        deleniti in galisum explicabo sed tenetur quos et quia galisum ut dolor
        tempora.
      </p>
      <div className="flex items-center text-sm mt-6 text-gray-500 gap-3">
        <span>Helpful?</span>
        <MdThumbUp className="cursor-pointer" />
        <MdThumbDown className="cursor-pointer" />
      </div>
    </div>
  );
}

export default CommentCard;
