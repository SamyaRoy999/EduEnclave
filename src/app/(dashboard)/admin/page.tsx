import AttendanceCharts from "@/components/AttendanceCharts";
import CountCharts from "@/components/CountCharts";
import EventCalender from "@/components/EventCalender";
import FinanceCharts from "@/components/FinanceCharts";
import UserCard from "@/components/UserCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 m-6 md:flex-row">
      {/* left  */}
      <div className="w-full lg:w-2/3 ">
        <div className="grid grid-cols-4 gap-4 ">
          <UserCard type="student" />
          <UserCard type="Teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex gap-4 flex-col items-center justify-center my-8 lg:flex-row  ">
          {/*Count Charts */}
          <div className="">
            <p className=" text-lg">Students</p>
            <CountCharts />
          </div>
          {/* Attendance Charts */}
          <div>
            <p className=" text-lg ">Attendance</p>
            <div>
              <AttendanceCharts />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <p className=" text-lg ">Finance</p>
          <FinanceCharts />
        </div>
      </div>
      {/* right  */}
      <div className="w-full lg:w-1/3">
        {/* calender */}
        <EventCalender />
      </div>
    </div>
  );
};

export default page;
