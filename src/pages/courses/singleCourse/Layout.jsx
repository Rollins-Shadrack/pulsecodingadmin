import Breadcrumbs from "@/components/BreadCrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { singleCourse } from "@/constants/courses";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ModulesSidebar from "./components/ModulesSidebar";

const Layout = () => {
  const [isEnrolled, setIsEnrolled] = useState(false)
  return (
    <div>
      <Card className="shadow-lg text-gray-700">
        <CardHeader className="py-4">
          <div className="md:flex justify-between items-center">
            <div className="flex flex-col space-y-3">
              <CardTitle className="md:text-xl text-lg mb-3">{singleCourse.title}</CardTitle>
            </div>

            <Link to={`${isEnrolled ? "" : "/dashboard/courses/module"}`} onClick={() => setIsEnrolled(!isEnrolled)}>
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

      <div className="flex space-x-3 w-full mt-8">
        <div className="w-3/12">
          <ModulesSidebar />
        </div>
        <div className="w-9/12 flex flex-col space-y-2 ">
          <Breadcrumbs />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
