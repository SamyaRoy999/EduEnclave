import BigCalendar from "@/components/BigCalender";
import EventCalender from "@/components/EventCalender";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
const StudentPage = () => {
  return (
    <div className="flex flex-col gap-4 m-6 md:flex-row">
      {/* left  */}
      <div className="w-full lg:w-2/3 ">
        <h1 className="">schedule(4A) </h1>
        <BigCalendar />
      </div>
      {/* right  */}
      <div className="w-full lg:w-1/3">
        {/* calender */}
        <EventCalender />
      </div>
    </div>
  );
};

export default StudentPage;
