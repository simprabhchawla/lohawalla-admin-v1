import React from 'react';
import { useForm } from 'react-hook-form';
import closed from "../../../assets_/icons/CloseIcon.svg"
import { useDispatch } from 'react-redux';
import { getManagerAsync, updateManagerDataAsync } from '@src/Redux/Slice/Admin/ManagerSlice';

export const EditPopupManager = ({ selectedRowData, handleEditPopupClose }: any) => {
  const { register, handleSubmit, setValue } = useForm();

  const dispatch = useDispatch()

  const handleFormSubmit = (data: any) => {
    const editData = {
      id: selectedRowData._id,
      data: data
    }
    console.log(editData)
    dispatch(updateManagerDataAsync(editData)).then(() => {
      dispatch(getManagerAsync());
      handleEditPopupClose()
    });
    console.log('Submitted Data:', editData);
  };

  const handleInputChange = (name: any, value: any) => {
    setValue(name, value);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-[10px]'>
      <div>
        <h2 className="text-xl  font-bold">Edit Manager</h2>
      </div>
      <div className='flex gap-[10px] border flex-col rounded-[8px] p-[10px]'>
        <label className='text-[12px]'>Name</label>
        <input
          {...register('name')}
          defaultValue={selectedRowData?.user?.name || ''}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className='outline-none text-[18px] rounded-[5px] '
        />
      </div>

      <div className='flex gap-[10px] border flex-col rounded-[8px] p-[10px]'>
        <label className='text-[12px]'>Employee Code</label>
        <input
          {...register('employeeCode')}
          defaultValue={selectedRowData?.employeeCode || ''}
          onChange={(e) => handleInputChange('employeeCode', e.target.value)}
          className='outline-none text-[18px] rounded-[5px] '
        />
      </div>

      <div className='flex gap-[10px] border flex-col rounded-[8px] p-[10px]'>
        <label className='text-[12px]'>Email</label>
        <input
          {...register('email')}
          defaultValue={selectedRowData?.user?.email || ''}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className='outline-none text-[18px] rounded-[5px] '
        />
      </div>

      <div className='flex gap-[10px] border flex-col rounded-[8px] p-[10px]'>
        <label className='text-[12px]'>Phone Number</label>
        <input
          {...register('phoneNumber')}
          defaultValue={selectedRowData?.user?.phoneNumber || ''}
          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          className='outline-none text-[18px] rounded-[5px] '
        />
      </div>

      <div>
        <div className=' flex justify-end'>
          <div onClick={handleEditPopupClose} className="absolute -right-3 top-[-15px] p-[5px] flex items-center justify-center bg-[#FFFFFF] rounded-full cursor-pointer">
            <img src={closed} className="w-[25px] h-[25px]" alt="" />
          </div>
          <button type="submit" className='px-[20px] py-[10px] bg-[#005D7F] text-white rounded-[5px] '>Submit</button>
        </div>
      </div>
    </form>
  );
};
