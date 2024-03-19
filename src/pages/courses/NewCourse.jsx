import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCheck, BookPlus } from "lucide-react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Accordion ,AccordionContent, AccordionItem, AccordionTrigger } from "./components/featured-accordion";
import NewCourseModule from "./components/newcourse/Modules";
import Details from "./components/newcourse/Details";
import Requirements from "./components/newcourse/Requirements";

const NewCourse = () => {
  const form = useForm();

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <div>
      <Card className="mb-5 shadow">
        <CardHeader className="py-3 ">
          <div className="md:flex items-center justify-between">
            <CardTitle className="md:text-2xl text-lg mb-3 my-auto flex items-center">
              New Course <BookPlus className="w-5 h-5 ml-2" />
            </CardTitle>

            <Link to="/dashboard/courses/all">
              <Button className="bg-green-600 hover:bg-green-600 flex items-center">
                All Courses <BookCheck className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>
      <Card className="shadow">
        <CardHeader className="py-3 ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1" defaultOpen>
                  <AccordionTrigger className="text-brandPrimary">Course Details</AccordionTrigger>
                  <AccordionContent className="mx-4">
                    <Details form={form} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-brandPrimary">Modules</AccordionTrigger>
                  <AccordionContent className="mx-4">
                    <NewCourseModule form={form} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-brandPrimary"> Course Requirements</AccordionTrigger>
                  <AccordionContent className="mx-4">
                    <Requirements form={form} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-brandPrimary"> Price and Payment Options</AccordionTrigger>
                  <AccordionContent className="mx-4">df</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-brandPrimary"> Student Interaction and Support</AccordionTrigger>
                  <AccordionContent className="mx-4">df</AccordionContent>
                </AccordionItem>
              </Accordion>
              <Button type="submit" className="bg-black hover:bg-black">
                Save
              </Button>
            </form>
          </Form>
        </CardHeader>
      </Card>
    </div>
  );
};

export default NewCourse;
