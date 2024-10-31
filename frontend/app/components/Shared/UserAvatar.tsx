import React from "react";

type UserAvatarProps = {
  proId: string;
};

function UserAvatar({ proId }: UserAvatarProps) {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full text-white font-bold">
      {proId}
    </div>
  );
}

export default UserAvatar;
