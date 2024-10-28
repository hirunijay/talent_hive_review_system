import Link from "next/link";
import React from "react";
import ProfileSection from "./ProfileSection";
import LanguageSelector from "./LanguageSelector";

function Navbar() {
  const navlinks = [
    {
      text: "Spaces",
      path: "#",
    },
    {
      text: "Services",
      path: "#",
    },
    {
      text: "Users",
      path: "#",
    },
    {
      text: "About",
      path: "#",
    },
  ];
  return (
    <div className="flex items-center justify-between px-11 py-3 bg-white shadow">
      <div className="flex items-center justify-start gap-8">
        <div className="flex items-center space-x-2 text-lg">
          <p>Talent Hive Logo</p>
        </div>
        <div className="flex space-x-6">
          {navlinks.map((item, index) => (
            <Link
              href={item?.path}
              key={index}
              className="text-blue-800 text-lg font-normal"
            >
              {item?.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <ProfileSection />
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Navbar;
