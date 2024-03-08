import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { ClipboardPenLine, Eye, Trash2 } from 'lucide-react';
import DeleteAlert from './DeleteAlert';
import { Link } from 'react-router-dom';

const DataTable = () => {

    const columns = [
      {
        field: "image",
        headerName: "Image",
        flex: 1, 
        renderCell: (params) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={params.value ? params.value : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                className="object-cover h-11 w-11 rounded-full"
              />
            </div>
          );
        },
      },
      { field: "fullname", headerName: "Full Name", flex: 2 }, 
      { field: "phone", headerName: "Phone Number", flex: 2 },
      { field: "country", headerName: "Country", flex: 2 },
      { field: "status", headerName: "Status", flex: 2 },
      {
        field: "actions",
        headerName: "Actions",
        flex: 2,
        sortable: false,
        renderCell: ActionsCell,
      },
    ];
    const rows = [
      {
        id: 1,
        image:
          "https://media.istockphoto.com/id/938709362/photo/portrait-of-a-girl.webp?b=1&s=170667a&w=0&k=20&c=Qq2UW3DlJ6ye19GLHmc66Kxld9Z7D_r1o-KN7FJArKw=",
        fullname: "John Doe",
        phone: "123-456-7890",
        country: "USA",
        status: "approved",
      },
      { id: 2, image: "", fullname: "Jane Doe", phone: "987-654-3210", country: "Canada", status: "blocked" },
      {
        id: 3,
        image:
          "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
        fullname: "Albine Doe",
        phone: "123-456-7890",
        country: "USA",
        status: "pending",
      },
    ];
    function ActionsCell(params) {
      return (
        <div className="flex items-center justify-between">
          <Link to="">
            <Eye className="w-5 h-5" />
          </Link>
          <Link to="" className="mx-4">
            <ClipboardPenLine className="w-5 h-5" />
          </Link>
          <DeleteAlert />
        </div>
      );
    }

    return (
      <div className="w-full">
        <DataGrid rows={rows} columns={columns} pageSize={1} />
      </div>
    );
}

export default DataTable