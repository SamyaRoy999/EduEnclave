import CountCharts from "@/components/CountCharts";
import UserCard from "@/components/UserCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 m-4 md:flex-row">
      {/* left  */}
      <div className="w-full lg:w-2/3 ">
        <div className="grid grid-cols-4 gap-4 ">
          <UserCard type="student" />
          <UserCard type="Teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* pic chart */}
          <div>
            <p className=" text-lg">Students</p>
            <CountCharts />
          </div>
        </div>
      </div>
      {/* right  */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default page;
