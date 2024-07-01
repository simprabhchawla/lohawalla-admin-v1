import { addVouchers, getVouchersAsync } from '@src/Redux/Slice/Admin/customerSlice';
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import check from "../../../assets_/icons/save.svg"
import { getGroupsAsync } from '@src/Redux/Slice/Admin/getGroupSlice';
import Multiselect from 'multiselect-react-dropdown';
import { fetchGodownData } from '@src/Redux/Slice/Admin/godownSlice';
import toast from 'react-hot-toast';
import { update } from 'lodash';

const PopupComponent = ({ groupsData, isPopupOpen, setIsPopupOpen, closePopup }: any) => {

    const [formData, setFormData] = useState<any>()

    const { handleSubmit, register, setValue, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data: any) => {
        

        const updatedData = {
            ...data,
            voucherCode: data.voucherCode.toLowerCase(),
            typeOfVoucher: selectedVoucherType,
            godownPermissionLevel: permissionLevel,
            godownTo: data.godownTo,
            group: data.group,
        };

        setFormData(updatedData);

        dispatch(addVouchers(updatedData)).then((res: any) => {
            if (res.payload.status) {
                toast.success(res.payload.message)
                dispatch(getVouchersAsync());
                dispatch(getGroupsAsync());
                closePopup()
            }
            else {
                toast.error(res.payload.message)

            }
        });


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
    useEffect(() => {
        dispatch(fetchGodownData());
    }, [dispatch]);


    const handleGroupSelect = (selectedList: any, selectedItem: any) => {
        setValue('group', selectedList.map((item: any) => item.id));
    };

    const [selectedGodownData, setSelectedGodownData] = useState<any[]>([]);


    const handleGodownSelect = (selectedList: any) => {
        setValue('godownTo', selectedList.map((item: any) => item._id));
        setSelectedGodownData(selectedList);
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[20px]'>


            <div className="flex gap-[5px] items-center border-b-2 py-lg">
                {/* <img src={back} alt="" className='h-[20px] w-[20px]' /> */}
                <p className='text-[18px]'>Create New Voucher</p>
            </div>

            <div className='flex flex-col gap-[10px]'>
                <span>Choose Types Of Vouchers</span>

                <select
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

                <Multiselect
                    options={groupsData}
                    selectedValues={formData?.group}
                    onSelect={handleGroupSelect}
                    onRemove={(selectedList, removedItem) => {
                    }}
                    displayValue="name"
                />
            </div>

            {selectedVoucherType && selectedVoucherType === "transfer" && (
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <span>Godown Transfer Type</span>

                        <select
                            {...register('transferType', { required: 'transferType is required' })}
                        >

                            <option value="">Select Transfer Type</option>
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
                            <option value="">Select Permission Level</option>
                            <option value="Single">Single</option>
                            <option value="Multi">Multiple</option>
                        </select>

                    </div>


                </div>
            )}
            {permissionLevel && permissionLevel === "Single" && (
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[10px]'>
                    <span>Choose Godown To</span>

                        <select
                            onChange={(event)=>{
                                setValue('godownTo', [event.target.value]);
                            }}
                            
                        >

                            <option value="">Select Godown</option>
                            {Godowndata && Godowndata.map((element:any)=>{
                                return(
                                    <option value={element._id}>{element.godownName}</option>
                                )
                            })}
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


                        <Multiselect
                            options={Godowndata}
                            selectedValues={selectedGodownData}
                            onSelect={handleGodownSelect}
                            onRemove={handleGodownSelect}
                            displayValue="godownName"
                        />
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
