import Navbar from '@src/Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import { useEffect, useState } from 'react'
import { VoucherEntry } from './Components/VoucherEntry';
import { Graph } from './Components/Graph';
import PopupComponent from './Components/Popup';
import { useDispatch, useSelector } from "react-redux"
import { getVouchersAsync } from '@src/Redux/Slice/customerSlice';

export const DashboardVouchers = () => {
    const [activeTab, setActiveTab] = useState('Voucher');
    const toggleTab = (tab: any) => {
        setActiveTab(tab);
    };


    const dispatch = useDispatch();
    const vouchersData = useSelector((state: any) => state.voucher?.data?.vouchers);
    console.log("dd", vouchersData)

    const group = {
        "userId" :"647b2d6dfc9a5ec789cdee9c"
    } 
        

    // view
    useEffect(() => {
        dispatch(getVouchersAsync(group));
    }, [dispatch]);


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
                                {/* <button
                                    className={`p-2 ${activeTab === 'Graph'
                                        ? 'text-[#00916A] underline font-medium'
                                        : 'text-black underline'
                                        }`}
                                    onClick={() => toggleTab('Graph')}
                                >
                                    Graph & Analyses
                                </button> */}

                            </div>

                        </div>
                        <div className='pt-[32px]'>
                           
                            <PopupComponent/>
                        </div>
                    </div>
                    <div >
                        {activeTab === 'Voucher' && (
                            <div className="p-[16px]"><VoucherEntry vouchersData={vouchersData}/></div>
                        )}

                        {/* {activeTab === 'Graph' && (
                            <div className="p-[16px]"><Graph /></div>
                        )} */}


                    </div>
                </div>
            </div>
        </>)
}
