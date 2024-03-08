import DataTable2 from '@/components/DataTable2';
import DeleteAlert from '@/components/DeleteAlert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardPenLine, Layers } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const index = () => {
  const columns = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "date",
      header: "Added Date",
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center space-x-5">
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
      title: "Certificate for completion",
      date: "30/11/2022",
    },
    {
      title: "ADSG- Land Management System",
      date: "30/11/2022",
    },
    {
      title: "Certificate for completion",
      date: "30/11/2022",
    },
    {
      title: "Certificate Title",
      date: "30/11/2022",
    },
  ];
  return (
    <div>
      <Card className="mb-5">
        <CardHeader className="py-3 ">
          <div className="md:flex items-center justify-between">
            <CardTitle className="md:text-2xl text-lg mb-3 my-auto">All Certificates</CardTitle>
            <Link to="new">
              <Button className="bg-green-600 hover:bg-green-600 flex items-center">
                Add Certificate <Layers className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>
      <DataTable2 columns={columns} data={data} />
    </div>
  );
}

export default index