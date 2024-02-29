import React, { useState } from "react";
import { getGroupsAsync } from "@src/Redux/Slice/Admin/getGroupSlice";
import { useDispatch, useSelector } from "react-redux";
import { getVouchersAsync, updateCustomer } from "@src/Redux/Slice/Admin/customerSlice";
import toast from "react-hot-toast";
import close from "@src/assets_/icons/x-close.svg";

interface VoucherData {
  voucherName: string;
  voucherMethod: string;
  typeOfVoucher: string;
  voucherCode: string;
  updatedAt: string;
  group: { _id: string, name: string }[];
}

interface EditPopupProps {
  onClose: () => void;
  data: VoucherData | null;
}

const Editpopup: React.FC<EditPopupProps> = ({ onClose, data }: any) => {
  const groupsData = useSelector((state: any) => state?.groups?.data);
  const dispatch = useDispatch();
  const [selectedGroups, setSelectedGroups] = useState<{ _id: string, name: string }[]>([]);
  
  const [removedGroups, setRemovedGroups] = useState<{ _id: string, name: string }[]>([]);
  const [removedData, setRemovedData] = useState<any>(data)

  React.useEffect(() => {
    dispatch(getGroupsAsync());
  }, [dispatch]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, group: { _id: string, name: string }) => {
    if (event.target.checked) {
      setSelectedGroups(prevSelectedGroups => [...prevSelectedGroups, group]);
    } else {
      setSelectedGroups(prevSelectedGroups => prevSelectedGroups?.filter(g => g._id !== group._id));
    }
  }

  const handleRemoveGroups = () => {
    const updatedGroups = removedData?.group?.filter((g: any) => !selectedGroups?.some(selectedGroup => selectedGroup._id === g._id));
    setRemovedGroups(prevRemovedGroups => [...prevRemovedGroups, ...selectedGroups]);
    const updatedData = {
      ...data,
      group: updatedGroups
    };
    setRemovedData(updatedData)
    setSelectedGroups([]); 
  };

  const logSelectedGroups = () => {
    const groups = {
      group: [
        ...removedData?.group?.map((group: any) => group?._id),
        ...selectedGroups?.map((selcted:any)=>selcted?.id),
      ],
      id: data?._id
    }
    dispatch(updateCustomer(groups)).then((res: any) => {
      if (res.payload) {
        toast.success(res.payload.message)
        dispatch(getGroupsAsync());
        dispatch(getVouchersAsync());
        onClose()
      } else {
        toast.error(res.error.message)
      }
    });
  };


  return (
    <section className="flex h-[90vh] max-w-[600px]  flex-col w-[50%] items-start gap-[44px] bg-white p-4 rounded-md overflow-auto">
      <div className="flex top-0 sticky bg-white w-full flex-row justify-between border-b p-4 py-8">
        <h1 className="text-2xl font-semibold">Edit Voucher</h1>
        <button
          className="bg-[#005D7F] cursor-pointer text-white p-3 rounded-md px-[2rem]"
          onClick={logSelectedGroups}
        >
          Save
        </button>
      </div>
      <div className="px-[40px] rounded-md border w-full py-2">
        <h1 className="text-2xl">Group Present</h1>
        <ul className="grid grid-cols-2 max-h-[15rem] overflow-y-auto gap-5 mt-5">
          {removedData && removedData?.group?.length>0 && removedData?.group.map((group: any, index: any) => (
            <li key={index} className="flex items-center justify-between">
              <span className="text-md text-gray-500 py-1 px-2 font-semibold capitalize">
                {group.name}
              </span>
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e, group)}
                checked={selectedGroups?.some(selectedGroup => selectedGroup?._id === group?._id)}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-end w-[100%] py-2">
        <button className=" border-2 rounded-md border-[#005D7F]  text-[#005D7F]  cursor-pointer px-[10px]  " onClick={handleRemoveGroups}>Remove Groups</button>

        </div>
      </div>

      <div className="px-[52px] rounded-md border p-4 w-full">
        <h1 className="text-2xl">Group List</h1>
        <ul className="grid grid-cols-2 gap-2 mt-5 max-h-[10rem] overflow-y-auto">
          {groupsData && groupsData.length > 0 && groupsData
            ?.filter((group: any) => !removedData?.group?.some((g: any) => g?._id === group?.id))
            ?.map((group: any, index: any) => (
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
                  className="mr-2"
                  onChange={(event) => handleCheckboxChange(event, group)}
                />
              </li>
            ))}
        </ul>
      </div>
      <div
        className="bg-white cursor-pointer absolute right-[30%] top-[1%] p-3 rounded-full shadow-md"
        onClick={onClose}
      >
        <img src={close} alt="" />
      </div>
    </section>
  );
};

export default Editpopup;
