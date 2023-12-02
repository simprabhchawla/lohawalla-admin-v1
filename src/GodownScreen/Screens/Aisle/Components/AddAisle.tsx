import {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import check from '../../../../assets_/Godown Ions images/check.svg';
import close from '../../../../assets_/icons/x-close.svg';
import { getShelfsAsync } from '@src/Redux/Slice/GodownManager/ShelfSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addAisleApiAsync, getAisleAsync } from '@src/Redux/Slice/GodownManager/AisleSlice';

export const AddAisle = ({closePopup }: any) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShelfsAsync());
    }, [dispatch]);
    
    const Shelfs =  useSelector((state: any) => state.shelfs?.data?.data);
    // console.log(Shelfs)


    const onSubmit = (data: any) => {
        console.log(data);
        const aisles = data
        dispatch(addAisleApiAsync(aisles)).then(() => {
            dispatch(getAisleAsync());
            closePopup()
            // location.reload();
        });

    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex py-[16px] px-[20px] gap-[24px] flex-col border rounded-[24px]'>

                <div className='flex gap-[5px] items-center'>
                    <h1 className='text-[32px] bold'>
                        Add Aisle
                    </h1>
                    <div className='w-[430px] h-[1px] bg-[#dcdcdc]'></div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <label className='text-[12px] font-semibold'>Aisle Name</label>
                    <input {...register('aisleName', { required: 'Aisle Name is required' })}
                        className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none  outline:none' />
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <label className='text-[12px] font-semibold'>Aisle Code</label>
                    <input {...register('aisleCode', { required: 'Aisle Code is required' })}
                        className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none  outline:none' />
                </div>


                <div className='rounded-[8px] px-[16px] text-[14px] gap-[10px] py-[8px] flex flex-col'>
                    <label className='text-[12px] font-semibold'>Shelf</label>
                    <select {...register('shelf', { required: 'shelf is required' })}
                        className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none outline:none'>
                        {Shelfs && Shelfs.map((shelfs: any) => (
                            <option key={shelfs._id} value={shelfs._id} className='focus:outline-none outline:none'>
                                {shelfs.shelfName}
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
                        Create Aisles
                    </button>
                </div>
            </form>
        </div>
    );
};
