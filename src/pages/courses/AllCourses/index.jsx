import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { allCourses } from "@/constants/courses";
import { Clock10, PlayCircle } from "lucide-react";
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

  console.log(totalPages)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <div className="pb-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-2xl font-medium text-gray-700 mb-3">All Courses</h4>

        <Input className="w-1/5" placeholder={`Search `}/>
      </div>
      <div className="w-full">
        {currentCourses.map((course, idx) => (
          <Card className="shadow-lg mb-5 text-gray-700 " key={idx}>
            <CardHeader>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className=" col-span-2 ">
                  <CardTitle className="text-xl mb-3">{course.title}</CardTitle>
                  <CardDescription className="">{course.desc}</CardDescription>
                </div>
                <div className="mx-auto  w-4/5 ">
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
                  <Link to={`/courses/${5}`}>
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
