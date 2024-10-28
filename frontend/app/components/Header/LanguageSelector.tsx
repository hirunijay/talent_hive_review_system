import React from "react";
import { HiMiniChevronUpDown } from "react-icons/hi2";

function LanguageSelector() {
  return (
    <div className="flex gap-1 items-center border border-blue-600 rounded px-2 py-1">
      <img src="/icons/english.svg" alt="EN" className="h-4 w-4 mr-1" />
      <span className="text-sm text-blue-800">EN</span>
      <HiMiniChevronUpDown color="rgb(34, 40, 195)" size={18} />
    </div>
  );
}

export default LanguageSelector;
