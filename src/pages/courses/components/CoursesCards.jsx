import FeaturedCard from "@/components/FeaturedCard";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { coursesCards } from "@/constants/courses";
import {  PlayCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CoursesCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {coursesCards.map((card, idx) => (
        <Card key={idx} className="shadow-lg text-gray-700 w-full relative">
          <CardHeader>
            <div className="p-2 bg-gray-200 rounded-lg w-fit">
              <div className="">{React.createElement(card.icon, { size: "25" })}</div>
            </div>
            <CardTitle className="text-base">{card.title}</CardTitle>
            <div className=" lg:flex items-center justify-between">
              <div className="lg:w-8/12 w-full h-2 bg-gray-200  rounded-lg">
                <div className="w-1/4 bg-black h-2 rounded-lg"></div>
              </div>
              <p className="font-medium text-xs">4/20 Lessons</p>
            </div>
          </CardHeader>
          <Link to="5" className="absolute top-1 right-1 text-xs flex items-center p-1 px-2  text-black rounded-md font-medium underline">
            <PlayCircle className="mr-2 w-4 h-4" />
            <p className="">Continue</p>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default CoursesCards;
