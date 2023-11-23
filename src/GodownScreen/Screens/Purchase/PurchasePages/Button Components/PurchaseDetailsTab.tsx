import addd from '../../../../../assets_/Godown Ions images/plus.svg'
import serachh from "../../../../../assets_/Godown Ions images/search.svg"
import add from "../../../../../assets_/Godown Ions images/check.svg"
import { useState } from 'react';

export const PurchaseDetailsTab = ({ disabled }: any) => {
  const commonTableCell = 'text-[#6B778C] flex-wrap';

  const [showSaveButton, setShowSaveButton] = useState(false);
  const [rowCount, setRowCount] = useState(1); 

  const handleAddClick = () => {
    setShowSaveButton(true);
    setRowCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="p-[40px] gap-[40px] flex flex-col border-2 rounded-xl">
      <div className="flex items-center gap-[21px]">
        <div className="flex text-[#005D7F] text-[24px] font-medium">Purchases Order</div>
        <div className="flex bg-[#818181aa] h-[2px] w-[950px] font-medium"></div>
        <button
          className="border-2 border-[#005D7F] flex gap-[10px] items-center px-[16px] py-[10px] rounded-lg "
          onClick={handleAddClick}
        >
          <img src={addd} alt="" />
          <span className="text-[#005D7F] font-bold">Add</span>
        </button>
        {showSaveButton && (
          <button className="bg-[#005D7F] flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg ">
            <img src={add} alt="" />
            <span className="text-white">Save</span>
          </button>
        )}
      </div>

      <div className="flex flex-col font-bold text-[#6B778C] gap-[20px] w-[100%]">
        <table className="w-full">
          <tbody>
            <tr>
              <td className={`${commonTableCell}`}>Sr No.</td>
              <td className={`${commonTableCell}`}>Description of goods</td>
              <td className={`${commonTableCell}`}>M.Code</td>
              <td className={`${commonTableCell}`}>Part No.</td>
              <td className={`${commonTableCell}`}>Due Date</td>
            </tr>
            <tr><td className="h-[39px]"></td></tr>

     
            {[...Array(rowCount)].map((_, index) => (
              <tr className='border'>
                <td className='border'>{index+1}</td>
                <td className='flex p-[12px]  flex-col border rounded-xl'>
                  <div className='flex py-[10px] justify-center items-center'>
                    <select className='outline-none' disabled={disabled}>
                      <option value="">Choose 1</option>
                      <option value="">Choose 2</option>
                      <option value="">Choose 3</option>
                    </select>
                  </div>
                  <hr />
                  <div className="container px-[13px] flex justify-between mx-auto mt-10">
                    <div className="flex gap-[5px] border border-black px-4 py-2 rounded-full">
                      <img src={serachh} alt="" />
                      <input type="search" className='outline-none w-full' placeholder='Search...' />
                    </div>
                    <button className="bg-[#005D7F] flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg ">
                      <img src={add} alt="" />
                      <span className="text-white">
                        Save
                      </span>
                    </button>
                  </div>
                  <hr />
                  <div className="container flex justify-between mx-auto mt-10">
                    <span className='font-bold text-[10px] text-black px-[13px]'>Godown</span>
                    <span className='font-bold text-[10px] text-black px-[13px]'>Actual Quantity</span>
                    <span className='font-bold text-[10px] text-black px-[13px]'>Purchase Order Quantity</span>
                    <span className='font-bold text-[10px] text-black px-[13px]'>Actual Price</span>
                    <span className='font-bold text-[10px] text-black px-[13px]'>Total</span>
                  </div>
                </td>
                <td className='border text-center'>
                  -
                </td>
                <td className='border text-center'>
                  -
                </td>
                <td className='border '>
                  <select className='outline-none' disabled={disabled}
                  >
                    <option value="">Choose 1</option>
                    <option value="">Choose 2</option>
                    <option value="">Choose 3</option>
                  </select>
                  <hr />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
        <div className='flex gap-[20px] flex-col border p-[16px]'>
          <p className='text-[16px]'>Narration</p>
          <textarea placeholder='Type Here...' className='outline-none border w-[325px] h-[70px] p-[10px]'></textarea>
        </div>
      </div>
    </div>
  )
}
