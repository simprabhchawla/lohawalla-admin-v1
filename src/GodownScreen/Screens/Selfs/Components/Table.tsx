import { Link } from "react-router-dom";
import view from "../../../../assets_/Godown Ions images/arrow.svg"
import { useDispatch } from "react-redux";
import { getAisleAsync } from "@src/Redux/Slice/GodownManager/AisleSlice";

const Table = (props: any) => {
    const { tableData } = props;

    if (!Array.isArray(tableData)) {
        console.error('tableData is not an array:', tableData);
        return null;
    }
    const commonTableCell = `text-[#6B778C] border flex-wrap text-center`
    const commonTableRow = `py-[10px] border flex-wrap text-center`

    const dispatch  = useDispatch()
    const handleViewAisles = (shelfCode: string) => {
        console.log("hihieie",shelfCode)
        dispatch(getAisleAsync(shelfCode));
    };
 
    return (
        <table className="w-full">
            <tbody className="border">
                <tr className="bg-gray-200">
                    <td className={`${commonTableCell}`}>Sr No.</td>
                    <td className={`${commonTableCell}`}>Shelf Name</td>
                    <td className={`${commonTableCell}`}>Shelf Code</td>
                    <td className={`${commonTableCell}`}>Location</td>
                    <td className={`${commonTableCell}`}>Created At</td>
                    <td className={`${commonTableCell}`}>View Aisles</td>

                </tr>
                {tableData && tableData.map((row: any, index: any) => (
                    <tr key={index} className="hover:bg-[#FAFAFA] cursor-pointer">
                        <td className={`${commonTableRow}`}>{index + 1}</td>
                        <td className={`${commonTableRow} flex gap-[5px]`}> {row.shelfName} </td>
                        <td className={`${commonTableRow} text-[#21A0C3] font-bold underline cursor-pointer`}>{row.shelfCode}</td>
                        <td className={`${commonTableRow}`}>{row.location}</td>
                        <td className={`${commonTableRow}`}>{row.createdAt.slice(0, 10)}</td>
                      
                        <td className={`${commonTableRow}`}>
                            <Link to="/aisles" className="flex items-center justify-center w-full" onClick={() => handleViewAisles(row.shelfCode)}>
                                <img src={view} alt="" />
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
