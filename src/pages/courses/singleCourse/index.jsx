import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { singleCourse } from "@/constants/courses";
import React from "react";
import Curricullum from "./components/Curricullum";


const index = () => {
  return (

          <Tabs defaultValue="overview" className="mt-8">
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

  );
};

export default index;
