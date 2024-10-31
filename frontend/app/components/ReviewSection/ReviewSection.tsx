import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import ReviewCard from "./ReviewCard";
import CommentSection from "./CommentSection";

function ReviewSection() {
  return (
    <div className="">
      <SectionTitle title="Reviews" />
      <div className="flex flex-row my-8 mx-11">
        <ReviewCard />
        <CommentSection />
      </div>
    </div>
  );
}

export default ReviewSection;
