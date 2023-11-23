import { Link } from "react-router-dom";

const Table = (props: any) => {
    const { tableData } = props;

    if (!Array.isArray(tableData)) {
        console.error('tableData is not an array:', tableData);
        return null;
    }
    const commonTableCell = `text-[#6B778C] border flex-wrap text-center`
    const commonTableRow = `py-[10px] border flex-wrap text-center`
    return (
        <table className="w-full">
            <tbody className="border">
                <tr className="bg-gray-200">
                    <td className={`${commonTableCell}`}>Sr No.</td>
                    <td className={`${commonTableCell}`}>Shelf Name</td>
                    <td className={`${commonTableCell}`}>Shelf Code</td>
                    <td className={`${commonTableCell}`}>Number of Aisle</td>
                    <td className={`${commonTableCell}`}>Created At</td>
                    <td className={`${commonTableCell}`}>Shelf Photo</td>
                    <td className={`${commonTableCell}`}>View Aisles</td>

                </tr>
                {tableData && tableData.map((row: any, index: any) => (
                    <tr key={index} className="hover:bg-[#FAFAFA] cursor-pointer">
                        <td className={`${commonTableRow}`}>{index + 1}</td>
                        <td className={`${commonTableRow} flex gap-[5px]`}>
                            {row.customerName}
                        </td>
                        <td className={`${commonTableRow} text-[#21A0C3] font-bold underline cursor-pointer`}>{row.voucherNumber}</td>
                        <td className={`${commonTableRow}`}>{row.orderNumber}</td>
                        <td className={`${commonTableRow}`}>{row.date}</td>
                        <td className={`${commonTableRow} `}>
                            <div className="flex items-center justify-center w-full" >
                                <img src={row.img} alt="" />
                            </div>
                        </td>
                        
                  
                        <td className={`${commonTableRow}`}>
                            <Link to="/aisles" className="flex items-center justify-center w-full" >

                                <img src={row.view} alt="" />
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
