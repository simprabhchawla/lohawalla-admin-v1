import icon from "../../../../../assets_/Godown Ions images/app-window.svg"
import searchh from "../../../../../assets_/Godown Ions images/search.svg"
import { useState } from 'react';


const dummyData = {
  partyCode: 'SC035',
  partyName: 'Gurunanak Purchase (MFG Diesel)',
  gstin: '05BDHPS829F1ZZ',
  panITNo: 'BDHPS8298F',
  address: 'Automatic Fetch from data....'
};
export const PartyDetailsTab = ({ disabled }:any) => {

  const [partyDetails, setPartyDetails] = useState(dummyData);

  const handleInputChange = (field: any, value: any) => {
    setPartyDetails(prevDetails => ({
      ...prevDetails,
      [field]: value
    }));
  };
  return (
    <div className="p-[40px] gap-[40px] flex flex-col border-2 rounded-xl">
      <div className="flex items-center gap-[21px]">
        <div className="flex text-[#005D7F] text-[24px] font-medium">
          Party Details
        </div>
        <div className="flex bg-[#818181aa] h-[2px] w-[851px] font-medium">
        </div>

      </div>

      <div className="flex  gap-[20px] w-[100%]">
        <div className="border-2 w-full rounded-xl p-[20px] gap-[20px] flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex gap-[5px]">
              <img src={icon} alt="" />
              <span>Add Party Details</span>
            </div>


            <div className="flex bg-[#F5F5F5] w-[458px] border border-solid rounded-md border-[#9797AA38]">
              <img src={searchh} alt="" className="" />
              <input
                className="h-10 ps-[21px] w-full  text-sm leading-5 font-medium bg-[#F5F5F5]  focus:outline-none"
                placeholder="Search..."
                type="search"
              />

            </div>

          </div>

          <div className="w-full flex justify-between gap-[50px]">
            <div className="flex w-[50%] gap-[20px] flex-col">
              <div className="flex gap-[10px] flex-col">
                <span>Party Code</span>
                <input
                  type="text"
                  value={partyDetails.partyCode}
                  onChange={(e) => handleInputChange('partyCode', e.target.value)}
                  className="outline-none border rounded-lg p-[10px]"
                  disabled={disabled}
                />
              </div>
              <div className="flex gap-[10px] flex-col">
                <span>Party Name</span>
                <input
                  type="text"
                  value={partyDetails.partyName}
                  onChange={(e) => handleInputChange('partyName', e.target.value)}
                  className="outline-none border rounded-lg p-[10px]"
                  disabled={disabled}
                />
              </div>
            </div>

            <div className="flex w-[50%] gap-[20px] flex-col">
              <div className="flex gap-[10px] flex-col">
                <span>GSTIN/UIN</span>
                <input
                  type="text"
                  value={partyDetails.gstin}
                  onChange={(e) => handleInputChange('gstin', e.target.value)}
                  className="outline-none border rounded-lg p-[10px]"
                  disabled={disabled}
                />
              </div>
              <div className="flex gap-[10px] flex-col">
                <span>Pan / IT No</span>
                <input
                  type="text"
                  value={partyDetails.panITNo}
                  onChange={(e) => handleInputChange('panITNo', e.target.value)}
                  className="outline-none border rounded-lg p-[10px]"
                  disabled={disabled}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[10px] flex-col">
            <span>Address</span>
            <textarea
              value={partyDetails.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="outline-none h-[96px] w-[50%] border rounded-lg p-[10px]"
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
