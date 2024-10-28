import React from "react";

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center my-1">
      <div className="flex-grow border-t border-gray-300 ml-10"></div>
      <span className="mx-3 text-gray-600 text-sm">{title}</span>
      <div className="flex-grow border-t border-gray-300 mr-10"></div>
    </div>
  );
}

export default SectionTitle;
