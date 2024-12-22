"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Card } from "./ui/card";
import Announcements from "./Announcements";

export const events = [
  {
    id: 1,
    title: "Annual Sports Day",
    time: "2024-12-30 9:00 AM",
    description:
      "A day filled with exciting sports activities and competitions for students of all grades.",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    time: "2025-01-05 10:00 AM",
    description:
      "An opportunity for parents to discuss their child's progress with the teachers.",
  },
  {
    id: 3,
    title: "Science Exhibition",
    time: "2025-02-10 11:00 AM",
    description:
      "Students will showcase their innovative science projects and experiments.",
  },
  {
    id: 4,
    title: "Cultural Fest",
    time: "2025-03-15 4:00 PM",
    description:
      "An evening of music, dance, and drama performed by students and staff.",
  },
];

const EventCalender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-full max-w-64 lg:w-full mx-auto"
      />
      <div>
        <h1>Events</h1>
        {events.map((item) => (
          <Card key={item.id} className="my-5 p-3">
            <div className="flex justify-between items-center">
              <h3 className="text-base text-slate-400 dark:text-white ">
                {item.title}
              </h3>
              <p className="text-[10px] text-slate-400">{item.time}</p>
            </div>
            <p className="text-sm text-slate-300 py-1">{item.description}</p>
          </Card>
        ))}
      </div>
      <Announcements />
    </>
  );
};

export default EventCalender;
