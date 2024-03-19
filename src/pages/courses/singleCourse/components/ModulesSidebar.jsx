import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { singleCourse } from "@/constants/courses";
import { Link } from "react-router-dom";

const ModulesSidebar = () => {
  const [isOpen, setIsOpen] = useState(singleCourse.modules.map(() => false));

  const toggleModule = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Card className="p-2 overflow-y-auto">
      {singleCourse.modules.map((module, idx) => (
        <div key={idx}>
          <div
            className={`flex items-center justify-between text-md font-normal rounded-md p-2 cursor-pointer w-full ${
              isOpen[idx] && "transition-all ease-in-out duration-500"
            }`}
            onClick={() => toggleModule(idx)}>
            <div className="flex items-center justify-between w-full">
              <h2 className="text-sm text-gray-700">{module.title}</h2>
              {isOpen[idx] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </div>
          </div>
          {isOpen[idx] && (
            <div className="ml-2 flex flex-col">
              {module.chapters.map((chapter, index) => (
                <Link to={`/dashboard/courses/module/chapters/${"lessons"}`} key={index} className="text-gray-600 ml-2 text-sm cursor-pointer hover:underline">
                  {chapter.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </Card>
  );
};

export default ModulesSidebar;
