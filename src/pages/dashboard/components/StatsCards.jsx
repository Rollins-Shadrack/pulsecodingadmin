import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { statsCards } from "@/constants/dashboard";
import React from "react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
      {statsCards.map((card, idx) => (
        <Card className="shadow-lg text-gray-700 " key={idx}>
          <CardHeader>
            <div className="flex justify-between">
              <div className=" flex flex-col space-y-4">
                <CardTitle className="text-xl">{card.title}</CardTitle>
                <CardDescription className="font-medium text-base">{card.number}</CardDescription>
              </div>
              <div className="flex items-center justify-center p-2 bg-black h-fit w-fit rounded-lg">
                <div className="text-white">{React.createElement(card.icon, { size: "25" })}</div>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
