import { useState } from 'react'
import edit from "../../../../assets_/icons/edit.svg"
import deletes from "../../../../assets_/icons/Delete.svg"
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'

export const VoucherEntry = ({ vouchersData }: any) => {
    const [isSwitchOn, setSwitchOn] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const navigate=useNavigate()
    

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

    
    const commonTableCell = `px-4  border text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap capitalize`
    const commonTableRow = `px-4 border text-xs font-medium text-[12px] h-[56px] whitespace-nowrap`


    return (
        <div className='pt-[32px] flex flex-col gap-[30px]'>
            <div className='flex justify-between gap-[15px] w-[100%] items-center'>
                <div className='text-[#00916A] text-[24px] font-medium '  >
                    All Voucher
                </div>
                <div className='flex gap-[20px]'>

                    <select
                        className='outline-none bg-[#091E420A] rounded-[8px]'
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                        <option value="">Choose Transfer Type</option>
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
                    Vouchers Lists
                </div>
                <div className='bg-[#62C6D7] mt-[10px] w-[900px] h-[1px] '>

                </div>

            </div>

            <table className='w-full'>
                <tbody>
                    <tr className='border-b-4'>
                        <td className={`${commonTableCell}`}>Sr No</td>
                        <td className={`${commonTableCell}`}>Voucher Name</td>
                        <td className={`${commonTableCell}`}>Method</td>
                        <td className={`${commonTableCell}`}>Voucher Type</td>
                        <td className={`${commonTableCell}`}>Group Voucher Name</td>
                        <td className={`${commonTableCell}`}>Created Date</td>
                        <td className={`${commonTableCell}`}>Created By</td>
                    </tr>
                    {filteredData && filteredData.map((element: any, index: any) => (
                        <tr key={index} className='border-b-4'>
                            <td className={`${commonTableRow}`}>{index + 1}</td>
                            <td className={`${commonTableRow}`}>{element.voucherName}</td>
                            <td className={`${commonTableRow}`}>{element.voucherMethod}</td>
                            <td onClick={()=>navigate(`/${element.typeOfVoucher==="salesOrder"?"sales":"purchaseorder"}/${element.voucherCode}`)} className={`${commonTableRow} text-[#21A0C3]  underline cursor-pointer`}>{element.typeOfVoucher}</td>
                            <td className={`${commonTableRow}`}>{element.voucherCode}</td>
                            <td className={`${commonTableRow}`}>{element.createdAt.slice(0, 10)}</td>
                            <td className={`${commonTableRow}`}>{element.createdBy?.name}</td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
