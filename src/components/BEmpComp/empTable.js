import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { EmpData } from './../../data/Empdata';

const EmpTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto mb-10">
        <thead>
          <tr className="bg-gray-500">
            <th className="px-6 py-2">
              <span className="text-gray-200">FirstName</span>
            </th>
            <th className="px-6 py-2">
              <span className="text-gray-200">LastName</span>
            </th>
            <th className="px-6 py-2">
              <span className="text-gray-200">PhoneNumber</span>
            </th>
            <th className="px-6 py-2">
              <span className="text-gray-200">Address</span>
            </th>
            <th className="px-6 py-2">
              <span className="text-gray-200">Age</span>
            </th>
            <th className="px-6 py-2">
              <span className="text-gray-200">Gender</span>
            </th>
            <th className="px-6 py-2">
              <span className="text-gray-200">JobType</span>
            </th>
            <th className="px-6 py-2">
              <span className="text-gray-200">Experience</span>
            </th>
            <th className="px-6 py-2">
              <span className="text-gray-200">Action</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {/* {EmpData.map((obj, i) => (
            <Tr {...obj} key={i} />
          ))} */}

          {/* Static data */}
          <tr className="bg-gray-50 text-center">
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Gamachu</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2"> Dula</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">+251926755643</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Addis Abeba</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">13</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">M</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Security Gurd</span>
            </td>
            <td className="px-6 py-2 r">
              <span className="text-center ml-2">19</span>
            </td>
            <td className="px-6 py-2 flex justify-around gap-5">
              <button className="cursor">
                <BiEdit size={25} color={"rgb(34,197,94)"} />
              </button>
              <button className="cursor">
                <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
              </button>
            </td>
          </tr>
          <tr className="bg-gray-50 text-center">
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Ehitu</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Doe</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">+251926755643</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Addis Abeba</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">23</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">F</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">house cleanr</span>
            </td>
            <td className="px-6 py-2 r">
              <span className="text-center ml-2">2</span>
            </td>
            <td className="px-6 py-2 flex justify-around gap-5">
              <button className="cursor">
                <BiEdit size={25} color={"rgb(34,197,94)"} />
              </button>
              <button className="cursor">
                <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
              </button>
            </td>
          </tr>
          <tr className="bg-gray-50 text-center">
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Gamachu</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2"> Dula</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">+251926755643</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Addis Abeba</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">13</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">M</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Security Gurd</span>
            </td>
            <td className="px-6 py-2 r">
              <span className="text-center ml-2">19</span>
            </td>
            <td className="px-6 py-2 flex justify-around gap-5">
              <button className="cursor">
                <BiEdit size={25} color={"rgb(34,197,94)"} />
              </button>
              <button className="cursor">
                <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
              </button>
            </td>
          </tr>
          <tr className="bg-gray-50 text-center">
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Ehitu</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Doe</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">+251926755643</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">Addis Abeba</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">23</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">F</span>
            </td>
            <td className="px-6 py-2 ">
              <span className="text-center ml-2">house cleanr</span>
            </td>
            <td className="px-6 py-2 r">
              <span className="text-center ml-2">2</span>
            </td>
            <td className="px-6 py-2 flex justify-around gap-5">
              <button className="cursor">
                <BiEdit size={25} color={"rgb(34,197,94)"} />
              </button>
              <button className="cursor">
                <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const Tr = (
  _id,
  firstname,
  lastname,
  phone,
  address,
  age,
  gender,
  jobtype,
  experiance
) => {
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-4 py-2">
        <span>{firstname || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{lastname || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{phone || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{address || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{age || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{gender || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{jobtype || "Unknown"}</span>
      </td>
      <td className="px-4 py-2">
        <span>{experiance || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 flex justify-around gap-5">
        <button className="cursor">
          {/* onClick={onUpdate} */}
          <BiEdit size={25} color={"rgb(34,197,94)"} />
        </button>
        <button className="cursor">
          {/* onClick={onDelete} */}
          <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
        </button>
      </td>
    </tr>
  );
};

export default EmpTable;
