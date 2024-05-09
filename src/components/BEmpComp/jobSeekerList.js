"use client";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { showemployee } from "@/lib/emphelper";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

const JobSeekerTable = () => {
  const { isLoading, isError, data, error } = useQuery(
    "employees",
    showemployee
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await showemployee();
        dispatch({ type: "FETCH_EMPLOYEES_SUCCESS", payload: responseData });
      } catch (error) {
        dispatch({ type: "FETCH_EMPLOYEES_FAILURE", payload: error.message });
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) return <div>Loading Please wait...</div>;
  if (isError) return <div>Error{error}</div>;

  const EmpHeader = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
    },
    {
      field: "FullName",
      headerName: "FullName",
      width: 140,
    },
    { field: "Age", headerName: "Age", width: 40 },
    { field: "Gender", headerName: "Gender", width: 70 },
    { field: "Address", headerName: "Address", width: 130 },
    { field: "JobType", headerName: "JobType", width: 130 },
    { field: "Experience", headerName: "Experience", width: 130 },
    { field: "RelativeName", headerName: "RelativeName", width: 140 },
    { field: "RelativeAddress", headerName: "RelativeAddress", width: 140 },
    { field: "Relationship", headerName: "Relationship", width: 130 },
    { field: "Agent", headerName: "AgentName", width: 130 },
  ];
  const EmpList = data.response.map((empObj, index) => ({
    ...empObj,
    id: empObj._id,
    id: index + 1,
  }));

  return (
    <div style={{ width: "97%", height: "auto", marginLeft: 20 }}>
      <DataGrid
        sx={{
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
        }}
        rows={EmpList}
        columns={EmpHeader}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        //checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default JobSeekerTable;
