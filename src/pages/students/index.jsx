import DataTable from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardPenLine, Eye, UserPlus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import DataTable2 from "@/components/DataTable2";
import DeleteAlert from "@/components/DeleteAlert";

const index = () => {
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 items-center">
            <img className="h-10 w-10" src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`} alt="user-image" />
            <p>{row.getValue("name")} </p>
          </div>
        );
      },
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone Number",
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center space-x-7">
          <Link to={`/view/${row.original.id}`}>
            <Eye className="w-5 h-5" />
          </Link>
          <Link to={`/edit/${row.original.id}`} className="">
            <ClipboardPenLine className="w-5 h-5" />
          </Link>
          <DeleteAlert />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];

   const data = [
     {
       name: "John Doe",
       email: "john@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Alice Smith",
       email: "alice@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "blocked",
     },
     {
       name: "Bob Johnson",
       email: "bob@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Emma Brown",
       email: "emma@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Michael Davis",
       email: "michael@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Sophia Wilson",
       email: "sophia@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Liam Garcia",
       email: "liam@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Olivia Martinez",
       email: "olivia@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Noah Rodriguez",
       email: "noah@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Ava Lopez",
       email: "ava@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Elijah Hernandez",
       email: "elijah@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Mia Gonzalez",
       email: "mia@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "James Perez",
       email: "james@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Charlotte Carter",
       email: "charlotte@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
     {
       name: "Benjamin Taylor",
       email: "benjamin@example.com",
       phone: "123-456-7890",
       country: "USA",
       status: "approved",
     },
   ];
  return (
    <div>
      <Card className="mb-5">
        <CardHeader className="py-3 ">
          <div className="md:flex items-center justify-between">
            <CardTitle className="md:text-2xl text-lg mb-3 my-auto">All Students</CardTitle>
            <Link to="new">
              <Button className="bg-green-600 hover:bg-green-600 flex items-center">
                Add Student <UserPlus className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>
      <DataTable2 columns={columns} data={data} />
    </div>
  );
};

export default index;
