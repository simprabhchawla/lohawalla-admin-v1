import icon from "../../../../../assets_/Godown Ions images/app-window.svg"

export const PurchaseTab = ({ disabled }: any) => {
  return (
    <div className="p-[40px] gap-[40px] flex flex-col border-2 rounded-xl">
      <div className="flex items-center gap-[21px]">
        <div className="flex text-[#005D7F] text-[24px] font-medium">
          Purchase Order
        </div>
        <div className="flex bg-[#818181aa] h-[2px] w-[851px] font-medium">
        </div>

      </div>

      <div className="flex gap-[20px] w-[100%]">
        <div className="border-2 w-[50%] rounded-xl p-[20px] gap-[20px] flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex gap-[5px]">
              <img src={icon} alt="" />
              <span>Purchase Order</span>
            </div>
            <div className="flex rounded-[24px] py-[8px] px-[12px] border border-[#21A0C3] bg-[#E2F6F7]">
              12:12:2023
            </div>

          </div>
          <hr />

          <div className="flex gap-[20px] flex-col">
            <div className="flex gap-[10px] flex-col">
              <span>Voucher Number</span>
              <input type="text" placeholder="125426612GH" className="outline-none border rounded-lg  p-[10px]"
                disabled={disabled}
              />
            </div>
            <div className="flex gap-[10px] flex-col">
              <span>Order Number</span>
              <input type="text" placeholder="Type ...|" className="outline-none border rounded-lg  p-[10px]"
                disabled={disabled}
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
              <span>Payment Term</span>

              <select className="outline-none border rounded-lg  p-[10px]" disabled={disabled}>
                <option value="">Term1</option>
                <option value="">Term2</option>
                <option value="">Term</option>

              </select>
            </div>
            <div className="flex gap-[10px] flex-col">
              <span>Dispatch Details</span>
              <select className="outline-none border rounded-lg  p-[10px]" disabled={disabled}>
                <option value="">Detail1</option>
                <option value="">Detail2</option>
                <option value="">Detail3</option>

              </select>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
