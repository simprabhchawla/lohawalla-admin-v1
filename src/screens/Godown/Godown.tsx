import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addGodown, deleteGodownAsync, fetchGodownData, updateGodown } from '../../Redux/Slice/Admin/godownSlice';
import { useForm } from 'react-hook-form';
import EditPopUp from './components/Editpopup/EditPopUp';
import AddGodown from './components/Addpopup/AddGodown';
import Sidebar from '../../Components/Sidebar'
import Navbar from '@src/Components/Navbar';
import edit from "../../assets_/icons/edit.svg"
import close from "../../assets_/icons/CloseIcon.svg"
import dots from "../../assets_/icons/dots.svg"
import deletes from "../../assets_/icons/Delete.svg"
import x from "../../assets_/icons/x-close.svg"

export const Godown = () => {
    const dispatch = useDispatch();
    const Godowndata = useSelector((state: any) => state.godown.data);

    const [editData, setEditData] = useState<any>()
    useEffect(() => {
        setEditData(Godowndata)
    })

    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        dispatch(addGodown(data));
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editPopupOpen, seteditPopupOpen] = useState(false);
    const [deletePopupOpen, setdeletePopupOpen] = useState(false);
    const [AddPopupOpen, setAddPopupOpen] = useState(false);

    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedRow, setSelectedRow] = useState<any>(null);

    const openeditPopup = (element: any) => {
        seteditPopupOpen(true);
        setMenuOpen([]);
        setIsPopupOpen(false);
    };

    const openAddPopup = () => {
        setAddPopupOpen(true);
        setIsPopupOpen(false);

    };

    const opendeletePopup = () => {
        setdeletePopupOpen(true);
        seteditPopupOpen(false);

    };

    const closedeletePopup = () => {
        setdeletePopupOpen(false);
    };

    const [menuOpen, setMenuOpen] = useState<number[]>([]);

    const toggleMenu = (element: any, index: number) => {
        setSelectedRow(element);
        if (menuOpen.includes(index)) {
            setMenuOpen([]);
        } else {
            setMenuOpen([index]);
        }
    };


    const handleClosePopup = () => {
        setIsPopupOpen(false);
        seteditPopupOpen(false);
        setdeletePopupOpen(false);
        setAddPopupOpen(false);
        setPopupVisible(false)
    };

    const closed = () => {
        return <div onClick={handleClosePopup} className="absolute -right-3 top-[-15px] p-[5px] flex items-center justify-center bg-[#FFFFFF] rounded-full cursor-pointer">
            <img src={close} className="w-[25px] h-[25px]" alt="" />

        </div>
    }

    const openPopup = (element: any) => {
        setSelectedRow(element);
        setPopupVisible(true);
    };


    // view
    useEffect(() => {
        dispatch(fetchGodownData());
    }, [dispatch]);

    // edit
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const editData = {
            id: selectedRow._id,
            godownName: selectedRow.godownName,
            godownCode: selectedRow.godownCode,
            address: selectedRow.address,
            numberOfShelfs: selectedRow.numberOfShelfs
        };
        dispatch(updateGodown(editData)).then(() => {
            dispatch(fetchGodownData());
            handleClosePopup()
        });
    }



    // add
    const handleAddGodownSubmit = (formData: any) => {
        dispatch(addGodown(formData)).then(() => {
            dispatch(fetchGodownData())
            handleClosePopup()
        })

    };
    // delete
    const deleteGodown = (id: any) => {
        dispatch(deleteGodownAsync(id)).then(() => {
            dispatch(fetchGodownData())
            handleClosePopup()
        })
    }

    // search

    const [searchInput, setSearchInput] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const filteredGodownData = Godowndata?.filter((data: any) =>
        Object.values(data).some((value: any) =>
            value.toString().toLowerCase().includes(searchInput.toLowerCase())
        )
    );

    useEffect(() => {
        if (searchInput.trim() !== "") {
            const newSuggestions: string[] = Godowndata
                .map((data: any) => data.godownName)
                .filter((value: any) => value.toLowerCase().includes(searchInput.toLowerCase()));
            setSuggestions(newSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [searchInput, Godowndata]);

    const handleSuggestionClick = (suggestion: string) => {
        setSearchInput(suggestion);
    };
    const [memoizedGodownDataLength, setMemoizedGodownDataLength] = React.useState(0);
    React.useEffect(() => {
        setMemoizedGodownDataLength(filteredGodownData && filteredGodownData.length);
    }, [filteredGodownData]);

    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>

            <div className='py-[30px] px-[50px] w-full flex flex-col gap-[20px]'>
                <div>
                    <Navbar Pagename='Godown' />
                </div>

                <div className='flex justify-between gap-[10px] items-center'>
                    <div>
                        <span className='text-[40px] text-[#005D7F]  bold '>Godown List</span>
                    </div>


                    <div onClick={openAddPopup} className='cursor-pointer flex py-[16px]  px-[20px] bg-[#005D7F] text-white  justify-center text-center items-center rounded-[8px] shadow-lg text-[18px] bold '>
                        + Add Godown
                    </div>

                </div>

                <div className='flex items-center gap-[5px] '>
                    <div className='text-[#62C6D7] text-[24px] font-medium'>
                        List of Godown ({memoizedGodownDataLength})
                    </div>
                    <div className='bg-[#62C6D7] w-[900px] h-[1px] '>

                    </div>

                </div>

                <div >
                    <table className='w-full '>
                        <tbody className='border-2'>
                            <tr className='border'>
                                <td className='px-4 w-[10px] border-e text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap capitalize'>Sr No</td>
                                <td className='px-4 w-[200px] max-w-[500px] border-e text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap capitalize'>Godown name</td>
                                <td className='px-4 w-[200px] text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap capitalize'>Code</td>
                                <td className='px-4 w-[250px] border-s text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap capitalize'>Details</td>
                                <td className='px-4 w-[150px] text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap'></td>
                            </tr>

                            {filteredGodownData && filteredGodownData.map((element: any, index: any) => {
                                return <tr className="{border-b border-solid border-[#0000001A]}" key={index}>
                                    <td className='ps-[24px] border-e h-14 text-sm font-bold text-[#5C5C77]'>{index + 1}</td>
                                    <td className='px-4 border-e h-14 text-sm font-medium text-[#5C5C77]'>
                                        {element.godownName.length > 15 ? `${element.godownName.substring(0, 15)}...` : element.godownName}
                                    </td>

                                    <td className='px-4 h-14 border-e text-sm font-medium  text-[#5C5C77]'>
                                        <span className='bg-[#F5F5F5] rounded-[42px]  px-[16px] py-[6px]'>
                                            {element.godownCode}
                                        </span>

                                    </td>
                                    <td onClick={() => openPopup(element)} className=' px-4 h-14 flex cursor-pointer items-center text-sm font-medium text-[#4B4DED]'
                                    >   
                                        View Detail
                                    </td>
                                    <td onClick={() => {
                                        toggleMenu(element, index)
                                    }
                                    } className='text-sm  cursor-pointer   items-center font-medium text-[#5C5C77]'>
                                        <div className='relative flex gap-1  items-center'>
                                            Edit    
                                            <img src={edit} alt="" className='w-[14px] cursor-pointer h-[14px] ' />
                                            <div className='absolute right-[5rem]'>
                                                {menuOpen.includes(index) && (
                                                    <div className='bg-white border border-gray-300 shadow-md rounded-md w-[95px]'>
                                                        <ul>
                                                            <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer' onClick={openeditPopup}>
                                                                Edit
                                                            </li>
                                                            <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer' onClick={opendeletePopup}>
                                                                Delete
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                    {popupVisible && selectedRow && (
                        <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
                            <div className="modal-bg absolute inset-0 bg-gray-800 opacity-50"></div>
                            <div className="relative bg-white p-6 rounded-lg shadow-lg">
                                <div className='flex w-[624px] justify-between '>
                                    <div className='flex flex-col gap-[24px] w-[319px]'>
                                        <h1 className="text-[25px] bold">
                                            {selectedRow.godownName.length > 35 ? `${selectedRow.godownName.substring(0, 35)}...` : selectedRow.godownName}
                                        </h1>
                                        <div className='flex flex-col gap-[12px]'>
                                            <div className='flex gap-[12px]'>
                                                <div>
                                                    <p className='semibold'>Number Of Selfs - {selectedRow?.numberOfShelfs}</p>
                                                    <p className='semibold'>Updated At - {selectedRow?.updatedAt.slice(0, 10)}</p>
                                                    <p className='semibold'>Address - {selectedRow?.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-[15px] items-start justify-end w-[200px]'>
                                        <span className='text-[14px]'>Godown Code - {selectedRow.godownCode}</span>
                                    </div>
                                </div>
                                {closed()}
                            </div>
                        </div>
                    )}
                    {deletePopupOpen && (
                        <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
                            <div className="modal-bg absolute inset-0 bg-gray-800 opacity-50"></div>
                            <div className="relative bg-white p-6 rounded-lg shadow-lg">
                                <div className='flex flex-col gap-[16px]'>
                                    <h1 className='px-[12px] py-[8px] text-[20px]  bold'>Do you want to delete this file</h1>
                                    <div className='flex items-center justify-center gap-[20px]'>
                                        <div className='border flex gap-[5px] bold rounded-[8px] px-[12px] py-[8px] cursor-pointer text-[14px]' onClick={closedeletePopup}>
                                            <img src={x} alt="" />
                                            Cancel
                                        </div>
                                        <div
                                            onClick={() => deleteGodown(selectedRow._id)}
                                            className='border flex gap-[5px] items-center rounded-[8px] px-[12px] py-[8px] cursor-pointer bg-[#f6e2e2]'>
                                            <img src={deletes} alt="" className='w-[16px] h-[16px]' />
                                            <span className='text-[#F23A3A] bold text-[14px]'>Yes, Delete!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {editPopupOpen && (
                        <EditPopUp
                            editData={editData}
                            handleFormSubmit={handleFormSubmit}
                            toggleMenu={toggleMenu}
                            closed={closed}
                            register={register}
                            onSubmit={onSubmit}
                            setEditData={setEditData}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                        />
                    )}

                    {AddPopupOpen && (
                        <AddGodown
                            handleSubmit={handleSubmit}
                            register={register}
                            onSubmitCallback={handleAddGodownSubmit}
                            closed={closed}
                        />
                    )}

                </div>
            </div>
        </div>
    )
}