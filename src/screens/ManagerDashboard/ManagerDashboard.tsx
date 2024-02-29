import Navbar from '@src/Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import { Table } from './Components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addManagerDataAsync, getManagerAsync } from '@src/Redux/Slice/Admin/ManagerSlice'
import AddManagerForm from './Components/AddManagerForm'
import add from "../../assets_/icons/add.svg"
import { fetchGodownData } from '@src/Redux/Slice/Admin/godownSlice'
import toast from 'react-hot-toast'

export const ManagerDashboard = () => {

    const dispatch = useDispatch();
    const managerData = useSelector((state: any) => state.manager?.data?.data);
    

    // view
    useEffect(() => {
        dispatch(getManagerAsync());
    }, [dispatch]);


    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleFormSubmit = (formData: any) => {
        

        dispatch(addManagerDataAsync(formData)).then((res: any) => {
            if (res.payload.status) {
                
                toast.success(res.payload.message)
                dispatch(getManagerAsync());
                setPopupOpen(false)
            }
            else {
                toast.error(res.payload.message)
            }
        });
    };

    const Godowndata = useSelector((state: any) => state.godown.data);
    useEffect(() => {
        dispatch(fetchGodownData());
    }, [dispatch]);

    return (
        <>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='flex grow content flex-col'>

                    <div>
                        <Navbar Pagename='ManagerDashboard' />
                    </div>
                    <div className='flex flex-col px-[20px] gap-[20px] h-[80vh] overflow-auto'>
                        <div className='px-[20px]'>
                            <div className='flex  pt-[32px] justify-between '>
                                <div className='p-[10px] text-[24px] text-[#005D7F] font-bold'>
                                    Manager List
                                </div>
                                <div className='flex gap-[10px]'>

                                    <div
                                        className='border-2 flex px-[20px] cursor-pointer text-white py-[16px] bg-[#005D7F] font-bold gap-[5px] rounded-[5px]'
                                        onClick={openPopup}
                                    >
                                        <img src={add} alt="" />
                                        Add Manager
                                    </div>

                                    {isPopupOpen && (
                                        <div className="fixed inset-0 flex items-center justify-center z-50">
                                            <div className="modal-bg absolute inset-0 "></div>
                                            <div className="modal w-[700px] relative bg-white p-6 rounded-lg shadow-lg">
                                                <AddManagerForm onClose={closePopup} onSubmit={handleFormSubmit} Godowndata={Godowndata} />
                                            </div>
                                        </div>
                                    )}

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center ps-[20px] pt-[20px] gap-[5px]'>
                            <div className='text-[#62C6D7] text-[24px] font-medium '>
                                List of Managers ({managerData?.length})
                            </div>
                            <div className='bg-[#62C6D7] w-[900px] h-[1px] '>

                            </div>

                        </div>
                        <div className='overflow-auto h-[550px]'>
                            <Table managerData={managerData} />
                        </div>
                    </div> 


                </div>
            </div>
        </>)
}
