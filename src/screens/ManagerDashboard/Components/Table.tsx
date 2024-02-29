import edit from "../../../assets_/icons/edit.svg";
import deletes from "../../../assets_/icons/Delete.svg";
import React, { useState } from "react";
import { EditPopupManager } from "./EditPopupManager";
import { useDispatch } from "react-redux";
import {
  deleteManagerAsync,
  getManagerAsync,
} from "@src/Redux/Slice/Admin/ManagerSlice";
import toast from "react-hot-toast";

export const Table = ({ managerData }: any) => {
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<any>(null);
  const [deleteID, setDeleteID] = useState<any>(null);
  const [deletePopupOpen, setdeletePopupOpen] = useState(false);

  const dispatch = useDispatch();
  const handleEditClick = (rowData: any) => {
    setEditPopupOpen(true);
    setSelectedRowData(rowData);
  };

    const handleDeleteClick = (id: any) => {
        setDeleteID(id)
        setdeletePopupOpen(true)
        
    };
    const deleteManager = () => {
        const id = deleteID
        dispatch(deleteManagerAsync(id)).then((res: any) => {
            if (res.payload.status) {
                
                toast.success(res.payload.message)
                dispatch(getManagerAsync())
                handlePopupClose()
            }
            else {
                toast.error(res.payload.message)
            }
        })
    } 

  const handleDeleteClick = (id: any) => {
    setDeleteID(id);
    setdeletePopupOpen(true);
    console.log("Delete clicked for:", id);
  };
  const deleteManager = () => {
    const id = deleteID;
    dispatch(deleteManagerAsync(id)).then((res: any) => {
      if (res.payload.status) {
        console.log("add", res.payload);
        toast.success(res.payload.message);
        dispatch(getManagerAsync());
        handlePopupClose();
      } else {
        toast.error(res.payload.message);
      }
    });
  };

  const tableHeading = `text-[#6B778C] border flex-wrap text-start ps-5 py-[8px]`;
  const tableData = `py-[10px] border flex-wrap text-start ps-5`;
  return (
    <div>
      <table className="min-w-full border border-gray-300">
        <tbody>
          <tr className="sticky top-0 z-10 bg-[#FAFAFA] font-bold capitalize">
            <td className={`${tableHeading}`}>Sr No</td>
            <td className={`${tableHeading}`}>Name</td>
            <td className={`${tableHeading}`}>Phone No.</td>
            <td className={`${tableHeading}`}>Employee Code</td>
            <td className={`${tableHeading}`}>Email</td>
            <td className={`${tableHeading}`}>Role</td>
            <td className={`${tableHeading} border-0 border-e-0 border-b`}></td>
            <td className={`${tableHeading} border-0 border-b`}></td>
          </tr>
          {managerData &&
            managerData.map((element: any, index: any) => (
              <tr key={index}>
                <td className={`${tableData} border-e-2`}>{index + 1}</td>
                <td className={`${tableData} capitalize`}>{element?.user?.name}</td>
                <td className={`${tableData}`}>{element?.user?.phoneNumber}</td>
                <td className={`${tableData}`}>{element?.employeeCode}</td>
                <td className={`${tableData}`}>{element?.user?.email}</td>
                <td className={`${tableData}`}>{element?.user?.role}</td>
                <td className={`${tableData} border-0 w-[4rem]`}>
                  <img
                    src={edit}
                    alt=""
                    className="w-[20px] cursor-pointer h-[20px]"
                    onClick={() => handleEditClick(element)}
                  />
                </td>
                <td className={`${tableData} border-0 w-[4rem]`}>
                  <img
                    src={deletes}
                    alt=""
                    className="w-[20px] cursor-pointer h-[20px]"
                    onClick={() => handleDeleteClick(element._id)}
                  />
                </td>

                {isEditPopupOpen && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-bg absolute inset-0"></div>
                    <div className="modal w-[700px] relative bg-white p-6 rounded-lg shadow-lg">
                      <EditPopupManager
                        selectedRowData={selectedRowData}
                        handleEditPopupClose={handlePopupClose}
                      />
                    </div>
                  </div>
                )}

                {deletePopupOpen && (
                  <div className="fixed inset-0 flex items-center z-50 justify-center ">
                    <div className="modal-bg absolute inset-0"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex flex-col gap-[16px]">
                        <h1 className="px-[12px] py-[8px] text-[20px]  bold">
                          Do you want to delete this file
                        </h1>
                        <div className="flex items-center justify-center gap-[20px]">
                          <div
                            className="border flex gap-[5px] bold rounded-[8px] px-[12px] py-[8px] cursor-pointer text-[14px]"
                            onClick={handlePopupClose}
                          >
                            {/* <img src={x} alt="" /> */}
                            Cancel
                          </div>
                          <div
                            onClick={deleteManager}
                            className="border flex gap-[5px] items-center rounded-[8px] px-[12px] py-[8px] cursor-pointer bg-[#f6e2e2]"
                          >
                            {/* <img src={deletes} alt="" className='w-[16px] h-[16px]' /> */}
                            <span className="text-[#F23A3A] bold text-[14px]">
                              Yes, Delete!
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
