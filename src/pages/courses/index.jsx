import React from "react";
import CoursesCards from "./components/CoursesCards";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";

const index = () => {
  return (
    <div className="h-full pb-10">
      <Card className="mb-5">
        <CardHeader className="py-3 ">
          <div className="md:flex items-center justify-between">
            <CardTitle className="md:text-2xl text-lg mb-3 my-auto">Ongoing Courses</CardTitle>
            <Link to="all">
              <Button className="bg-green-600 hover:bg-green-600 flex items-center">
                All Courses <Layers className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>
      <CoursesCards />
    </div>
  );
};

export default index;
