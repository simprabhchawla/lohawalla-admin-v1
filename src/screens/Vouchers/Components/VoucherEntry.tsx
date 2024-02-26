import { useState } from "react";
import edit from "../../../assets_/icons/edit.svg";
import deletes from "../../../assets_/icons/Delete.svg";
import Editpopup from "../Components/Editpopup";
import { useDispatch } from "react-redux";
import { deleteCustomerApi } from "@src/Redux/Api/Admin/customerApi";
import {
  deleteCustomerAsync,
  getVouchersAsync,
} from "@src/Redux/Slice/Admin/customerSlice";
import toast from "react-hot-toast";

interface Voucher {
  voucherName: string;
  voucherMethod: string;
  typeOfVoucher: string;
  voucherCode: string;
  updatedAt: string;
  group: any[];
}

interface VoucherEntryProps {
  vouchersData: Voucher[];
}
export const VoucherEntry = ({ vouchersData }: any) => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredData = vouchersData?.filter((element: any) => {
    const searchLowerCase = searchInput.toLowerCase();
    const matchesSearch =
      element.voucherName.toLowerCase().includes(searchLowerCase) ||
      element.voucherCode.toLowerCase().includes(searchLowerCase);
    const matchesFilter = selectedFilter
      ? element.typeOfVoucher === selectedFilter
      : true;
    return matchesSearch && matchesFilter;
  });

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedRowId, setSelectedRowId] = useState<any>(null);
  const [selectedVoucherData, setSelectedVoucherData] =
    useState<Voucher | null>(null);

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedAction(null);
  };

  const dispatch = useDispatch();

  const deleteVouchers = () => {
    if (selectedRowId) {
      dispatch(deleteCustomerAsync(selectedRowId)).then((res: any) => {
        if (res.payload.status) {
          toast.success(res.payload.message);
          dispatch(getVouchersAsync());
          closePopup();
        } else {
          toast.error(res.payload.message);
        }
      });
    }
  };
  const tableHeading = `px-4 text-[#6B778C] border text-md font-semibold h-[56px] whitespace-nowrap capitalize`;
  const tableData = `px-4  text-md h-[56px] whitespace-nowrap capitalize border-e`;
  const [menuOpen, setMenuOpen] = useState<number[]>([]);
  const toggleMenu = (element: any, index: number) => {
    setSelectedVoucherData(element);
    if (menuOpen.includes(index)) {
      setMenuOpen([]);
    } else {
      setMenuOpen([index]);
    }
  };
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);

  const openEditPopup = () => {
    setEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setEditPopupOpen(false);
  };
  return (
    <div className="pt-[32px] flex flex-col gap-[30px]">
      <div className="flex justify-between gap-[15px] w-[100%] items-center">
        <div className="text-[#00916A] text-[24px] font-medium ">
          Voucher Entry & Grouping
        </div>
        <div className="flex gap-[20px]">
          <select
            className="outline-none bg-[#091E420A] rounded-[8px]"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="">Choose Voucher Type</option>
            <option value="purchase">Purchase</option>
            <option value="purchaseOrder">Purchase Order</option>
            <option value="sales">Sales</option>
            <option value="salesOrder">Sales Order</option>
            <option value="transfer">Transfer</option>
          </select>

          <div className="flex  gap-[10px] items-center">
            <p className="text-base  font-normal tracking-[0.25px] text-[#1C1C1C]">
              Manual
            </p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isSwitchOn}
                onChange={toggleSwitch}
                className="hidden"
              />
              <div
                className={`slider cursor-pointer w-14 h-[20px] rounded-full relative ${
                  isSwitchOn ? "bg-gray-300" : "bg-green-500"
                }`}
              >
                <div
                  className={`slider-knob w-7 h-[20px] bg-white rounded-full shadow-md transform ${
                    isSwitchOn ? "translate-x-7" : ""
                  } transition-transform duration-300 ease-in-out`}
                ></div>
              </div>
            </label>
            <p className="text-base le  font-normal tracking-[0.25px] text-[#1C1C1C]">
              Automatic
            </p>
          </div>

          <div>
            <input
              type="search"
              placeholder="search..."
              className="border border-[#DFE1E6] bg-[#FAFBFC] outline-none focus:outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[5px]">
        <div className="text-[#62C6D7] text-[24px] font-medium ">
          Vouchers Lists {filteredData ? `(${filteredData.length})` : ""}
        </div>
        <div className="bg-[#62C6D7] w-[381px] h-[1px] "></div>
      </div>

      <table className="w-full border rounded-md">
        <tbody>
          <tr className="">
            <td className={`${tableHeading} w-[20px]`}>sr No</td>
            <td className={`${tableHeading} w-[15%]`}>Voucher Name</td>
            <td className={`${tableHeading}`}>Voucher Method</td>
            <td className={`${tableHeading}`}>Voucher Type</td>
            <td className={`${tableHeading}`}>Voucher Code</td>
            <td className={`${tableHeading}`}>Date</td>
            <td className={`${tableHeading} border-0 border-t border-b`}>
              Action
            </td>
          </tr>
          {filteredData &&
            filteredData.map((element: any, index: any) => (
              <tr key={index} className="">
                <td className={`${tableData}`}>{index + 1}</td>
                <td className={`${tableData}`}>{element.voucherName}</td>
                <td className={`${tableData}`}>{element.voucherMethod}</td>
                <td className={`${tableData} text-[#21A0C3]`}>
                  {element.typeOfVoucher}
                </td>
                <td className={`${tableData}`}>{element.voucherCode}</td>
                <td className={`${tableData}`}>
                  {element.updatedAt.slice(0, 10)}
                </td>
                <td
                  onClick={() => {
                    toggleMenu(element, index);
                  }}
                  className="text-sm cursor-pointer ps-5  font-medium text-[#5C5C77]"
                >
                  <div className="relative flex gap-1  items-center">
                    Edit
                    <img
                      src={edit}
                      alt=""
                      className="w-[14px] cursor-pointer h-[14px] "
                    />
                    <div className="absolute top-0 right-[-1rem]">
                      {menuOpen.includes(index) && (
                        <div className="bg-white border border-gray-300 shadow-md z-20 rounded-md ">
                          <ul>
                            <li
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                              onClick={openEditPopup}
                            >
                              Edit
                            </li>
                            <li
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                              // onClick={opendeletePopup}
                            >
                              Delete
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isEditPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <Editpopup data={selectedVoucherData} onClose={closeEditPopup} />
        </div>
      )}
    </div>
  );
};
