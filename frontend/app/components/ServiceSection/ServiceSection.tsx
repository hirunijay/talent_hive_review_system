import React from "react";
import Image from "next/image";
import ImageCard from "./ImageCard";
import DetailSection from "./DetailSection";
import ButtonSection from "./ButtonSection";

function ServiceSection() {
  return (
    <div className="flex items-start justify-between p-10">
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
