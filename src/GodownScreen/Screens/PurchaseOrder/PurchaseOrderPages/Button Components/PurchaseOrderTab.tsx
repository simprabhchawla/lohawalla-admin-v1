import { updateSinglePurchaseOrderAsync } from "@src/Redux/Slice/GodownManager/PurchaseOrder/PurchaseOrderSlice";
import icon from "../../../../../assets_/Godown Ions images/app-window.svg"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export const PurchaseOrderTab = ({ disabled, purchaseData, id }: any) => {
  console.log(id)

  const [currentTime, setCurrentTime] = useState(new Date());

  const dispatch = useDispatch();


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = `${currentTime.getHours()}:0${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  const { handleSubmit, register, formState: { errors } } = useForm();

  const [formData, setFormData] = useState({
    paymentTerm: 'cash',
    dispatchDetail: 'dispatch1',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    const purchaseOrder = {
      ...formData,
      id: id
    }

    console.log(purchaseOrder);

    dispatch(updateSinglePurchaseOrderAsync(purchaseOrder))
  };

  return (
    <div className="p-[40px] gap-[40px] flex flex-col border-2 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} >

        <div className="flex justify-between pb-5 items-center gap-[21px]">
          <div className="flex text-[#005D7F] w-[200px] text-[24px] font-medium">
            Purchase Order
          </div>
          <div className="flex bg-[#818181aa] h-[2px] w-[100%] font-medium">
          </div>
          <button type="submit" className="flex text-white px-[20px] py-[15px] cursor-pointer bg-[#005D7F] text-[14px] rounded-[10px] font-medium">
            Save
          </button >

        </div>

        <div className="flex gap-[20px] w-[100%]">
          <div className="border-2 w-[50%] rounded-xl p-[20px] gap-[20px] flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex gap-[5px]">
                <img src={icon} alt="" />
                <span>Purchase Order</span>
              </div>
              <div className="flex rounded-[24px] py-[8px] px-[12px] border border-[#21A0C3] bg-[#E2F6F7]">
                {formattedTime}
              </div>

            </div>
            <hr />

            <div className="flex gap-[20px] flex-col">
              <div className="flex gap-[10px] flex-col">
                <span>Voucher Number</span>
                <input type="text" placeholder="125426612GH" className="outline-none border rounded-lg  p-[10px]"
                  disabled
                  value={purchaseData?.voucherCode}

                />
              </div>
              <div className="flex gap-[10px] flex-col">
                <span>Order Number</span>
                <input type="text" placeholder="Type ...|" className="outline-none border rounded-lg  p-[10px]"
                  disabled
                  value={purchaseData?.orderNumber}

                />
              </div>

            </div>
          </div>

          <div className="border-2 w-[50%] rounded-xl p-[20px] gap-[20px] flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex gap-[5px]">
                <img src={icon} alt="" />
                <span>Payment Details</span>
              </div>

            </div>
            <hr />

            <div className="flex gap-[20px] flex-col">
              <div className="flex gap-[10px] flex-col">
                <label htmlFor="paymentTerm">Payment Term</label>
                <select
                  id="paymentTerm"
                  className="outline-none border rounded-lg p-[10px]"
                  disabled={disabled}
                  name="paymentTerm"
                  value={formData.paymentTerm}
                  onChange={handleInputChange}
                >
                  <option value="cash">Cash</option>
                  <option value="online">Online</option>
                </select>
              </div>
              <div className="flex gap-[10px] flex-col">
                <label htmlFor="dispatchDetail">Dispatch Details</label>
                <select
                  id="dispatchDetail"
                  className="outline-none border rounded-lg p-[10px]"
                  disabled={disabled}
                  name="dispatchDetail"
                  value={formData.dispatchDetail}
                  onChange={handleInputChange}
                >
                  <option value="dispatch1">Dispatch1</option>
                  <option value="dispatch2">Dispatch2</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </form >
    </div >
  )
}
