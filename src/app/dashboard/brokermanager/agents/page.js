"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@/components/ui/button";

const columns = [
  { field: "id", headerName: "No", width: 70 },
  { field: "fullName", headerName: "Full Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phonenumber", headerName: "Phone Number", width: 200 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderHeader: (params) => <strong>{"Actions "}</strong>,

    renderCell: (params) => (
      <div>
        <IconButton
          aria-label="edit"
          onClick={() => handleEdit(params.id)}
          size="small"
          style={{ color: "green" }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => handleDelete(params.id)}
          size="small"
          style={{ color: "red" }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="view"
          onClick={() => handleView(params.id)}
          size="small"
        ></IconButton>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    fullName: "Nebiyat Hassen",
    email: "wkusw204@gmail.com",
    phonenumber: "0994104901",
  },
  {
    id: 2,
    fullName: "Nebiyat Hassen",
    email: "wkusw204@gmail.com",
    phonenumber: "0994104901",
  },
  {
    id: 3,
    fullName: "Nebiyat Hassen",
    email: "wkusw204@gmail.com",
    phonenumber: "0994104901",
  },
  {
    id: 4,
    fullName: "Nebiyat Hassen",
    email: "wkusw204@gmail.com",
    phonenumber: "0994104901",
  },
];

export default function DataTable() {
  return (
    <div className="ml-12">
      <Button className="bg-green mb-2 hover:bg-green/90">Add</Button>
      <div style={{ height: 520, width: "95%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          checkboxSelection
        />
      </div>
    </div>
  );
}
