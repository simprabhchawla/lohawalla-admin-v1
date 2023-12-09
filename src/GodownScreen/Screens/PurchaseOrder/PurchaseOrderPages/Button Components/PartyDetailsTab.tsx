import icon from "../../../../../assets_/Godown Ions images/app-window.svg"
import { useState } from 'react';

export const PartyDetailsTab = ({ disabled, purchaseData, id }: any) => {

console.log("PartyDetailsTab",purchaseData)
  return (
    <div className="p-[40px] gap-[40px] flex flex-col border-2 rounded-xl">
      <div className="flex items-center gap-[21px]">
        <div className="flex text-[#005D7F] w-[200px] text-[24px] font-medium">
          Party Details
        </div>
        <div className="flex bg-[#818181aa] h-[2px] w-[100%] font-medium">
        </div>

      </div>

      <div className="flex  gap-[20px] w-[100%]">
        <div className="border-2 w-full rounded-xl p-[20px] gap-[20px] flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex gap-[5px]">
              <img src={icon} alt="" />
              <span>Add Party Details</span>
            </div>

          </div>

          <div className="w-full flex justify-between gap-[50px]">
            <div className="flex w-[50%] gap-[20px] flex-col">
              <div className="flex gap-[10px] flex-col">
                <span>Party Code</span>
                <input
                  type="text"
                  value={purchaseData?.customer?.customerCode}
                  className="outline-none border rounded-lg p-[10px]"
                  disabled
                />
              </div>
              <div className="flex gap-[10px] flex-col">
                <span>Party Name</span>
                <input
                  type="text"
                  value={purchaseData?.customer?.customerName}
                  className="outline-none border rounded-lg p-[10px]"
                  disabled
                />
              </div>
            </div>

            <div className="flex w-[50%] gap-[20px] flex-col">
              <div className="flex gap-[10px] flex-col">
                <span>GSTIN/UIN</span>
                <input
                  type="text"
                  value={purchaseData?.customer?.gstNumber}
                  className="outline-none border rounded-lg p-[10px]"
                  disabled
                />
              </div>
              <div className="flex gap-[10px] flex-col">
                <span>Pan / IT No</span>
                <input
                  type="text"
                  value={purchaseData?.customer?.panCode}
                  className="outline-none border rounded-lg p-[10px]"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[10px] flex-col">
            <span>Address</span>
            <textarea
              value={`${purchaseData?.customer?.address1} ${purchaseData?.customer?.address2} ${purchaseData?.customer?.city}`}
              className="outline-none h-[96px] w-[50%] border rounded-lg p-[10px]"
              disabled
            />

          </div>
        </div>
      </div>
    </div>
  )
}