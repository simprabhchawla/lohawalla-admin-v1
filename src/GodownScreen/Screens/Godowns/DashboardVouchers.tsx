import Navbar from '@src/Components/Navbar'
import { useEffect, useState } from 'react'
import { VoucherEntry } from './Components/VoucherEntry';
import { useDispatch, useSelector } from "react-redux"
import { getVouchersAsync } from '@src/Redux/Slice/Admin/customerSlice';

export const DashboardGodowns = () => {
    
    const dispatch = useDispatch();
    const vouchersData = useSelector((state: any) => state.voucher?.data?.vouchers);
    console.log("dd", vouchersData)

    useEffect(() => {
        dispatch(getVouchersAsync());
    }, [dispatch]);

    return (
        <>
            <div className='flex'>
                <div className='flex grow content flex-col'>
                    <div >
                        <div className="p-[16px]"><VoucherEntry vouchersData={vouchersData}/></div>
                    </div>
                </div>
            </div>
        </>)
} 