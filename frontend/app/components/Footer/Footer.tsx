import React from "react";

function Footer() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-8 h-40 bg-[#EEEEEE]">
      <div className="flex justify-center text-blue-800 gap-6">
        <div>Booking</div>
        <div>Spaces</div>
        <div>Services</div>
        <div>Events</div>
        <div>Settings</div>
      </div>
      <div className="flex justify-center gap-6">
        <div>Email Us</div>
        <div>WhatsApp</div>
        <div>Call Us</div>
        <div>Careers</div>
      </div>
    </div>
  );
}

export default Footer;
