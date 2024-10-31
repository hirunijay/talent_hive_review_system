import React from "react";
import Image from "next/image";
import ImageCard from "./ImageCard";
import DetailSection from "./DetailSection";
import ButtonSection from "./ButtonSection";

function ServiceSection() {
  return (
    <div className="flex items-start flex-wrap justify-between px-10 pt-28 pb-9">
      <div
        className="flex flex-row gap-10
      "
      >
        <ImageCard />
        <DetailSection />
      </div>
      <ButtonSection />
    </div>
  );
}

export default ServiceSection;
