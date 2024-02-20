import React from "react";
import CoursesCards from "./components/CoursesCards";
import Charts from "./components/Charts";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h4 className="md:text-2xl text-lg font-medium text-gray-700 ">Ongoing Courses</h4>
        <Link to="/courses/all" className="font-medium">
          All Courses
        </Link>
      </div>
      <CoursesCards />
      <div className="my-10 mt-14">
        <Charts />
      </div>
    </div>
  );
};

export default index;
