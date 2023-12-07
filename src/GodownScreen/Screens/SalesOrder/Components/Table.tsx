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
                    <td className={`${commonTableCell}`}>Customer Name</td>
                    <td className={`${commonTableCell}`}>Date</td>
                    <td className={`${commonTableCell}`}>Voucher Number</td>
                    <td className={`${commonTableCell}`}>Order Number</td>
                    <td className={`${commonTableCell}`}>Total Amount</td>
                </tr>
                {tableData && tableData.map((row: any, index: any) => (
                    <tr key={index} className="hover:bg-[#FAFAFA] cursor-pointer">
                        <td className={`${commonTableRow}`}>{index + 1}</td>
                        <td className={`${commonTableRow} flex gap-[5px]`}>
                            <img src={row.img} alt="" />
                            {row.customer.customerName}
                        </td>
                        <td className={`${commonTableRow}`}>{row.createdAt.slice(0, 10)}</td>
                        <td className={`${commonTableRow} text-[#21A0C3] font-bold underline cursor-pointer`}>{row.voucherCode}</td>
                        <td className={`${commonTableRow}`}>{row.orderNumber}</td>
                        <td className={`${commonTableRow}`}>₹{row.total}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
