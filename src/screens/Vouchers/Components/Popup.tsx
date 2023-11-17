import { addVouchers, getVouchersAsync } from '@src/Redux/Slice/customerSlice';
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

const PopupComponent = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };


    const [selectedValue, setSelectedValue] = useState<any>('');
    const [showPopup, setShowPopup] = useState(false);

    const [formData, setFormData] = useState<any>()





    const { handleSubmit, register, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data: any) => {
        console.log("Data", data);

        if (data.selectedValue === 'Transfer') {
        } else {
            closePopup();
        }

        const updatedData = {
            ...data,
            selectedValue: data.typeOfVoucher,
            group: [
                "654df2fffb600592ae840d23",
                "647b2d6dfc9a5ec789cdee9c"
            ],
            godown: "654df261c418797151682e6f"
        };

        const group = {
            "userId" :"647b2d6dfc9a5ec789cdee9c"
        } 
            
        dispatch(addVouchers(updatedData)).then(() => {
            dispatch(getVouchersAsync(group));
        });

        setFormData(updatedData);
    };




    return (
        <div>
            <button onClick={openPopup} className='flex px-[20px] text-white py-[10px] justify-center items-center rounded-[8px] border bg-[#005D7F]'>
                Create Vouchers
            </button>
            {isPopupOpen && (
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bsolute inset-0 bg-gray-800 opacity-50"></div>
                        <div className='flex flex-col gap-[20px] w-[768px]   relative bg-white p-6 rounded-lg shadow-lg'>
                            <div className="flex gap-[5px] items-center border-b-2 py-lg">
                                {/* <img src={back} alt="" className='h-[20px] w-[20px]' /> */}
                                <p className='text-[18px]'>Create New Voucher</p>
                            </div>

                            <div className='flex flex-col gap-[10px]'>
                                <span>Choose Types Of Vouchers</span>
                                <select {...register('typeOfVoucher', { required: 'typeOfVoucher is required' })}

                                    value={selectedValue} className='outline-none border rounded-[8px]'>
                                    <option value="purchase">Purchase</option>
                                    <option value="purchaseOrder">PurchaseOrder</option>
                                    <option value="sales">Sales</option>
                                    <option value="salesOrder">SalesOrder</option>
                                    <option value="transfer">Transfer</option>
                                </select>

                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <span>Voucher Code</span>
                                <input
                                    {...register('voucherCode', { required: 'voucherCode is required' })}
                                    type="text" placeholder='voucherCode' className='outline-none border rounded-[8px]' />

                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <span>Voucher Name</span>
                                <select
                                    {...register('voucherName', { required: 'voucherName is required' })}
                                    className='outline-none border rounded-[8px]'>
                                    <option value="sales">Sales</option>
                                    <option value="purchaser">Purhase</option>
                                </select>

                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <span>Voucher Method</span>
                                <select
                                    {...register('voucherMethod', { required: 'voucherMethod is required' })}

                                    className='outline-none border rounded-[8px]'>
                                    <option value="automatic">Automatic</option>
                                    <option value="manual">Manual</option>
                                </select>

                            </div>
                            {/* <div className='flex flex-col gap-[10px]'>
                                <span>Group</span>
                                <select
                                    className='outline-none border rounded-[8px]'>
                                    <option value="Group1">Group1</option>
                                    <option value="Group2">Group2</option>
                                </select>

                            </div> */}

                            <div className='flex gap-[10px] justify-end'>

                                <button
                                    className="text-[#005D7F] border border-[#005D7F] bg-white font-bold py-2 px-4 mt-4 rounded"
                                    onClick={closePopup}
                                >
                                    Close
                                </button>
                                <button
                                    type='submit'
                                    className="bg-[#005D7F] text-white font-bold py-2 px-4 mt-4 rounded"
                                >
                                    Create Voucher
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
            {/* {showPopup && (
                <div className="popup">
                    <p>Transfer is selected! This is the popup content.</p>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
            )} */}
        </div>
    );
};

export default PopupComponent;
