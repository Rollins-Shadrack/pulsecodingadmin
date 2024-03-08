"use client";
import React from "react";

import DataTable2 from "@/components/DataTable2";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";


const columns= [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

const data = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];

const index = () => {
  return (
    <div>
      <Card className="mb-5 shadow">
        <CardHeader className="py-3 ">
          <div className="md:flex items-center justify-between">
            <CardTitle className="md:text-2xl text-lg mb-3 my-auto  flex items-center">
              Settings
              <Settings className="w-5 h-5 ml-2 mt-1" />
            </CardTitle>
          </div>
        </CardHeader>
      </Card>
      <DataTable2 columns={columns} data={data} />
    </div>
  );
};

export default index;
