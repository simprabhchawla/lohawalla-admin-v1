import Navbar from '@src/Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import { useEffect, useState } from 'react'
import { VoucherEntry } from './Components/VoucherEntry';
import { Graph } from './Components/Graph';
import PopupComponent from './Components/Popup';
import { useDispatch, useSelector } from "react-redux"
import { deleteCustomerAsync, getVouchersAsync } from '@src/Redux/Slice/Admin/customerSlice';
import { getGroupsAsync } from '@src/Redux/Slice/Admin/getGroupSlice';
import add from "../../assets_/icons/add.svg"

export const DashboardVouchers = () => {
    const [activeTab, setActiveTab] = useState('Voucher');
    const toggleTab = (tab: any) => {
        setActiveTab(tab);
    };


    const dispatch = useDispatch();
    const vouchersData = useSelector((state: any) => state.voucher?.data?.vouchers);
    console.log("dd", vouchersData)

    // const group = {
    //     "userId": "64896cb3ced762755e663d38"
    // }


    // view
    useEffect(() => {
        dispatch(getVouchersAsync());
    }, [dispatch]);

    const groupsData = useSelector((state: any) => state?.groups?.data);
    console.log("hello", groupsData)

    useEffect(() => {
        dispatch(getGroupsAsync());
    }, [dispatch]);


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };


    return (
        <>
            <div className='flex  bg-theme-white'>
                <div>
                    <Sidebar />

                </div>
                <div className='flex grow content flex-col'>

                    <div>
                        <Navbar Pagename='DashBoard' />
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex w-[600px] gap-[16px] pt-[32px] flex-col '>
                            <div className="flex px-[24px] py-[8px] items-start justify-start">
                                <button
                                    className={`p-2 ${activeTab === 'Voucher'
                                        ? 'text-[#00916A] underline font-medium'
                                        : 'text-black underline'
                                        }`}
                                    onClick={() => toggleTab('Voucher')}
                                >
                                    Voucher Entry & Grouping
                                </button>


                            </div>

                        </div>
                        <div className='pt-[32px]'>
                            <button onClick={openPopup} className='flex px-[20px] text-white py-[10px] justify-center items-center rounded-[8px] border bg-[#005D7F]'>
                                <img src={add} alt="" />
                                Create Vouchers
                            </button>
                            {isPopupOpen && (
                                <div className="fixed inset-0 flex items-center justify-center z-50">
                                    <div className="modal-bg absolute inset-0 bg-gray-800 opacity-50"></div>
                                    <div className="modal w-[700px] h-[650px] overflow-x-auto relative bg-white p-6 rounded-lg shadow-lg">
                                        <PopupComponent groupsData={groupsData} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} openPopup={openPopup}
                                            closePopup={closePopup} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div >
                        {activeTab === 'Voucher' && (
                            <div className="p-[16px]"><VoucherEntry vouchersData={vouchersData} /></div>
                        )}

                    </div>
                </div>
            </div>
        </>)
} 