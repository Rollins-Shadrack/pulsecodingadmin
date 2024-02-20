import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { coursesCards } from "@/constants/courses";
import React from "react";

const CoursesCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
      {coursesCards.map((card, idx) => (
        <Card className="shadow-lg text-gray-700">
          <CardHeader>
            <div className="p-2 bg-gray-200 rounded-lg w-fit">
              <div className="">{React.createElement(card.icon, { size: "25" })}</div>
            </div>
            <CardTitle className="text-lg">{card.title}</CardTitle>
            <div className="grid grid-cols-3 items-center gap-2">
              <div className="col-span-2 h-2 bg-gray-200 w-full rounded-lg">
                <div className="w-1/4 bg-black h-2 rounded-lg"></div>
                      </div>
                      <p className="font-medium text-xs">4/20 Lessons</p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default CoursesCards;
