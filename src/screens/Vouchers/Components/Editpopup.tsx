import React from "react";
import { getGroupsAsync } from "@src/Redux/Slice/Admin/getGroupSlice";
import { useDispatch, useSelector } from "react-redux";

interface VoucherData {
  voucherName: string;
  voucherMethod: string;
  typeOfVoucher: string;
  voucherCode: string;
  updatedAt: string;
  group: { name: string }[];
}

interface EditPopupProps {
  onClose: () => void;
  data: VoucherData | null;
}

const Editpopup: React.FC<EditPopupProps> = ({ onClose, data }) => {
  const groupsData = useSelector((state: any) => state?.groups?.data);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getGroupsAsync());
  }, [dispatch]);
  return (
    <section className="flex h-[90vh] max-w-7xl  flex-col w-[50%] items-start gap-[44px] bg-white p-4 rounded-md">
      <div className="flex w-full flex-row justify-between border-b p-4 py-8">
        <h1 className="text-2xl font-semibold">Edit Voucher</h1>
        <button
          className="bg-[#005D7F] text-white p-3 rounded-md px-[2rem]"
          onClick={onClose}
        >
          Save
        </button>
      </div>
      <div className="px-[52px] rounded-md border w-full p-4">
        <h1 className="text-2xl">Group Present</h1>
        <ul className="grid grid-cols-2 max-h-[15rem] overflow-y-auto gap-5 mt-5">
          {data?.group.map((s, index) => (
            <li
              key={index}
              className={`text-md text-gray-500 py-1 px-2 font-semibold capitalize
              }`}
            >
              {s.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-[52px] rounded-md border p-4 w-full">
        <h1 className="text-2xl">Group List</h1>
        <ul className="grid grid-cols-2 gap-2 mt-5 max-h-[10rem] overflow-y-auto">
          {groupsData.map((group: any, index: number) => (
            <li key={index} className="flex items-center gap-5 list-decimal">
              <label
                htmlFor={`group-${index}`}
                className="text-md text-gray-500 font-semibold capitalize w-[10rem]"
              >
                {group.name}
              </label>
              <input
                type="checkbox"
                id={`group-${index}`}
                value={group.name}
                // For example: onChange={(e) => handleCheckboxChange(e, group)}
                className="mr-2"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Editpopup;
