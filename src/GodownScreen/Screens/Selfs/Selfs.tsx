import { useEffect, useState } from "react";
import adds from "../../../assets_/icons/add.svg"
import right from "../../../assets_/Godown Ions images/arrow-right.svg"
import Table from "./Components/Table"
import img from "../../../assets_/Godown Ions images/avatar.svg"
import view from "../../../assets_/Godown Ions images/arrow.svg"
import { Link } from "react-router-dom";
import { AddShelfs } from "./Components/AddShelfs";
import { useDispatch, useSelector } from "react-redux";
import { getShelfsAsync } from "@src/Redux/Slice/GodownManager/ShelfSlice";

export const Selfs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getShelfsAsync());
  }, [dispatch]);

  const tableData = useSelector((state: any) => state.shelfs?.data?.data);
  console.log(tableData)

  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const filteredTableData = tableData ? tableData.filter((data: any) =>
    Object.values(data).some((value: any) =>
      value.toString().toLowerCase().includes(searchInput.toLowerCase())
    )
  ) : [];


  useEffect(() => {
    if (searchInput.trim() !== "") {
      const newSuggestions: string[] = tableData
        .map((data: any) => data.customerName)
        ?.filter((value: any) => value?.toLowerCase().includes(searchInput.toLowerCase()));
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchInput, tableData]);

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
          Shelfs Listing
        </div>
        <Link to="" onClick={openPopup} className="bg-[#005D7F] flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg ">
          <img src={adds} alt="" />
          <span className="text-white">
            Add Shelfs
          </span>
        </Link>

      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-bg absolute inset-0 "></div>
          <div className="modal w-[700px] h-auto overflow-x-auto relative bg-white p-6 rounded-lg shadow-lg">
            <AddShelfs isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} openPopup={openPopup}
              closePopup={closePopup} />
          </div>
        </div>
      )}

      <div className="flex gap-[20px] items-center flex-wrap">
        <div className="flex text-[#62C6D7] text-[24px] font-medium">
          List Of Shelfs
        </div>
        <div className="flex bg-[#62C6D7] mt-[10px] h-[1px] w-[900px] font-medium">
        </div>

      </div>
      <div className="mt-12 overflow-auto">
        <Table tableData={filteredTableData} />
      </div>

    </div>
  )
}
