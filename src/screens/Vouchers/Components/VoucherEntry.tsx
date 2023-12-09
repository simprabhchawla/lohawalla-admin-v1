import { useState } from 'react'
import edit from "../../../assets_/icons/edit.svg"
import deletes from "../../../assets_/icons/Delete.svg"
import { Editpopup } from '../Components/Editpopup';
import { useDispatch } from 'react-redux';
import { deleteCustomerApi } from '@src/Redux/Api/Admin/customerApi';
import { deleteCustomerAsync, getVouchersAsync } from '@src/Redux/Slice/Admin/customerSlice';

export const VoucherEntry = ({ vouchersData }: any) => {
    const [isSwitchOn, setSwitchOn] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const toggleSwitch = () => {
        setSwitchOn(!isSwitchOn);
    };
    const [selectedFilter, setSelectedFilter] = useState('');


    const filteredData = vouchersData?.filter((element: any) => {
        const searchLowerCase = searchInput.toLowerCase();
        const matchesSearch = element.voucherName.toLowerCase().includes(searchLowerCase) ||
            element.voucherCode.toLowerCase().includes(searchLowerCase);
        const matchesFilter = selectedFilter ? element.typeOfVoucher === selectedFilter : true;
        return matchesSearch && matchesFilter;
    });


    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState(null);
    const [selectedRowId, setSelectedRowId] = useState<any>(null);
    const [selectedVoucherData, setSelectedVoucherData] = useState(null);


    const openPopup = (action: any, voucherData: any) => {
        setPopupOpen(true);
        setSelectedAction(action);
        setSelectedVoucherData(voucherData);
    };

    const closePopup = () => {
        setPopupOpen(false);
        setSelectedAction(null);
    };

    const handleEditClick = (id: any, element: any) => {
        console.log(id);
        setSelectedRowId(id);
        openPopup('edit', element);
    };

    const handleDeleteClick = (id: any, element: any) => {
        console.log(id);
        setSelectedRowId(id);
        openPopup('delete', element);
    };

    const dispatch = useDispatch();

    const deleteVouchers = () => {
        if (selectedRowId) {
            dispatch(deleteCustomerAsync(selectedRowId)).then(() => {
                dispatch(getVouchersAsync());
                closePopup();
            });
        }
    };
    const tableHeading = `px-4 text-[#6B778C] border text-xs font-bold h-[56px] whitespace-nowrap capitalize`;
    const tableData = `px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap capitalize border`;

    return (
        <div className='pt-[32px] flex flex-col gap-[30px]'>
            <div className='flex justify-between gap-[15px] w-[100%] items-center'>
                <div className='text-[#00916A] text-[24px] font-medium '  >
                    Voucher Entry & Grouping
                </div>
                <div className='flex gap-[20px]'>

                    <select
                        className='outline-none bg-[#091E420A] rounded-[8px]'
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                        <option value="">Choose Voucher Type</option>
                        <option value="purchase">Purchase</option>
                        <option value="purchaseOrder">Purchase Order</option>
                        <option value="sales">Sales</option>
                        <option value="salesOrder">Sales Order</option>
                        <option value="transfer">Transfer</option>
                    </select>

                    <div className="flex  gap-[10px] items-center">
                        <p className="text-base  font-normal tracking-[0.25px] text-[#1C1C1C]">Manual</p>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isSwitchOn}
                                onChange={toggleSwitch}
                                className="hidden"
                            />
                            <div
                                className={`slider cursor-pointer w-14 h-[20px] rounded-full relative ${isSwitchOn ? 'bg-gray-300' : 'bg-green-500'
                                    }`}
                            >
                                <div
                                    className={`slider-knob w-7 h-[20px] bg-white rounded-full shadow-md transform ${isSwitchOn ? 'translate-x-7' : ''
                                        } transition-transform duration-300 ease-in-out`}
                                ></div>
                            </div>
                        </label>
                        <p className="text-base le  font-normal tracking-[0.25px] text-[#1C1C1C]">Automatic</p>
                    </div>

                    <div>
                        <input
                            type="search"
                            placeholder="search..."
                            className="border border-[#DFE1E6] bg-[#FAFBFC] outline-none focus:outline-none"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-[5px]'>
                <div className='text-[#62C6D7] text-[24px] font-medium '>
                    Vouchers Lists {filteredData ? `(${filteredData.length})` : ''}
                </div>
                <div className='bg-[#62C6D7] w-[381px] h-[1px] '>

                </div>

            </div>

            <table className='w-full'>
                <tbody>
                    <tr className=''>
                        <td className={`${tableHeading} w-[20px]`}>sr No</td>
                        <td className={`${tableHeading}`}>Voucher Name</td>
                        <td className={`${tableHeading}`}>Voucher Method</td>
                        <td className={`${tableHeading}`}>Voucher Type</td>
                        <td className={`${tableHeading}`}>Voucher Code</td>
                        <td className={`${tableHeading}`}>Date</td>
                        <td className={`${tableHeading} border-0 border-t border-b`}></td>
                        <td className={`${tableHeading} border-0 border-t border-b border-e`}></td>
                    </tr>
                    {filteredData && filteredData.map((element: any, index: any) => (
                        <tr key={index} className=''>
                            <td className={`${tableData}`}>{index + 1}</td>
                            <td className={`${tableData}`}>{element.voucherName}</td>
                            <td className={`${tableData}`}>{element.voucherMethod}</td>
                            <td className={`${tableData} text-[#21A0C3]`}>{element.typeOfVoucher}</td>
                            <td className={`${tableData}`}>{element.voucherCode}</td>
                            <td className={`${tableData}`}>{element.updatedAt.slice(0, 10)}</td>
                            <td className={`${tableData} border-0 border-b w-[50px]`}>
                                <img
                                    src={edit}
                                    alt=""
                                    className='w-[25px] cursor-pointer h-[25px]'
                                    onClick={() => handleEditClick(element._id, element)}
                                />
                            </td>
                            <td className={`${tableData} border-0 border-t border-b  w-[50px] border-e`}>
                                <img
                                    src={deletes}
                                    alt=""
                                    className='w-[20px] cursor-pointer h-[20px]'
                                    onClick={() => handleDeleteClick(element._id, element)}
                                />
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
            {isPopupOpen && (
                <div>
                    {selectedAction === 'edit' ? (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="modal-bg absolute inset-0"></div>
                            <div className='w-[768px] relative bg-white p-6 rounded-lg shadow-lg'>
                                <Editpopup closePopup={closePopup} voucherData={selectedVoucherData} />
                            </div>
                        </div>
                    ) : (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="modal-bg absolute inset-0"></div>
                            <div className="relative bg-white p-6 rounded-lg shadow-lg">
                                <div className='flex flex-col gap-[16px]'>
                                    <h1 className='px-[12px] py-[8px] text-[20px]  bold'>Do you want to delete this file</h1>
                                    <div className='flex items-center justify-center gap-[20px]'>
                                        <div className='border flex gap-[5px] bold rounded-[8px] px-[12px] py-[8px] cursor-pointer text-[14px]' onClick={closePopup}>
                                            Cancel
                                        </div>
                                        <div
                                            onClick={deleteVouchers}
                                            className='border flex gap-[5px] items-center rounded-[8px] px-[12px] py-[8px] cursor-pointer bg-[#f6e2e2]'>
                                            <img src={deletes} alt="" className='w-[16px] h-[16px]' />
                                            <span className='text-[#F23A3A] bold text-[14px]'>Yes, Delete!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            )}

        </div>
    )
}
