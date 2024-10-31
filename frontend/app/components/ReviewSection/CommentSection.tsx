import React from "react";
import CommentCard from "./CommentCard";

function CommentSection() {
  return (
    <div className="w-3/4 pl-12 pr-2 h-[60vh] overflow-auto scrollbar">
      {[...Array(5)].map((_, index) => (
        <div>
          <CommentCard key={index} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
