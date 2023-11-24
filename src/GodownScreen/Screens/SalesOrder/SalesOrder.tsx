import { useEffect, useState } from "react";
import right from "../../../assets_/Godown Ions images//arrow-right.svg"
import searchh from "../../../assets_/Godown Ions images//search.svg"
import Table from "./Components/Table"
import img from "../../../assets_/Godown Ions images//avatar.svg"
import { Link } from "react-router-dom";

// const PageLimit = 9


const tableData = [
  {
    date: "23/04/23, 03:56pm",
    img: img,
    customerName: "Rohan Kaushal",
    voucherNumber: "07OCTO2023",
    orderNumber: "0121213123",
    totalAmount: "45000",
  },
  {
    date: "23/04/23, 03:56pm",
    img: img,
    customerName: "kajal Kaushal",
    voucherNumber: "07OCTO2023",
    orderNumber: "0121213123",
    totalAmount: "45000",
  },
  {
    date: "23/04/23, 03:56pm",
    img: img,
    customerName: "Rohan Kaushal",
    voucherNumber: "07OCTO2023",
    orderNumber: "0121213123",
    totalAmount: "45000",
  },
];


export const SalesOrder = () => {

  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(10);
  const [searchInput, setSearchInput] = useState(""); 
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // const handleNextClick = () => {
  //   const totalPages = Math.ceil(PageLimit / limit);
  //   console.log("hyy", totalPages, page)
  //   if (page < totalPages) {
  //     setPage(page + 1);
  //   }
  // };

  // const handlePreviousClick = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // };


  // useEffect(() => {
  //     const data = {
  //         page: page,
  //         limit: limit
  //     }

  //     // dispatch(fetchNotifications(data)).then((res: any) => {
  //     //     setNotificationData(res.payload)
  //     //     console.log("hiiiii", notificationsData)
  //     // })

  // }, [dispatch, page, limit]);

  // const totalPages = Math.ceil(PageLimit / limit);

  const filteredTableData = tableData.filter((data) =>
    Object.values(data).some((value) =>
      value.toString().toLowerCase().includes(searchInput.toLowerCase())
    )
  );

  useEffect(() => {
    if (searchInput.trim() !== "") {
      const newSuggestions: string[] = tableData
        .map((data) => data.customerName)
        .filter((value) => value.toLowerCase().includes(searchInput.toLowerCase()));
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
          Sales Order
        </div>
        <Link to="/SalesOrderDetail" className="bg-[#005D7F] flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg ">
          <span className="text-white">
            Sales Order
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

        {/* <div className="flex pt-[10px] gap-[10px] justify-center items-center">
          <button onClick={handlePreviousClick} disabled={page === 1}>
            {"<<<"}
          </button>
          <span className="border rounded-full bg-blue-500 px-[18px] shadow-lg text-white py-[12px]">
            {page} of {totalPages}
          </span>
          <button onClick={handleNextClick}>
            {">>>"}
          </button>
        </div> */}
      </div>

    </div>
  )
}
