import Navbar from '@src/Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import { Table } from './Components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
// import { addManagerDataAsync, getManagerAsync } from '@src/Redux/Slice/ManagerSlice'
import AddManagerForm from './Components/AddGodownForm'
import AddGodownForm from './Components/AddGodownForm'
 

export const GodownDashboard = () => {

    // const dispatch = useDispatch();
    // const managerData = useSelector((state: any) => state.manager?.data?.data);
    // console.log("dd", managerData)

    // view
    // useEffect(() => {
    //     dispatch(getManagerAsync());
    // }, [dispatch]);


    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleFormSubmit = (formData: any) => {
        console.log('Form Data:', formData);

        // dispatch(addManagerDataAsync(formData)).then(() => {
        //     dispatch(getManagerAsync());
        // });
        
    };

    return (
        <>
            <div className='flex   bg-theme-white'>
                <div>
                    <Sidebar />
                </div>
                <div className='flex grow content flex-col'>

                    <div>
                        <Navbar Pagename='GodownDashboaed' />
                    </div>
                    <div className='flex flex-col px-[20px]'>

                        <div className='px-[20px]'>
                            <div className='flex  pt-[32px] justify-between '>
                                <div className='p-[10px] text-[24px] text-[#005D7F] font-bold'>
                                    Godown List
                                </div>
                                <div className='flex gap-[10px]'>

                                    <div
                                        className='border-2 flex px-[20px] cursor-pointer text-white py-[16px] bg-[#005D7F] font-bold gap-[5px] rounded-[5px]'
                                        onClick={openPopup}
                                    >
                                        Add Godown
                                    </div>

                                    {isPopupOpen && (
                                        <div className="fixed inset-0 flex items-center justify-center z-50">
                                            <div className="modal-bg absolute inset-0 bg-gray-800 opacity-50"></div>
                                            <div className="modal w-[700px] relative bg-white p-6 rounded-lg shadow-lg">
                                                <AddGodownForm onClose={closePopup} onSubmit={handleFormSubmit} />
                                            </div>
                                        </div>
                                    )}

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center ps-[20px] pt-[20px] gap-[5px]'>
                            <div className='text-[#62C6D7] text-[24px] font-medium '>
                                List of Godown (80)
                            </div>
                            <div className='bg-[#62C6D7] w-[900px] h-[1px] '>

                            </div>

                        </div>
                        <Table />
                    </div>


                </div>
            </div>
        </>)
}
