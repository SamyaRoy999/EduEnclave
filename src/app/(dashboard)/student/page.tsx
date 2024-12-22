import EventCalender from "@/components/EventCalender";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 m-6 md:flex-row">
      {/* left  */}
      <div className="w-full lg:w-2/3 "></div>
      {/* right  */}
      <div className="w-full lg:w-1/3">
        {/* calender */}
        <EventCalender />
      </div>
    </div>
  );
};

export default page;
