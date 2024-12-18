import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const UserCard = ({ type }: { type: string }) => {
  return (
    <Card>
      <CardHeader>
        <span className="bg-white rounded-lg text-center text-green-600 text-[10px] w-[45px]">
          12/24
        </span>
        <CardDescription className="py-2 text-lg">+ 10020</CardDescription>
        <CardTitle>{type}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
