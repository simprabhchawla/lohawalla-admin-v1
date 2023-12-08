import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import check from '../../../../assets_/Godown Ions images/check.svg';
import close from '../../../../assets_/icons/x-close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addShelfsAsync } from '@src/Redux/Slice/GodownManager/ShelfSlice';
import { fetchGodownData } from '@src/Redux/Slice/Admin/godownSlice';

export const AddShelfs = ({ closePopup }: any) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch()

    const Godowndata = useSelector((state: any) => state.godown.data);
    console.log("self m godoen", Godowndata)

    useEffect(() => {
        dispatch(fetchGodownData());
    }, [dispatch]);

    const onSubmit = (data: any) => {
        console.log(data);
        const selfData = data
        dispatch(addShelfsAsync(selfData)).then(() => {
            dispatch(fetchGodownData());
            closePopup()
            location.reload();
        });

    };



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex py-[16px] px-[20px] gap-[24px] flex-col border rounded-[24px]'>

                <div className='flex gap-[5px] items-center'>
                    <h1 className='text-[32px] bold'>
                        Add Shelfs
                    </h1>
                    <div className='w-[430px] h-[1px] bg-[#dcdcdc]'></div>
                </div>
                <div className='rounded-[8px] px-[16px] text-[14px] gap-[10px] py-[8px] flex flex-col'>

                    <label className='text-[12px] font-semibold'>Shelf Name</label>
                    <input {...register('shelfName', { required: 'Shelf Name is required' })}
                        className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none  outline:none' />
                </div>

                <div className='rounded-[8px] px-[16px] text-[14px] gap-[10px] py-[8px] flex flex-col'>

                    <label className='text-[12px] font-semibold'>Shelf Code</label>
                    <input {...register('shelfCode', { required: 'Shelf Code is required' })}
                        className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none  outline:none' />
                </div>

                <div className='rounded-[8px] px-[16px] text-[14px] gap-[10px] py-[8px] flex flex-col'>

                    <label className='text-[12px] font-semibold'>Location</label>
                    <input {...register('location', { required: 'Location is required' })}
                        className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none  outline:none' />
                </div>

                <div className='rounded-[8px] px-[16px] text-[14px] gap-[10px] py-[8px] flex flex-col'>
                    <label className='text-[12px] font-semibold'>Godown</label>
                    <select {...register('godown', { required: 'Godown is required' })}
                        className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none outline:none'>
                        <option value="">Select Godown</option>
                        {Godowndata && Godowndata.map((godown: any) => (
                            <option key={godown._id} value={godown._id} className='focus:outline-none outline:none'>
                                {godown.godownName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex gap-[10px] justify-end'>
                    <button
                        className="text-[#005D7F] flex gap-[5px] items-center border border-[#005D7F] bg-white font-bold py-2 px-4 mt-4 rounded"
                        onClick={closePopup}
                    >
                        <img src={close} alt="" />
                        Close
                    </button>
                    <button
                        type='submit'
                        className="bg-[#005D7F] flex gap-[5px] items-center text-white font-bold py-2 px-4 mt-4 rounded"
                    >
                        <img src={check} alt="" />
                        Create Shelves
                    </button>
                </div>
            </form>
        </div>
    );
};
