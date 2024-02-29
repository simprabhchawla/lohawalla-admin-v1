// AddManagerForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import check from "../../../assets_/icons/save.svg"
const AddManagerForm = ({ onClose, onSubmit, Godowndata }: any) => {
    
    const { register, handleSubmit } = useForm();

    const handleFormSubmit = (data: any) => {
        onSubmit(data);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-[20px]'>
            <div className='text-[24px] text-[#005D7F] font-bold'>
                Manager Information
            </div>
            <div className='flex flex-col gap-[15px]'>

                <div className='flex gap-[10px]  justify-between'>

                    <label className='flex gap-[10px] w-[100%] flex-col'>
                        <span className='text-[#21A0C3]'>
                            Name
                        </span>
                        <input type="text" {...register('name', { required: true })} className='border rounded-[8px] border-[#DFE1E6]' />
                    </label>

                    <label className='flex gap-[10px] w-[100%] flex-col'>
                        <span className='text-[#21A0C3]'>
                            Employee Code

                        </span>
                        <input type="text" {...register('employeeCode', { required: true })} className='border rounded-[8px] border-[#DFE1E6]' />
                    </label>
                </div>

                <div className='flex gap-[10px]  justify-between'>

                    <label className='flex gap-[10px] w-[100%] flex-col'>
                        <span className='text-[#21A0C3]'>
                            Email

                        </span>
                        <input type="email" {...register('email', { required: true })} className='border rounded-[8px] border-[#DFE1E6]' />
                    </label>

                    <label className='flex gap-[10px] w-[100%] flex-col'>
                        <span className='text-[#21A0C3]'>
                            Phone Number

                        </span>
                        <input type="tel" {...register('phoneNumber', { required: true })} className='border rounded-[8px] border-[#DFE1E6]' />
                    </label>
                </div>

                <div className='flex gap-[10px]  justify-between'>

                    <div className='flex w-[100%] flex-col gap-[10px]'>
                        <span className='text-[#21A0C3]'>Godown</span>
                        <select
                           {...register('godown', { required: true })} 
                            className='border rounded-[8px] border-[#DFE1E6]'
                        >
                            {Godowndata && Godowndata.map((element: any, index: any) => (
                                <option key={element._id} value={element._id}>
                                    {element.godownName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <label className='flex gap-[10px] w-[100%] flex-col'>

                        <span className='text-[#21A0C3]'>
                            Password

                        </span>
                        <input type="password" {...register('password', { required: true })} className='border rounded-[8px] border-[#DFE1E6]' />
                    </label>
                </div>


            </div>

            <div className='flex gap-[10px] justify-end text-center'>
                <button onClick={onClose} className='text-[#005D7F] border-2 border-[#005D7F] rounded-[8px] py-[12px] px-[30px]  '>Cancel</button>
                <button type="submit" className='bg-[#005D7F] items-center gap-[10px] flex  rounded-[8px] py-[12px] px-[30px]  text-white'>
                    <img src={check} alt="" />
                    Submit</button>

            </div>
        </form>
    );
};

export default AddManagerForm;
