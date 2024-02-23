import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { singleCourse } from "@/constants/courses";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isEnrolled = location.pathname.includes("enrolled");
  return (
    <div>
      <Card className="shadow-lg text-gray-700">
        <CardHeader className="py-4">
          <div className="md:flex justify-between items-center">
            <CardTitle className="md:text-xl text-lg mb-3">{singleCourse.title}</CardTitle>
            <Link to={`${isEnrolled ? "" : "enrolled"}`}>
              <Button
                className={` ${
                  isEnrolled ? "bg-green-600 hover:bg-green-600" : "bg-black hover:bg-black"
                }   text-white   uppercase md:px-10 w-full md:w-fit `}>
                {isEnrolled ? "In Progress" : "Enroll Course"}
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>

      <Outlet />
    </div>
  );
};

export default Layout;
