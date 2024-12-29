"use client";
import React from "react";
import { Card } from "./ui/card";
import { events } from "./EventCalender";

const Announcements = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h5>Announcements</h5>
        <span>View all</span>
      </div>
      {events.map((item) => (
        <div key={item.id} className="my-5 p-3 dark:bg-[#18181B] rounded-md">
          <div className="flex justify-between">
            <h3 className="text-base text-slate-400 dark:text-white ">
              {item.title}
            </h3>
            <p className="text-[10px] text-slate-500">{item.time}</p>
          </div>
          <p className="text-sm text-slate-300 py-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
