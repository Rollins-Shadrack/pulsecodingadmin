import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TextEditor from "@/components/TextEditor";

const NewCourseModule = ({form}) => {
      const [modules, setModules] = useState([{ moduleName: "", chapters: [{ chapterName: "", chapterDesc: "", chapterVideo: "" }] }]);
    const handleModuleChange = (index, fieldName, value) => {
      const updatedModules = [...modules];
      updatedModules[index][fieldName] = value;
      setModules(updatedModules);
    };

    const handleChapterChange = (moduleIndex, chapterIndex, value) => {
      const updatedModules = [...modules];
      updatedModules[moduleIndex].chapters[chapterIndex] = value;
      setModules(updatedModules);
    };

    const addModule = () => {
      setModules([...modules, { moduleName: "", chapters: [""] }]);
    };

    const addChapter = (moduleIndex) => {
      const updatedModules = [...modules];
      updatedModules[moduleIndex].chapters.push("");
      setModules(updatedModules);
    };
  return (
    <div className="pb-14">
      {modules.map((module, moduleIndex) => (
        <div key={moduleIndex} className="mb-10">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mb-3">
              <FormField
                control={form.control}
                name={`courseName`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Module Name</FormLabel>
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
                    <FormLabel>Module Resources</FormLabel>
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
              name="ModuleDesc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Module Description</FormLabel>
                  <FormControl>
                    <TextEditor field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {module.chapters.map((chapter, chapterIndex) => (
            <div className="">
              <h2 className="text-base font-medium text-gray-500 my-2">{`Chapter ${chapterIndex + 1}`}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-3">
                <FormField
                  key={chapterIndex}
                  control={form.control}
                  name={`modules[${moduleIndex}].chapters[${chapterIndex}]`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chapter Name</FormLabel>
                      <FormControl>
                        <Input placeholder={"Chapter Name"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  key={chapterIndex}
                  control={form.control}
                  name={`modules[${moduleIndex}].chapters[${chapterIndex}]`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chapter Video</FormLabel>
                      <FormControl>
                        <Input placeholder={"Chapter Name"} type="file" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chapter Description</FormLabel>
                    <FormControl>
                      <TextEditor field={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
          <Button type="button" className="bg-black  hover:bg-black float-start -mt-7 mx-4  my-3" onClick={() => addChapter(moduleIndex)}>
            Add Chapter
          </Button>
        </div>
      ))}
      <Button type="button" className="bg-black hover:bg-black float-end -mt-7" onClick={addModule}>
        Add Module
      </Button>
    </div>
  );
};

export default NewCourseModule;
