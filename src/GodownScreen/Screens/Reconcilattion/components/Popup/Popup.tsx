import { getAisleAsync } from '@src/Redux/Slice/GodownManager/AisleSlice';
import { getRecouncilationAsync, requestRecouncilationAsync } from '@src/Redux/Slice/GodownManager/RecouncilationSlice';
import { getShelfsAsync } from '@src/Redux/Slice/GodownManager/ShelfSlice';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const Popup = ({ closePopup, data }: any) => {
  const [godown, setGodown] = useState(''); 
  const [shelf, setShelf] = useState('');
  const [aisle, setAisle] = useState('');
  const [selectedShelfData, setSelectedShelfData] = useState<any>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getShelfsAsync());
  }, [dispatch]);




  const shelfData = useSelector((state: any) => state.shelfs?.data?.data);
  console.log(shelfData)


  const onSubmit = (formData: any) => {
    console.log('Form submitted with data:', formData);
    dispatch(requestRecouncilationAsync(formData)).then(()=>{
      dispatch(getRecouncilationAsync());
      closePopup()

    })
  };

  const handleShelfChange = (selectedShelfId: string) => {
    const selectedShelf = shelfData.find((shelf: any) => shelf._id === selectedShelfId);
    setSelectedShelfData(selectedShelf);
  };



  const aisleData = useSelector((state: any) => state?.aisle?.data?.data);
  console.log("asile", aisleData)

  const shelfCode = selectedShelfData ? selectedShelfData.shelfCode : null;

  useEffect(() => {
    if (shelfCode) {
      dispatch(getAisleAsync(shelfCode));
    }
  }, [dispatch, shelfCode]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[30px]'>
      <div className="flex justify-between items-center space-x-10">
        <div className="text-[24px] text-[#005D7F] font-semibold">Reconciliation</div>
        <div className='w-[120px] bg-[#d7e2e6] h-[2px]' />
        <button
          className="text-white cursor-pointer px-[16px] py-[10px] rounded-lg  bg-[#005D7F]"
          type='submit'

        >
          Send Request
        </button>
      </div>

      <div className='py-[27px] flex flex-col gap-[20px] px-[16px] border border-[#B0B0B0] rounded-xl'>


        <div className='gap-[10px] font-medium text-[18px] flex flex-col'>
          <label className='text-[16px] font-semibold'>Godown</label>
          <select  {...register('godownId')}
            className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none outline:none'>
            {data && data.map((godown: any) => (
              <option key={godown.godown._id} value={godown.godown._id} className='focus:outline-none outline:none'>
                {godown.godown.godownName}
              </option>
            ))}
          </select>
        </div>

        <div className='gap-[10px] font-medium text-[18px] flex flex-col'>
          <label className='text-[16px] font-semibold'>Shelfs</label>
          <select
            {...register('shelfId')}
            className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none outline:none'
            onChange={(e) => {
              setShelf(e.target.value);
              handleShelfChange(e.target.value);
            }}
          >
            <option value="">Select Shelfs</option>
            {shelfData &&
              shelfData.map((shelfs: any) => (
                <option key={shelfs._id} value={shelfs._id} className='focus:outline-none outline:none'>
                  {shelfs.shelfName}
                </option>
              ))}
          </select>
        </div>



        <div className='gap-[10px] font-medium text-[18px] flex flex-col'>
          <label className='text-[16px] font-semibold'>Aisle</label>
          {aisleData ? (
            <select
              {...register('aisleId')}
              className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none outline:none'
              onChange={(e) => {
                setShelf(e.target.value);
                handleShelfChange(e.target.value);
              }}
            >
              {aisleData.map((aisle: any) => (
                <option key={aisle._id} value={aisle._id} className='focus:outline-none outline:none'>
                  {aisle.aisleName}
                </option>
              ))}
            </select>
          ) : (
            <p className='w-full border rounded-[8px] px-[12px] py-[8px] focus:outline-none outline:none'>Please select the shelfs.</p>
          )}
        </div>


      </div>

      <button
        className="absolute -right-3 top-[-15px] p-[5px] flex items-center justify-center bg-[#FFFFFF] rounded-full cursor-pointer"
        onClick={closePopup}
      >
        X
      </button>
    </form>
  );
};
