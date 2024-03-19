import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { singleCourse } from "@/constants/courses";
import React from "react";
import Curricullum from "./components/Curricullum";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock10, PlayCircle } from "lucide-react";

const Chapters = () => {
  return (
    <Card className="mt-8 p-2 ">
      <Tabs defaultValue="overview">
        <TabsList className="grid w-fit grid-cols-4">
          <TabsTrigger value="overview">OverView</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className=" rounded-b-lg">
          <Card className="shadow mb-5 text-gray-700 mt-4 ">
            <CardHeader>
              <div className="grid md:grid-cols-3 items-center gap-4">
                <CardTitle className="text-xl mb-3  md:col-span-2">Introduction to JavaScript</CardTitle>
                <div className="flex justify-between items-center w-4/5 mb-8">
                  <div className="inline-flex items-center">
                    <Clock10 className="mr-3 w-4 h-4 text-yellow-500" />
                    <p className="font-medium text-sm"> 49m </p>
                  </div>
                </div>
              </div>

              <div dangerouslySetInnerHTML={{ __html: singleCourse.overview }} />
            </CardHeader>
          </Card>

          <Card className="shadow mb-5 text-gray-700 mt-4 ">
            <CardHeader>
              <div className="grid md:grid-cols-3 items-center gap-4">
                <CardTitle className="text-xl mb-3  md:col-span-2">Deep Dive to JavaScript</CardTitle>
                <div className="flex justify-between items-center w-4/5 mb-8">
                  <div className="inline-flex items-center">
                    <Clock10 className="mr-3 w-4 h-4 text-yellow-500" />
                    <p className="font-medium text-sm">2h 49m </p>
                  </div>
                </div>
              </div>

              <div dangerouslySetInnerHTML={{ __html: singleCourse.overview }} />
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="curriculum">
          <Curricullum />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default Chapters;
