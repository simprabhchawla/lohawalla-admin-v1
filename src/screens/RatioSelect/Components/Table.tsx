import React from "react"
import edit from "../../../assets_/icons/edit.svg"
import deletes from "../../../assets_/icons/Delete.svg"
import { useDispatch, useSelector } from "react-redux";
import { getUnitAsync } from "@src/Redux/Slice/Admin/ratioSlice";

export const Table = ({ ratioData }: any) => {
    const [editPopupOpen, setEditPopupOpen] = React.useState<number[]>([]);
    const [deletePopupOpen, setdeletePopupOpen] = React.useState(false);

    const handleEditClick = (element: any, index: number) => {
        if (editPopupOpen.includes(index)) {
            setEditPopupOpen([]);
        } else {
            setEditPopupOpen([index]);
        }
    }

    const handleDeleteClick = (element: any) => {
        setEditPopupOpen([]);
        setdeletePopupOpen(false)
    };
    const dispatch = useDispatch();
    const allUnits = useSelector((state: any) => state.ratio.units)
    React.useEffect(() => {
        dispatch(getUnitAsync());
    }, [])
    const [number1, setNumber1] = React.useState([]);

    const handleInputChange = (e: any, index: number) => {
        
        setNumber1(e.target.value); 
    };
    
    console.log("unit", allUnits && allUnits)
    const tableHeading = `px-4 text-[#6B778C] text-[13px] font-bold h-[56px] whitespace-nowrap capitalize border border-b-0`
    const tableData = `px-4 text-xs font-medium text-[12px] h-[56px] whitespace-nowrap capitalize border`
    return (
        <div>
            <table className='w-full'>
                <tbody>
                    <tr className=''>
                        <td className={`${tableHeading} w-[8px]`}>Sr No</td>
                        <td className={`${tableHeading}`}>Raw Material 1</td>
                        <td className={`${tableHeading}`}>Number</td>
                        <td className={`${tableHeading}`}>Unit</td>
                        <td className={`${tableHeading}`}>Raw Material 2</td>
                        <td className={`${tableHeading}`}>Number</td>
                        <td className={`${tableHeading}`}>Unit</td>
                        <td className={`${tableHeading} border-t border-b border-0`}></td>
                        <td className={`${tableHeading} border-s-0 border-b`}></td>
                    </tr>
                    {ratioData && ratioData.map((element: any, index: any) => (
                        <tr key={index} className=''>
                            <td className={`${tableData}`}>{index + 1}</td>
                            <td className={`${tableData}`}>{element.item1.name}</td>
                            <td className={`${tableData}`}>
                                {editPopupOpen && editPopupOpen.includes(index) ? (
                                    <input
                                        type="number"
                                        className="p-1 rounded-sm border-blue-200"
                                        value={number1|| element.value1}
                                        onChange={(e) => handleInputChange(e, index)}
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

                            <td className={`${tableData}`}>{editPopupOpen && editPopupOpen.includes(index) ?
                                <select name="unit" className=" px-5" id="">
                                    {allUnits && allUnits.map((element: any) => { return <option className="px-3 w-[6rem] capitalize" value={element.name}>{element.name}</option> }
                                    )}
                                </select>
                                : element.unit1}</td>
                            <td className={`${tableData}`}>{element.item2.name}</td>
                            <td className={`${tableData}`}>{element.value2}</td>
                            <td className={`${tableData}`}>{element.unit2}</td>
                            <td className={`${tableData} border-b border-t border-0 w-[4rem]`}>
                                <img
                                    src={edit}
                                    alt=""
                                    className='w-[20px] cursor-pointer h-[20px]'
                                    onClick={() => handleEditClick(element, index)}
                                />
                            </td>
                            <td className={`${tableData} border-e border-b border-t border-0 w-[4rem]`}>
                                <img
                                    src={deletes}
                                    alt=""
                                    className='w-[20px] cursor-pointer h-[20px]'
                                    onClick={() => handleDeleteClick(element._id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
