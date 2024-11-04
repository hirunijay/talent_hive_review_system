import React from "react";
import { MdPerson } from "react-icons/md";
import Popover from "../Shared/Popover";

function ProfileSection() {
  return (
    <div className="flex gap-5 items-center">
      <div className="flex flex-col items-center text-right">
        <span className="block font-normal leading-none">Hiruni</span>
        <span className="text-sm text-gray-500">Vendor</span>
      </div>

      <Popover content={<p>This Content Will be render in Popover.</p>}>
        <div className="flex justify-center items-center rounded-full p-1 w-10 h-10 bg-themeblue-light">
          <MdPerson size={20} color="rgb(34, 40, 195)" />
        </div>
      </Popover>
    </div>
  );
}

export default ProfileSection;
