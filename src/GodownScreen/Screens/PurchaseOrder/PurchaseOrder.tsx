import { useEffect, useState } from "react";
import right from "../../../assets_/Godown Ions images//arrow-right.svg"
import searchh from "../../../assets_/Godown Ions images//search.svg"
import Table from "./Components/table"
import img from "../../../assets_/Godown Ions images//avatar.svg"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPurchaseOrderAsync } from "@src/Redux/Slice/GodownManager/PurchaseOrderSlice";

// const PageLimit = 9


const tableData = [
  {
    date: "23/04/23, 03:56pm",
    img: img,
    customerName: "Rajni",
    voucherNumber: "07OCTO2023",
    orderNumber: "0121213123",
    totalAmount: "45000",
  },
  {
    date: "23/04/23, 03:56pm",
    img: img,
    customerName: "kajal Sahrma",
    voucherNumber: "07OCTO2023",
    orderNumber: "0121213123",
    totalAmount: "45000",
  },
  {
    date: "23/04/23, 03:56pm",
    img: img,
    customerName: "komal",
    voucherNumber: "07OCTO2023",
    orderNumber: "0121213123",
    totalAmount: "45000",
  },
];


export const PurchaseOrder = () => {

  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);


  const dispatch = useDispatch()

  const tableData = useSelector((state: any) => state.purchaseOrder?.data?.orders);
  console.log(tableData)

  useEffect(() => {
    dispatch(getPurchaseOrderAsync());
  }, [dispatch]);



  const dataArray = Array.isArray(tableData) ? tableData : [];

  const filteredTableData = dataArray.filter((data: any) =>
    Object.values(data).some((value: any) =>
      value.toString().toLowerCase().includes(searchInput.toLowerCase())
    )
  );



  useEffect(() => {
    if (searchInput.trim() !== "") {
      const newSuggestions: string[] = tableData
        .map((data: any) => data.customerName)
        .filter((value: any) => value.toLowerCase().includes(searchInput.toLowerCase()));
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchInput, tableData]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchInput(suggestion);
  };

  return (
    <div className="flex gap-[40px] px-[30px] py-[20px] flex-col">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex text-[#005D7F] text-[24px] font-medium">
          Purchase Order
        </div>
        <Link to="/PurchaseOrderDetail" className="bg-[#005D7F] flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg ">
          <span className="text-white">
            Purchase Order
          </span>
          <img src={right} alt="" />
        </Link>
      </div>

      <div className="flex justify-between items-center flex-wrap">
        <div className="flex text-[#62C6D7] text-[24px] font-medium">
          Order Summary
        </div>
        <div className="flex bg-[#62C6D7] h-[1px] w-[381px] font-medium">
        </div>

        <div className="flex gap-[10px] flex-wrap">
          <select className="p-[10px] bg-[#091E420A] outline-none rounded-lg ">
            <option value="">Select1</option>
            <option value="">Select2</option>
            <option value="">Select3</option>
          </select>

          <input
            className="h-10 ps-[21px] pe-[39px] text-sm leading-5 font-medium bg-[#091E420A] border border-solid border-[#9797AA38] rounded-md focus:outline-none"
            placeholder="Search"
            type="date" />

          <div className="flex bg-[#091E420A] border border-solid rounded-md border-[#9797AA38]">
            <input
              className="h-10 ps-[21px] w-full  text-sm leading-5 font-medium bg-[#091E420A]  focus:outline-none"
              placeholder="Search..."
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <img src={searchh} alt="" />
          </div>
          {suggestions.length > 0 && (
            <ul className="flex flex-col absolute right-[2rem] top-[17rem] bg-white shadow-lg w-[213px] p-[10px] rounded-sm">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)} className="cursor-pointer">
                  {suggestion}
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
      <div className="mt-12 overflow-auto">
        <Table tableData={filteredTableData} />


      </div>

    </div>
  )
}
