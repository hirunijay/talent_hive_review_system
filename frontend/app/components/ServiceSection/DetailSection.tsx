import React from "react";

function DetailSection() {
  const days = [
    { day: "Mon", available: true },
    { day: "Tue", available: true },
    { day: "Wed", available: true },
    { day: "Thu", available: true },
    { day: "Fri", available: true },
    { day: "Sat", available: false },
    { day: "Sun", available: false },
  ];
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-[36px] font-normal text-gray-600">
        Full Stack Developer | Web Development
      </h2>
      <div className="flex flex-row gap-12">
        <div>
          <p className="text-gray-400 text-base">Opens on</p>
          <div className="flex flex-row gap-3">
            {days.map((item, index) => (
              <p
                key={index}
                className={`${item.available ? "text-black" : "text-gray-300"}`}
              >
                {item.day}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-400">Offered by</p>
          <span className="font-normal text-gray-600 text-xl">Francesco</span>
        </div>
      </div>
      <p className="mt-2 text-gray-700">
        Hi! I develop user-friendly web applications with intuitive and creative
        solutions. Book a call and let's talk!
      </p>
    </div>
  );
}

export default DetailSection;
