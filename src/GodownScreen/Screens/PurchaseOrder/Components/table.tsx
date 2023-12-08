import { useNavigate } from "react-router-dom";

const Table = (props: any) => {
    const { tableData } = props;
    console.log("hello",tableData)

    if (!Array.isArray(tableData)) {
        console.error('tableData is not an array:', tableData);
        return null;
    }
    const commonTableCell = `text-[#6B778C] border flex-wrap text-center`
    const commonTableRow = `py-[10px] border flex-wrap text-center capitalize`
    const navigate=useNavigate()

    return (
        <table className="w-full">
            <tbody className="border">
                <tr className="bg-gray-200">
                    <td className={`${commonTableCell}`}>Sr No.</td>
                    <td className={`${commonTableCell}`}>Customer Name</td>
                    <td className={`${commonTableCell}`}>Date</td>
                    <td className={`${commonTableCell}`}>Voucher Code</td>
                    <td className={`${commonTableCell}`}>Order Number</td>
                    <td className={`${commonTableCell}`}>Total Amount</td>

                </tr>
                {tableData && tableData.map((row: any, index: any) => (
                    <tr key={index} className="hover:bg-[#FAFAFA] cursor-pointer">
                        <td className={`${commonTableRow}`}>{index + 1}</td>
                        <td className={`${commonTableRow}`}>
                            {row.customer.customerName}
                        </td>
                        <td className={`${commonTableRow}`}>{row.createdAt.slice(0,10)}</td>
                        <td onClick={()=>navigate(`/PurchaseOrderDetail/${row._id}`)} className={`${commonTableRow} text-[#21A0C3] font-bold hover:underline cursor-pointer`}>{row.voucherCode}</td>
                        <td className={`${commonTableRow}`}>{row.orderNumber}</td>
                        <td className={`${commonTableRow}`}>₹{row.total}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
