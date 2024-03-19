import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Requirements = ({form}) => {
  return (
    <div className="flex flex-col space-y-3">
      <FormField
        control={form.control}
        name={`courseName`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Prerequisites</FormLabel>
            <FormControl>
              <Input placeholder="Prerequisites" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="CourseDesc"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Course Requirements</FormLabel>
            <FormControl>
              <Textarea placeholder="Required Skills/Background Knowledge/Recommended Software/Tools" className="resize-none" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default Requirements