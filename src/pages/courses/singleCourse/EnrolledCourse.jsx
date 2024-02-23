import * as React from "react";
import { Resize, ResizeHorizon } from "react-resize-layout";
import CodeEditor from "./components/CodeEditor";
import videoImage from "@/assets/course.jpg";
import { Play } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/featured-accordion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const EnrolledCourse = () => {
  
const customStyles = {
  path: {
    stroke: "#3cb043", // Set the stroke color to red
  },
};

  return (
    <div >
      <div className="flex items-center justify-between my-4">
        <h4 className="font-semibold text-5xl">00:05</h4>
        <div className="h-24 w-24">
          <CircularProgressbar value={60} text={`60%`} styles={customStyles} />;
        </div>
      </div>
      <div className="p-10 min-h-[500px] my-5  border-gray-200 relative w-full">
        <Resize handleWidth="3px" handleColor="#777">
          <ResizeHorizon width="500px" style={{ backgroundColor: "lightblue" }}>
            <p className="text-justify pr-8 mx-auto mb-2 overflow-y-auto no-scrollbar">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid dolores quia voluptate numquam sint asperiores sequi nam? Ducimus
              sit deleniti aut quaerat sint fugiat dolorem. Repellat eligendi inventore fuga atque, veniam enim fugit sequi? Ea autem qui, nesciunt
              aliquid dolor repellendus, magnam, facere adipisci nostrum pariatur nam temporibus unde nemo animi necessitatibus neque quaerat debitis
              quo. Voluptate reprehenderit odio quidem quibusdam tenetur velit error cumque, deserunt provident optio ut labore omnis? Expedita
              possimus natus porro nihil culpa nam aliquid perferendis ullam, maxime, iste non ad voluptatibus tempore in fugiat incidunt dolorem,
              vero nobis et. Explicabo mollitia nobis placeat ipsum.
            </p>
            <p className="text-justify pr-8 mx-auto mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid dolores quia voluptate numquam sint asperiores sequi nam? Ducimus
              sit deleniti aut quaerat sint fugiat dolorem. Repellat eligendi inventore fuga atque, veniam enim fugit sequi? Ea autem qui, nesciunt
              aliquid dolor repellendus, magnam, facere adipisci nostrum pariatur nam temporibus unde nemo animi necessitatibus neque quaerat debitis
              quo.
            </p>
          </ResizeHorizon>
          <ResizeHorizon minWidth="200px" style={{ backgroundColor: "lightgreen" }}>
            <div className="pl-8">
              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1" defaultOpen>
                  <AccordionTrigger>Video</AccordionTrigger>
                  <AccordionContent>
                    <div className="relative h-80">
                      <div className="absolute inset-0 h-full">
                        <img src={videoImage} alt="pulsecoding.com" className="h-full w-full object-cover rounded-lg" />
                      </div>
                      <div className="flex items-center justify-center absolute inset-0 bg-black bg-opacity-25">
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                          <Play className="text-pink-500" />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Code Editor</AccordionTrigger>
                  <AccordionContent>
                    <CodeEditor />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Assessment</AccordionTrigger>
                  <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ResizeHorizon>
        </Resize>
      </div>
    </div>
  );
};

export default EnrolledCourse;
