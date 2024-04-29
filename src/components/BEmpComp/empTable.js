"use client";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { showemployee } from "@/lib/emphelper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "@/redux/empRedux/reducer";

const EmpTable = () => {
  const { isLoading, isError, data, error } = useQuery("employees", showemployee);
  const formVisible = useSelector((state) => state.app.client.toggleForm);
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

  const empUpdate = (_id) => {
    dispatch(toggleChangeAction(_id));
    if (formVisible) {
      dispatch(updateAction(_id));
    }
  };
  const empDelete = (_id) => {
    if (!formVisible) {
      dispatch(deleteAction(_id));
    }
  };

  const empActionButton = (params) => (
    <div className="flex justify-around gap-5">
      <button className="cursor" onClick={() => empUpdate(params.row._id)}>
        <BiEdit size={25} color={"rgb(34,197,94)"} />
      </button>
      <button className="cursor" onClick={() => empDelete(params.row._id)}>
        <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
      </button>
    </div>
  );

  const EmpHeader = [
    {
      field: "EmpAvatar",
      headerName: "E_ID",
      width: 70,
      renderCell: ImageField,
    },
    { field: "FullName", headerName: "FullName", width: 130 },
    { field: "Age", headerName: "Age", width: 20 },
    { field: "Gender", headerName: "Gender", width: 60 },
    { field: "Phone", headerName: "Phone", width: 100 },
    { field: "Address", headerName: "Address", width: 100 },
    { field: "JobType", headerName: "JobType", width: 90 },
    { field: "Experience", headerName: "Experience", width: 80 },
    {
      field: "RelAvatar",
      headerName: "R_ID",
      width: 70,
      renderCell: ImageField,
    },
    { field: "RelativeName", headerName: "RelativeName", width: 130 },
    { field: "RelativePhone", headerName: "RelativePhone", width: 100 },
    { field: "RelativeAddress", headerName: "RelativeAddress", width: 90 },
    { field: "Relationship", headerName: "Relationship", width: 90 },
    {
      field: "actions",
      headerName: "Actions",
      width: 90,
      renderCell: empActionButton,
    },
  ];
  const EmpList = data.response.map((empObj) => ({
    ...empObj,
    id: empObj._id,
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
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
};

export default EmpTable;

function ImageField(params) {
  return (
    <img
      src={params.value}
      alt="IdImage"
      className="h-10 w-12 flex  items-center justify-center"
    />
  );
}
