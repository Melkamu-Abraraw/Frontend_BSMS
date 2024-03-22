import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { EmpData } from "@/data/Empdata";

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "FirstName", headerName: "FirstName", width: 90 },
  { field: "LastName", headerName: "LastName", width: 90 },
  { field: "phoneNumber", headerName: "Phone", width: 90 },
  { field: "DOB", headerName: "DOB", width: 90 },
  { field: "Experience", headerName: "Experience", width: 90 },
  { field: "Gender", headerName: "Gender", width: 90 },
  { field: "JobType", headerName: "JobType", width: 90 },
  { field: "Skill", headerName: "Skill", width: 90 },
  { field: "Description", headerName: "Description", width: 90 },
  {
    field: "actions",
    headerName: "Actions",
    width: 90,
    renderCell: (params) => (
      <div className="flex justify-around gap-5">
        <button className="cursor">
          <BiEdit size={25} color={"rgb(34,197,94)"} />
        </button>
        <button className="cursor">
          <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
        </button>
      </div>
    ),
  },
];
const rows = EmpData.map((emp, index) => ({
  ...emp,
  id: index + 1,
}));

const EmpTable = () => {
  return (
    <div style={{ width: "99%", justifyItems: "center" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
};

export default EmpTable;
