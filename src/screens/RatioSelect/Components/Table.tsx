import React from "react";
import edit from "../../../assets_/icons/edit.svg";
import deletes from "../../../assets_/icons/Delete.svg";
import check from "../../../assets_/icons/TickIcon.svg";
import close from "../../../assets_/icons/x-close.svg";
import { useDispatch, useSelector } from "react-redux";
import { DeleteRatioApiAsync, getRatioAsync, getUnitAsync, updateRatioDataAsync } from "@src/Redux/Slice/Admin/ratioSlice";
import toast from "react-hot-toast";

export const Table = ({ ratioData }: any) => {
    const [editPopupOpen, setEditPopupOpen] = React.useState<number[]>([]);
    const [deletePopupOpen, setDeletePopupOpen] = React.useState(false);
    const [editedData, setEditedData] = React.useState<any>(null);
    const [editedValue2, setEditedValue2] = React.useState<any>(null);
    const [editedUnit2, setEditedUnit2] = React.useState<any>(null);

    const handleEditClick = (element: any, index: number) => {
        if (editPopupOpen.includes(index)) {
            setEditPopupOpen([]);
            setEditedData(null);
            setEditedValue2(null);
            setEditedUnit2(null);
        } else {
            setEditPopupOpen([index]);
            setEditedData({ ...element });
            setEditedValue2(element.value2);
            setEditedUnit2(element.unit2);
        }
    };

    const handleDeleteClick = (id: any) => {
        
        dispatch(DeleteRatioApiAsync(id)).then((res: any) => {

            if (res.payload.status) {
                
                toast.success(res.payload.message)
                dispatch(getRatioAsync());
                setEditPopupOpen([]);
                setDeletePopupOpen(false);
                setEditedData(null);
                setEditedValue2(null);
                setEditedUnit2(null);
            }
            else {
                toast.error(res.payload.message)

            }

        })
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
        const newValue = e.target.value;

        setEditedData((prevEditedData: any) => {
            return {
                ...prevEditedData,
                [field]: newValue,
            };
        });
    };

    const handleValue2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setEditedValue2(newValue);
    };

    const handleUnit2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setEditedUnit2(newValue);
    };

    const handleOkClick = () => {
        const RatioData = {
            ...editedData,
            value2: editedValue2 ?? editedData.value2,
            unit2: editedUnit2 ?? editedData.unit2,
        };
        
        dispatch(updateRatioDataAsync(RatioData)).then((res: any) => {
            if (res.payload.status) {
                
                toast.success(res.payload.message)
                dispatch(getRatioAsync());
                setEditPopupOpen([]);
                setEditedData(null);
                setEditedValue2(null);
                setEditedUnit2(null);
            }
            else {
                toast.error(res.payload.message)

            }

        })
    };

    const dispatch = useDispatch();
    const allUnits = useSelector((state: any) => state.ratio.units);
    React.useEffect(() => {
        dispatch(getUnitAsync());
    }, []);

    
    const tableHeading = `text-[#6B778C] border flex-wrap text-center py-[8px]`;
    const tableData = `py-[10px] border flex-wrap text-center`;

 
    return (
        <table className="min-w-full border border-gray-300">
            <tbody>
                <tr className="sticky top-0 z-10 bg-[#FAFAFA]">
                    <td className={`${tableHeading}`}>Sr No</td>
                    <td className={`${tableHeading}`}>Raw Material 1</td>
                    <td className={`${tableHeading}`}>Number</td>
                    <td className={`${tableHeading}`}>Unit</td>
                    <td className={`${tableHeading}`}>Raw Material 2</td>
                    <td className={`${tableHeading}`}>Number</td>
                    <td className={`${tableHeading}`}>Unit</td>
                    <td className={`${tableHeading}`}>Action</td>
                </tr>
                {ratioData && ratioData.length > 0 && ratioData.map((element: any, index: any) => (
                    <tr key={index} className=''>
                        <td className={`${tableData}`}>{index + 1}</td>
                        <td className={`${tableData}`}>{element.item1.name}</td>
                        <td className={`${tableData}`}>
                            {editPopupOpen && editPopupOpen.includes(index) ? (
                                <input
                                    type="number"
                                    className="p-1 rounded-sm border-blue-200"
                                    value={editedData?.value1 ?? element.value1}
                                    onChange={(e) => handleInputChange(e, 'value1')}
                                />
                            ) : (
                                <input
                                    type="number"
                                    value={element.value1}
                                    disabled
                                    className="w-[6rem] border-0"
                                />
                            )}
                        </td>

                        <td className={`${tableData}`}>
                            {editPopupOpen && editPopupOpen.includes(index) ? (
                                <select
                                    name="unit"
                                    className="px-5"
                                    value={editedData?.unit1 ?? element.unit1}
                                    onChange={(e) => handleInputChange(e, 'unit1')}
                                >
                                    {allUnits && allUnits.map((unit: any) => (
                                        <option key={unit.name} className="px-3 w-[6rem] capitalize" value={unit.name}>{unit.name}</option>
                                    ))}
                                </select>
                            ) : (
                                element.unit1
                            )}
                        </td>
                        <td className={`${tableData}`}>{element.item2.name}</td>
                        <td className={`${tableData}`}>
                            {editPopupOpen && editPopupOpen.includes(index) ? (
                                <input
                                    type="number"
                                    className="p-1 rounded-sm border-blue-200"
                                    value={editedValue2 ?? element.value2}
                                    onChange={(e) => handleValue2Change(e)}
                                />
                            ) : (
                                <input
                                    type="number"
                                    value={element.value2}
                                    disabled
                                    className="w-[6rem] border-0"
                                />
                            )}
                        </td>

                        <td className={`${tableData}`}>
                            {editPopupOpen && editPopupOpen.includes(index) ? (
                                <select
                                    name="unit"
                                    className="px-5"
                                    value={editedUnit2 ?? element.unit2}
                                    onChange={(e) => handleUnit2Change(e)}
                                >
                                    {allUnits && allUnits.map((unit: any) => (
                                        <option key={unit.name} className="px-3 w-[6rem] capitalize" value={unit.name}>{unit.name}</option>
                                    ))}
                                </select>
                            ) : (
                                element.unit2
                            )}
                        </td>

                        <td className={`flex ps-[20px] gap-[20px] h-[56px] justify-start items-center w-full `}>
                            <div>

                                {editPopupOpen && editPopupOpen.includes(index) ? (
                                    <img src={close} alt=""
                                        className='w-[20px] cursor-pointer h-[20px]'
                                        onClick={() => handleEditClick(element, index)}
                                    />
                                ) : (
                                    <img
                                        src={edit}
                                        alt=""
                                        className='w-[20px] cursor-pointer h-[20px]'
                                        onClick={() => handleEditClick(element, index)}
                                    />
                                )}

                            </div>

                            <div>
                                {editPopupOpen && editPopupOpen.includes(index) ? (

                                    <img src={check} alt=""
                                        className='w-[20px] cursor-pointer h-[20px]'
                                        onClick={handleOkClick}
                                    />


                                ) : (
                                    <img
                                        src={deletes}
                                        alt=""
                                        className='w-[20px] cursor-pointer h-[20px]'
                                        onClick={() => handleDeleteClick(element._id)}
                                    />
                                )}
                            </div>


                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}
