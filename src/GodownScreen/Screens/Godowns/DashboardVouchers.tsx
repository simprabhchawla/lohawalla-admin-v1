import Navbar from '@src/Components/Navbar'
import { useEffect, useState } from 'react'
import { VoucherEntry } from './Components/VoucherEntry';
import { useDispatch, useSelector } from "react-redux"



// const vouchersData: [
//     {
//         "groupName": "Group A",
//         "date": "2023-11-22",
//         "voucherType": "Sales",
//         "groupVoucherName": "Sales Voucher",
//         "voucherNumber": "V12345",
//         "viewList": "View",
//         "godown": "Warehouse A",
//         "permissionLevel": "Admin"
//     },
//     {
//         "groupName": "Group B",
//         "date": "2023-11-23",
//         "voucherType": "Purchase",
//         "groupVoucherName": "Purchase Voucher",
//         "voucherNumber": "V67890",
//         "viewList": "View",
//         "godown": "Warehouse B",
//         "permissionLevel": "User"
//     },
//     {
//         "groupName": "Group C",
//         "date": "2023-11-24",
//         "voucherType": "Expense",
//         "groupVoucherName": "Expense Voucher",
//         "voucherNumber": "V54321",
//         "viewList": "View",
//         "godown": "Warehouse C",
//         "permissionLevel": "Manager"
//     }
// ]



export const DashboardGodowns = () => {
    return (
        <>
            <div className='flex'>
                <div className='flex grow content flex-col'>
                    <div >
                        <div className="p-[16px]"><VoucherEntry /></div>
                    </div>
                </div>
            </div>
        </>)
} 