import React from 'react';
import { useForm } from 'react-hook-form';
import check from "../../../../assets_/icons/save.svg"
import search from "../../../../assets/icons/Search.svg"


const AddGodown = ({ closed, onSubmitCallback }: any) => {
    const { handleSubmit, register, formState: { errors }, getValues, reset } = useForm();

    const onSubmit = (data: any) => {
        // console.log("Form data submitted:", data);
        onSubmitCallback(data); 
        reset(); 
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fixed inset-0 flex items-center p-[50px] z-50 justify-center bg-black bg-opacity-50">
                <div className="modal-bg absolute inset-0 bg-gray-800 opacity-50"></div>
                <div className="relative w-[656px] bg-white p-[40px] rounded-lg shadow-lg">
                    <div className="scrollable-content max-h-[550px] overflow-y-scroll">
                        <div className='flex flex-col gap-[44px]'>
                            <div className='flex flex-col gap-[28px]'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-[32px] bold'>Add Details</h1>
                                    <button type="submit" className='flex items-center px-[32px] py-[12px] bg-[#005D7F]  rounded-[8px] gap-[8px]'>
                                        <img src={check} alt="" className='w-[20px] h-[20px]' />
                                        <span className='text-white bold text-[14px]'>Save</span>
                                    </button>
                                </div>

                            </div>


                            <div className='flex py-[16px] px-[20px] gap-[24px] flex-col border rounded-[24px]'>

                                <div className='flex gap-[5px] items-center'>
                                    <span>
                                        Add Details
                                    </span>
                                    <div className='w-[430px] h-[1px] bg-[#dcdcdc]'></div>
                                </div>

                                <div className='border rounded-[8px] px-[16px] text-[14p] py-[8px] flex flex-col'>
                                    <span className='text-[12px]'>Godown </span>
                                    <input
                                        {...register('godownName', { required: 'Godown name is required' })}
                                        type="text" placeholder='Type godown name...|' className='text-[16px] border-none focus:outline-none w-full  outline:none' />
                                </div>


                                <div className='border rounded-[8px] px-[16px] py-[8px] flex flex-col'>
                                    <span className='text-[12px]'>CODE </span>


                                    <input
                                        {...register('godownCode', { required: 'code is required' })}
                                        type="text" placeholder='Type Godown Code...|' className='w-full border-none focus:outline-none  outline:none' />
                                </div>

                                <div className='border items-start gap-[10px] rounded-[8px] px-[16px] py-[8px] flex flex-col'>
                                    <span className='text-[12px]'>City </span>

                                    <select {...register('address', { required: 'city is required' })} className='w-full border-none focus:outline-none outline-none'>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="Delhi">Delhi</option>
                                    </select>
                                </div>

                                <div className='flex flex-col border rounded-[8px]  px-[16px] py-[8px]'>
                                    <span className='text-[12px]'>Shelfs</span>
                                    <input
                                        {...register('numberOfShelfs', { required: 'numberOfShelfs is required' })}
                                        type="number" placeholder='10' className='outline:none border-none focus:outline-none' />
                                </div>
                               
                            </div>
                        </div>

                        {closed()}
                    </div>
                </div>

            </div>
        </form>
    );
};

export default AddGodown;
