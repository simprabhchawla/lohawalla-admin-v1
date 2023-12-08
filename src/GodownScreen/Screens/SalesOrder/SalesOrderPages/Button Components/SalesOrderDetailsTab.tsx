
import { fetchGodownData } from '@src/Redux/Slice/Admin/godownSlice';
import { getSingleSalesOrderAsync } from '@src/Redux/Slice/GodownManager/SalesOrder/SalesOrderSlice';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import addd from '../../../../../assets_/Godown Ions images//plus.svg'
import serachh from "../../../../../assets_/Godown Ions images//search.svg"
import add from "../../../../../assets_/Godown Ions images//check.svg"
import { getSalesDataAsync } from '@src/Redux/Slice/GodownManager/SalesOrder/OrderDataSlice';
import { addSalesAsync } from '@src/Redux/Slice/GodownManager/SalesOrder/SalesBillSlice';

export const SalesOrderDetailsTab = ({ disabled, ids }: any) => {
  const Salesdata = useSelector((state: any) => state.salesOrder.data);

  const dispatch = useDispatch();

  const [selectedGodown, setSelectedGodown] = useState('');
  const [Quantity, setQuantity] = useState(1);
  const [Price, setPrice] = useState("");

  const [selectedIndex, setSelectedIndex] = useState<any>('');

  const commonTableCell = 'text-black px-[10px] py-[12px] font-medium flex-wrap border text-center';
  const commonTableRow = 'text-black px-[10px] py-[12px] font-medium flex-wrap border text-center';

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('Form Data:', data);
  };



  const Godowndata = useSelector((state: any) => state.godown.data);

  const newData = useSelector((state: any) => state.datasales?.data?.sales);
  console.log("i am new data ", newData)

  // console.log("gd", Godowndata)

  useEffect(() => {
    dispatch(getSingleSalesOrderAsync(ids));
  }, []);


  useEffect(() => {
    dispatch(fetchGodownData());
    dispatch(getSalesDataAsync(ids))
  }, [dispatch]);



  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);


  const handleSave = () => {
    console.log('Selected Item:', selectedIndex._id);
    console.log('Selected Godown:', selectedGodown);
    const data = {
      godown: selectedGodown,
      salesOrder: Salesdata._id,
      items: [
        {
          item: selectedIndex._id,
          price: Price,
          gst: 18,
          quantity: Quantity,
          actualQuantity: Quantity
        }
      ]
    }
    console.log("HIIIIII", data)
    dispatch(addSalesAsync(data)).then((res: any) => {
      // console.log("res", res)
      if (res.payload.status) {
        toast.success("Add Sucessfully")
        setShowAdditionalInfo(true);
      }
    })
  };


  const handleItemSelect = (element: any) => {
    console.log("lalallallalal", element)
    setSelectedIndex(element);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-[40px] gap-[40px] flex flex-col border-2 rounded-xl overflow-x-auto">

      <div className="flex items-center justify-between gap-[21px]">
        <div className="flex text-[#005D7F] text-[24px] font-medium">Sales Order</div>
        <div className="flex bg-[#818181aa] h-[2px] w-[950px] font-medium"></div>


      </div>

      <div className="flex font-bold text-[#6B778C] gap-[20px]">
        <table className="w-full border">
          <tbody className='w-[100%]'>
            <tr >
              <td className={`${commonTableCell}`}>Sr No.</td>
              <td className={`${commonTableCell}`}>Description of goods</td>
              <td className={`${commonTableCell}`}>M.Code</td>
              <td className={`${commonTableCell}`}>Part No.</td>
              <td className={`${commonTableCell}`}>Quantity</td>
              <td className={`${commonTableCell}`}>Rate</td>
            </tr>

            <tr >
              <td className={`${commonTableRow}`}>1</td>

              <td className={`${commonTableRow}`}>
                <div className='flex py-[10px] justify-center items-center'>
                  <select
                    className='outline-none border px-[10px] py-[12px] rounded-lg'
                    disabled={disabled}
                    onChange={(e) => handleItemSelect(Salesdata?.item.find((item: any) => item.item?._id === e.target.value))}
                  >
                    <option> Select items</option>
                    {Salesdata?.item && Salesdata?.item.map((element: any) => (
                      <option
                        className='text-black'
                        key={element?.item?._id}
                        value={element?.item?._id}
                      >
                        {element.item?.name}
                      </option>
                    ))}
                  </select>
                </div>

                <hr />
                <div className="container px-[13px] gap-[10px] flex justify-between mx-auto mt-10">
                  <select
                    className='outline-none flex gap-[5px] border border-black px-4 py-2 rounded-full'
                    disabled={disabled}
                    onChange={(e) => setSelectedGodown(e.target.value)}
                  >
                    <option> Select Godown</option>

                    {Godowndata && Godowndata.map((element: any) => (
                      <option className='text-black' key={element._id} value={element._id}>
                        {element.godownName}
                      </option>
                    ))}
                  </select>
                  <button
                    type='button'
                    className="bg-[#005D7F] text-white flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg"
                    onClick={handleSave}
                  >
                    <img src={add} alt="" />

                    Save
                  </button>
                </div>

                <tr className="container flex justify-between mx-auto mt-10 h-[142px] overflow-y-auto">
                  <td className='font-bold text-[18px] text-black px-[13px]'>
                    <div>
                      Godown
                    </div>
                    {newData && newData.map((elements: any) => {
                      console.log(newData)
                      return <div className='font-medium text-[16px]'>
                        {elements.godown?.godownName}
                      </div>
                    })}
                  </td>
                  <td className='font-bold text-[18px] text-black px-[13px]'>
                    <div>
                      Quantity
                    </div>
                    {newData && newData.map((elements: any) => {
                      return <div className='font-medium text-[16px]'>
                        {elements.itemData[0]?.quantity}
                      </div>
                    })}
                  </td>
                </tr>
              </td>

              <td className={`${commonTableRow} flex border h-[23rem]`}>
                -
              </td>
              <td className={`${commonTableRow} relative top-[-155px] `}>
                -
              </td>

              <td className={`${commonTableRow} relative top-[-155px]`}>
                <input
                  value={selectedIndex.quantity}
                  onChange={(event: any) => setQuantity(event.target.value)}
                  type="number"
                  placeholder="Quantity"
                  disabled={disabled}
                  className="font-medium text-[18px] border-0 "
                />
                <hr />
              </td>

              <td className={`${commonTableRow} relative top-[-155px]`}>
                <input
                  value={selectedIndex.price}
                  onChange={(event: any) => setPrice(event.target.value)}
                  type="number"
                  placeholder="Type Rate...."
                  className='border-0 '
                />
                <hr />

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  )
}