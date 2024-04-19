"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

const columns = [
  { field: "id", headerName: "No", width: 70 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "actions",
    headerName: "Actions",
    width: 110,
    renderHeader: (params) => <strong>{"Actions "}</strong>,

    renderCell: (params) => (
      <div>
        <Link href="/dashboard/manage/update">
          <IconButton aria-label="edit" size="small" style={{ color: "green" }}>
            <EditIcon />
          </IconButton>
        </Link>

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
    firstName: "Jon",
    lastName: "Snow",
    email: "wkusw204@gmail.com",
  },
  {
    id: 2,
    firstName: "Cersei",
    lastName: "Snow",
    email: "wkusw204@gmail.com",
  },
  {
    id: 3,
    firstName: "Jaime",
    lastName: "Snow",
    email: "wkusw204@gmail.com",
  },
  {
    id: 4,
    firstName: "Arya",
    lastName: "Snow",
    email: "wkusw204@gmail.com",
  },
];

export default function DataTable() {
  return (
    <div className="ml-12">
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
