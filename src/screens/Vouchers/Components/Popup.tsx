import { addVouchers, getVouchersAsync } from '@src/Redux/Slice/Admin/customerSlice';
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import check from "../../../assets_/icons/save.svg"
import { getGroupsAsync } from '@src/Redux/Slice/Admin/getGroupSlice';
import Multiselect from 'multiselect-react-dropdown';
import { fetchGodownData } from '@src/Redux/Slice/Admin/godownSlice';

const PopupComponent = ({ groupsData, isPopupOpen, setIsPopupOpen, closePopup }: any) => {

    const [formData, setFormData] = useState<any>()
    console.log(formData)

    const { handleSubmit, register, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data: any) => {
        console.log("Data", data);

        const updatedData = {
            ...data,
            typeOfVoucher: selectedVoucherType,
            godownPermissionLevel: permissionLevel,
            godownTo: [data.godownTo],
            group: [data.group],
        };
        console.log(updatedData);

        setFormData(updatedData);

        dispatch(addVouchers(updatedData)).then(() => {
            dispatch(getVouchersAsync());
            dispatch(getGroupsAsync());
        });

        closePopup()

    };


    const [selectedVoucherType, setSelectedVoucherType] = useState("");

    const handleVoucherTypeChange = (event: any) => {
        setSelectedVoucherType(event.target.value);
    };

    const [permissionLevel, setPermissonLevel] = useState("");

    const handelPermissionLevel = (event: any) => {
        setPermissonLevel(event.target.value);
    };


    const Godowndata = useSelector((state: any) => state.godown.data);
    console.log(Godowndata)
    useEffect(() => {
        dispatch(fetchGodownData());
    }, [dispatch]);

    return (

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[20px]'>


            <div className="flex gap-[5px] items-center border-b-2 py-lg">
                {/* <img src={back} alt="" className='h-[20px] w-[20px]' /> */}
                <p className='text-[18px]'>Create New Voucher</p>
            </div>

            <div className='flex flex-col gap-[10px]'>
                <span>Choose Types Of Vouchers</span>

                <select
                    // {...register('typeOfVoucher', { required: 'typeOfVoucher is required' })}
                    className='outline-none border rounded-[8px]'
                    value={selectedVoucherType}
                    onChange={(event: any) => {
                        handleVoucherTypeChange(event);
                    }}
                >
                    <option value="purchase">Purchase</option>
                    <option value="purchaseOrder">PurchaseOrder</option>
                    <option value="sales">Sales</option>
                    <option value="salesOrder">SalesOrder</option>
                    <option value="transfer" >Transfer</option>
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
                <input placeholder='Voucher Name' className='outline-none border rounded-[8px]' {...register('voucherName', { required: 'voucherName is required' })} type="text" />


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

            <div className='flex flex-col gap-[10px]'>
                <span>Group</span>
                <select className='outline-none border rounded-[8px]'
                    {...register('group', { required: 'group is required' })}

                >
                    {groupsData && groupsData.map((element: any, index: any) => (
                        <option key={element.id} value={element.id}>
                            {element.name}
                        </option>
                    ))}
                </select>
            </div>

            {selectedVoucherType && selectedVoucherType === "transfer" && (
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <span>Godown Transfer Type</span>

                        <select
                            {...register('transferType', { required: 'transferType is required' })}
                        >

                            <option value="Equal">Equal</option>
                            <option value="Ratio">Ratio</option>
                            <option value="UnEqual">UnEqual</option>

                        </select>
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <span> Godown Permission Level</span>
                        <select
                            value={permissionLevel}
                            onChange={(event: any) => {
                                handelPermissionLevel(event);
                            }}

                            className='outline-none border rounded-[8px]'>
                            <option value="Single">Single</option>
                            <option value="Multi">Multiple</option>
                        </select>

                    </div>


                </div>
            )}

            {permissionLevel && permissionLevel === "Multi" && (

                <div className='flex gap-[10px]'>
                    {/* <div className='flex  w-[100%] flex-col gap-[10px]'>
                        <span>Choose Godown From</span>
                        <select
                            {...register('godownFrom', { required: 'godownFrom is required' })}

                            className='outline-none border rounded-[8px]'>
                            <option value="automatic">Automatic</option>
                            <option value="manual">Manual</option>
                        </select>

                    </div> */}
                    <div className='flex  w-[100%] flex-col gap-[10px]'>
                        <span>Choose Godown To</span>
                        <select
                            className='outline-none border rounded-[8px]'
                            {...register('godownTo', { required: 'godownTo is required' })}
                            >
                            {Godowndata && Godowndata.map((element: any, index: any) => (
                                <option key={element?._id} value={element?._id}>
                                    {element?.godownName}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>
            )}



            <div className='flex gap-[10px] justify-end'>

                <button
                    className="text-[#005D7F] border border-[#005D7F] bg-white font-bold py-2 px-4 mt-4 rounded"
                    onClick={closePopup}
                >
                    Close
                </button>
                <button
                    type='submit'
                    className="bg-[#005D7F] flex gap-[5px] items-center text-white font-bold py-2 px-4 mt-4 rounded"
                >
                    <img src={check} alt="" />
                    Create Voucher
                </button>
            </div>



        </form>
    );
};

export default PopupComponent;