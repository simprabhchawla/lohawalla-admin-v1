import { useEffect, useState } from "react";
import adds from "../../../assets_/icons/add.svg"
import right from "../../../assets_/Godown Ions images/arrow-right.svg"
import Table from "./Components/Table"
import img from "../../../assets_/Godown Ions images/avatar.svg"
import { Link } from "react-router-dom";
import { AddAisle } from "./Components/AddAisle";
import { useDispatch, useSelector } from "react-redux";
import { getAisleAsync } from "@src/Redux/Slice/GodownManager/AisleSlice";



export const Aisle = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const aisleData = useSelector((state: any) => state?.aisle?.data?.data);
  console.log(aisleData)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAisleAsync());
  }, [dispatch]);


  const dataArray = Array.isArray(aisleData) ? aisleData : [];

  const filteredaisleData = dataArray.filter((data: any) =>
  Object.values(data).some((value: any) =>
    value.toString().toLowerCase().includes(searchInput.toLowerCase())
  )
);

  useEffect(() => {
    if (searchInput.trim() !== "") {
      const newSuggestions: string[] = aisleData
        .map((data:any) => data.customerName)
        ?.filter((value:any) => value.toLowerCase().includes(searchInput.toLowerCase()));
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchInput, aisleData]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchInput(suggestion);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className="flex gap-[40px] px-[30px] py-[20px] flex-col">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex text-[#005D7F] text-[24px] font-medium">
          Aisles Listing
        </div>
        <div className="flex gap-[10px]">
          <Link to="" onClick={openPopup} className="bg-[#005D7F] flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg ">
            <img src={adds} alt="" />
            <span className="text-white">
              Add Aisles
            </span>
          </Link>
          <Link to="/aisles" className="bg-[#005D7F] flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg ">
            <span className="text-white">
              Aisle
            </span>
            <img src={right} alt="" />
          </Link>

        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-bg absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="modal   overflow-x-auto relative bg-white p-6 rounded-lg shadow-lg">
            <AddAisle isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} openPopup={openPopup}
              closePopup={closePopup} />
          </div>
        </div>
      )}

      <div className="flex gap-[20px] items-center flex-wrap">
        <div className="flex text-[#62C6D7] text-[24px] font-medium">
          List Of Aisles
        </div>
        <div className="flex bg-[#62C6D7] mt-[10px] h-[1px] w-[900px] font-medium">
        </div>

      </div>
      <div className="mt-12 overflow-auto">
        <Table aisleData={filteredaisleData} />
      </div>

    </div>
  )
}
