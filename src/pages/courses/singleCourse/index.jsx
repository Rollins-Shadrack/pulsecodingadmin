import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { singleCourse } from "@/constants/courses";
import { Play } from "lucide-react";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Curricullum from "./components/Curricullum";

const index = () => {
  const [enroll, setEnroll] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(Object.keys(singleCourse.courseDetails)[0]);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson)
  }

  const selectedLessonContent = singleCourse.courseDetails[selectedLesson]
  console.log(selectedLessonContent)

  const handleEnrollChange = () => {
    setEnroll(!enroll);
  };

  const percentage = Math.floor(Math.random() * 100);
  const customStyles = {
    path: {
      stroke: `#1B5`,
    },
    // trail: {
    //   stroke: "#95D5B2",
    // },
    text: {
      fill: "#1B5",
      fontSize: "16px",
    },
  };

  return (
    <div>
      <Card className="shadow-lg text-gray-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">{singleCourse.title}</CardTitle>
            <Button
              className={`${enroll ? "bg-green-600 hover:bg-green-600" : "bg-black hover:bg-black"} text-white   uppercase px-10`}
              onClick={handleEnrollChange}>
              {enroll ? "In Progress " : " Enroll Course"}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {enroll ? (
        <div className="mt-10">
          <div className="flex justify-between items-center my-5">
            <h1 className="font-medium text-4xl">00:05</h1>
            <div class="h-32 w-32">
              <CircularProgressbar value={percentage} text={`${percentage}%`} styles={customStyles} />
            </div>
          </div>
          <div className="md:flex w-full items-start justify-center lg:space-x-14 ">
            <div className="sticky top-28  md:w-2/12 rounded-lg p-4 shadow-sm border">
              {Object.keys(singleCourse.courseDetails).map((lesson, idx) => (
                <h1
                  key={idx}
                  className="lg:text-lg text-base font-medium mb-2   cursor-pointer whitespace-nowrap"
                  onClick={() => handleLessonClick(lesson)}>
                  <span className={`${lesson === selectedLesson ? "text-xl font-bold" : ""} w-2/3`}>{lesson}</span>
                </h1>
              ))}
            </div>
            <div className="md:w-10/12 w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div dangerouslySetInnerHTML={{ __html: selectedLessonContent.text }} />
              <div className="relative">
                <div className="absolute inset-0 h-full">
                  <img src={selectedLessonContent.img} alt="pulsecoding.com" className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-center absolute inset-0">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                    <Play className="text-pink-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between my-10">
            <Button className="px-8 bg-black hover:bg-black hover:text-white">Previous</Button>
            <Button className="px-8 bg-black hover:bg-black hover:text-white">Next</Button>
          </div>
        </div>
      ) : (
        <Tabs defaultValue="overview" className="mt-10">
          <TabsList className="grid w-fit grid-cols-4">
            <TabsTrigger value="overview">OverView</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="bg-muted rounded-b-lg">
            <div className="p-4" style={{ fontSize: "16px", lineHeight: "1.5", textAlign: "justify" }}>
              <div dangerouslySetInnerHTML={{ __html: singleCourse.overview }} />
            </div>
          </TabsContent>
          <TabsContent value="curriculum">
            <Curricullum />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default index;
