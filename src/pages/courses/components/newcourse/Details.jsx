import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import TextEditor from "@/components/TextEditor";

const Details = ({ form }) => {


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mb-3">
        <FormField
          control={form.control}
          name={`courseName`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Name</FormLabel>
              <FormControl>
                <Input placeholder="Course Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`courseThumbnail`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course ThumbNail</FormLabel>
              <FormControl>
                <Input placeholder="Course Name" type="file" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="CourseDesc"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Course Description</FormLabel>
            <FormControl className="mb-10">
              <TextEditor field={ field } />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Details;
