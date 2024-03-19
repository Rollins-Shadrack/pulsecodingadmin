import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { allCourses } from "@/constants/courses";
import { BookCheck, BookPlus, Clock10, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = allCourses.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(allCourses.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <div className="pb-5">
      <Card className="mb-5 shadow">
        <CardHeader className="py-3 ">
          <div className="md:flex items-center justify-between">
            <CardTitle className="md:text-2xl text-lg mb-3 my-auto flex items-center">
              All Courses <BookCheck className="w-5 h-5 ml-2" />
            </CardTitle>
            <div className="w-full md:w-1/2 flex justify-end items-center space-x-4 ">
              <Input className="md:w-4/5" placeholder={`Search `} />
              <Link to="/dashboard/courses/new">
                <Button className="bg-green-600 hover:bg-green-600 flex items-center">
                  New <BookPlus className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
      </Card>
      <div className="w-full">
        {currentCourses.map((course, idx) => (
          <Card className="shadow-lg mb-5 text-gray-700 " key={idx}>
            <CardHeader>
              <div className="grid md:grid-cols-3 items-center gap-4">
                <div className=" md:col-span-2 ">
                  <CardTitle className="text-xl mb-3">{course.title}</CardTitle>
                  <CardDescription className="text-justify">{course.desc}</CardDescription>
                </div>
                <div className="mx-auto  md:w-4/5 w-full ">
                  <div className="flex justify-between items-center w-4/5 mb-8">
                    <div className="inline-flex items-center">
                      <PlayCircle className="mr-3 w-4 h-4" />
                      <p className="font-medium text-sm">{course.chapters} Chapters</p>
                    </div>
                    <div className="inline-flex items-center">
                      <Clock10 className="mr-3 w-4 h-4 text-yellow-500" />
                      <p className="font-medium text-sm">{course.duration} </p>
                    </div>
                  </div>
                  <Link to={`/dashboard/courses/module`}>
                    <Button className="bg-black uppercase text-white hover:border hover:text-black w-full">Read More</Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
            </PaginationItem>
          )}
          {/* {[...Array(totalPages)].map((_, index) => (
            <React.Fragment key={index}>
              {(index === 0 || (index >= currentPage - 1 && index <= currentPage)) && (
                <PaginationItem isActive={currentPage === index + 1}>
                  <PaginationLink onClick={() => handlePageChange(index + 1)}>{index + 1}</PaginationLink>
                </PaginationItem>
              )}
              {index === 2 && currentPage < totalPages - 2 && <PaginationEllipsis />}
              {index > 2 && index >= totalPages - 2 && (
                <PaginationItem isActive={currentPage === index + 1}>
                  <PaginationLink onClick={() => handlePageChange(index + 1)}>{index + 1}</PaginationLink>
                </PaginationItem>
              )}
            </React.Fragment>
          ))} */}
          {[...Array(totalPages)].map((_, index) => (
            <React.Fragment key={index}>
              <PaginationItem isActive={currentPage === index + 1}>
                <PaginationLink onClick={() => handlePageChange(index + 1)}>{index + 1}</PaginationLink>
              </PaginationItem>
            </React.Fragment>
          ))}

          {currentPage === totalPages ? null : (
            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default index;
