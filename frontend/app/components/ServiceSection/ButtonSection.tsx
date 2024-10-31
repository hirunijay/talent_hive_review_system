import React from "react";
import { MdOutlineQrCode } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

function ButtonSection() {
  return (
    <div className="flex items-end flex-col justify-start gap-5 mt-3">
      <div className="flex flex-row items-center gap-4">
        <MdOutlineQrCode size={24} color="rgb(34 40 195)" />
        <button className="bg-themeblue-dark gap-2 text-white rounded-md font-medium px-4 py-2 flex flex-row items-center justify-center">
          <FaRegBookmark size={15} />
          Book
        </button>
      </div>
      <button className="bg-themeblue-dark gap-2 text-white rounded-md font-medium px-4 py-2 flex flex-row items-center justify-center">
        <MdOutlineReviews size={16} />
        Add Review
      </button>
    </div>
  );
}

export default ButtonSection;
