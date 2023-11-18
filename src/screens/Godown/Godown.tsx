import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addGodown, deleteGodownAsync, fetchGodownData, updateGodown } from '../../Redux/Slice/godownSlice';
import Search from './components/search/search';
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
    // console.log("hiii", Godowndata)

    const [editData, setEditData] = useState<any>()
    useEffect(() => {
        setEditData(Godowndata)
    })

    // console.log("ecbieucbie", editData)

    // submit

    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        // console.log('Form submitted with data:', data);
        dispatch(addGodown(data));
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editPopupOpen, seteditPopupOpen] = useState(false);
    const [deletePopupOpen, setdeletePopupOpen] = useState(false);
    const [AddPopupOpen, setAddPopupOpen] = useState(false);

    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedRow, setSelectedRow] = useState<any>(null);

    const openeditPopup = () => {
        seteditPopupOpen(true);
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

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                        List of Godown (05)
                    </div>
                    <div className='bg-[#62C6D7] w-[900px] h-[1px] '>

                    </div>

                </div>

                <div >
                    <table className='w-full '>
                        <tbody className='border-2'>
                            <tr className='border-b-4'>
                                <td className='px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap'>SR NO</td>
                                <td className='px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap'>Godown name</td>
                                <td className='px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap'>Selfs</td>
                                <td className='px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap'>Details</td>
                                <td className='px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap'>Code</td>
                                <td className='px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap'></td>
                            </tr>

                            {filteredGodownData && filteredGodownData.map((element: any, index: any) => {
                                return <tr className={`border-b border-solid border-[#0000001A]`} key={index}>
                                    <td className='ps-[34px] h-14 text-sm font-medium text-[#5C5C77]'>{index + 1}</td>
                                    <td className='px-4 h-14 text-sm font-medium text-[#5C5C77]'>{element.godownName}</td>
                                    <td className='px-4 h-14 text-sm font-medium text-[#5C5C77]'>{element.numberOfShelfs}</td>
                                    <td className='px-4 h-14 flex cursor-pointer items-center gap-[5px] text-sm font-medium text-[#4B4DED]'
                                       >
                                        View Detail
                                    </td>
                                    <td className='px-4 h-14 text-sm font-medium  text-[#5C5C77]'>
                                        <span className='bg-[#F5F5F5] rounded-[42px] px-[16px] py-[6px] w-[80px]'>
                                            {element.godownCode}
                                        </span>
                                    </td>
                                    <td onClick={() => openPopup(element)} className='text-sm  cursor-pointer flex gap-[5px] items-center font-medium text-[#5C5C77]'>
                                        Edit
                                        <img src={edit} alt="" className='w-[14px] cursor-pointer h-[14px]'  />
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
                                        <h1 className="text-[32px] bold">{selectedRow?.godownName}</h1>
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
                                        <img
                                            src={dots}
                                            alt=""
                                            className='w-[32px] h-[32px] cursor-pointer'
                                            onClick={toggleMenu}
                                        />
                                    </div>

                                    {menuOpen && (
                                        <div className='absolute top-[50px] right-[10px] mt-2 bg-white border border-gray-300 shadow-md rounded-md w-[95px]'>
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
