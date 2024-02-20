import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { singleCourse } from '@/constants/courses';
import { Clock10, File, FolderOpen, Play, PlayCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Curricullum = () => {
  return (
    <div className="py-5">
      <p className="text-base text-justify">{singleCourse.curriculum.desc}</p>
      <div className="lg:w-4/5 py-5">
        <div className="md:flex items-center justify-between my-2">
          <h4 className="font-medium text-lg mb-3">{singleCourse.curriculum.title}</h4>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FolderOpen className="h-4 w-4 text-orange-500" />
              <p className="md:text-base text-xs whitespace-nowrap font-medium">{singleCourse.curriculum.features.sections} Sections</p>
            </div>
            <div className="flex items-center space-x-2">
              <PlayCircle className="h-4 w-4 text-[#34197c]" />
              <p className="md:text-base text-xs whitespace-nowrap font-medium">{singleCourse.curriculum.features.lectures} lectures</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock10 className="h-4 w-4 text-orange-500" />
              <p className="md:text-base text-xs whitespace-nowrap font-medium">{singleCourse.curriculum.features.duration} </p>
            </div>
          </div>
        </div>
        <Card className="p-2 px-4">
          <Accordion type="single" collapsible className="w-full">
            {singleCourse.curriculum.lessons.map((lesson, idx) => (
              <AccordionItem value={`item-${idx}`}>
                <AccordionTrigger extraText={lesson.header.features}>{lesson.header.title}</AccordionTrigger>
                <AccordionContent>
                  {lesson.content.map((content, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        {content.isVideo ? <Play className="w-5 h-5" /> : <File className="w-5 h-5" />}{" "}
                        <p className="text-sm font-medium">{content.title}</p>
                      </div>
                      <p className="text-sm font-medium">{content.duration}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </div>
  );
}

export default Curricullum