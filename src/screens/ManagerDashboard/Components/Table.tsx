
import edit from "../../../assets_/icons/edit.svg"
import deletes from "../../../assets_/icons/Delete.svg"
import React, { useState } from 'react';
import { EditPopupManager } from "./EditPopupManager";
import { useDispatch } from "react-redux";
import { deleteManagerAsync, getManagerAsync } from "@src/Redux/Slice/Admin/ManagerSlice";

export const Table = ({ managerData }: any) => {
    const [isEditPopupOpen, setEditPopupOpen] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState<any>(null);
    const [deleteID, setDeleteID] = useState<any>(null);
    const [deletePopupOpen, setdeletePopupOpen] = useState(false);

    const dispatch = useDispatch()
    const handleEditClick = (rowData: any) => {
        setEditPopupOpen(true);
        setSelectedRowData(rowData);
    };

    const handlePopupClose = () => {
        setEditPopupOpen(false);
        setdeletePopupOpen(false)
    };


    const handleDeleteClick = (id: any) => {
        setDeleteID(id)
        setdeletePopupOpen(true)
        console.log('Delete clicked for:', id);
    };
    const deleteManager = () => {
        const id = deleteID
        dispatch(deleteManagerAsync(id)).then(() => {
            dispatch(getManagerAsync())
            handlePopupClose()
        })
    }

    // const handleEditFormSubmit = (data: any) => {
    //     console.log('Edited Data:', data);
    //     handlePopupClose();
    // };
    return (
        <div>
            <table className='w-full mt-[30px]'>
                <tbody>
                    <tr className='border-b-4'>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">SR NO</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Name</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Phone No.</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Employee Code</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Email</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Role</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap"></td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap"></td>
                    </tr>
                    {managerData && managerData.map((element: any, index: any) => (
                        <tr key={index} className='border-b-4'>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{index + 1}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element?.user?.name}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element?.user?.phoneNumber}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element?.employeeCode}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element?.user?.email}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element?.user?.role}</td>
                            <td className='px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap'>
                                <img
                                    src={edit}
                                    alt=""
                                    className='w-[20px] cursor-pointer h-[20px]'
                                    onClick={() => handleEditClick(element)}
                                />
                            </td>
                            <td className='px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap'>
                                <img
                                    src={deletes}
                                    alt=""
                                    className='w-[20px] cursor-pointer h-[20px]'
                                    onClick={() => handleDeleteClick(element._id)}
                                />
                            </td>

                            {isEditPopupOpen && (
                                <div className="fixed inset-0 flex items-center p-[50px] z-50 justify-center bg-black bg-opacity-50">
                                    <div className="modal-bg absolute inset-0 bg-gray-800 opacity-[-8]"></div>
                                    <div className="relative w-[656px] bg-white p-[40px] rounded-lg shadow-lg">
                                        <EditPopupManager selectedRowData={selectedRowData} handleEditPopupClose={handlePopupClose}
                                        />
                                    </div>
                                </div>
                            )}

                            {deletePopupOpen && (
                                <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
                                    <div className="modal-bg absolute inset-0 bg-gray-800 opacity-[-8]"></div>
                                    <div className="relative bg-white p-6 rounded-lg shadow-lg">
                                        <div className='flex flex-col gap-[16px]'>
                                            <h1 className='px-[12px] py-[8px] text-[20px]  bold'>Do you want to delete this file</h1>
                                            <div className='flex items-center justify-center gap-[20px]'>
                                                <div className='border flex gap-[5px] bold rounded-[8px] px-[12px] py-[8px] cursor-pointer text-[14px]' onClick={handlePopupClose}>
                                                    {/* <img src={x} alt="" /> */}
                                                    Cancel
                                                </div>
                                                <div
                                                    onClick={deleteManager}
                                                    className='border flex gap-[5px] items-center rounded-[8px] px-[12px] py-[8px] cursor-pointer bg-[#f6e2e2]'>
                                                    {/* <img src={deletes} alt="" className='w-[16px] h-[16px]' /> */}
                                                    <span className='text-[#F23A3A] bold text-[14px]'>Yes, Delete!</span>
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
    )
}
