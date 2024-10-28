import React from "react";
import Image from "next/image";

function ImageCard() {
  return (
    <div className="relative w-56 h-56">
      <Image
        src="/images/developer_profile_img.jpg"
        alt="Profile Picture"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-md"
      />
    </div>
  );
}

export default ImageCard;
