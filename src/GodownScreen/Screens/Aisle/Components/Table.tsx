
const Table = (props: any) => {
    const { aisleData } = props;
    console.log(aisleData)

    if (!Array.isArray(aisleData)) {
        console.error('aisleData is not an array:', aisleData);
        return null;
    }
    const commonTableCell = `text-[#6B778C] border flex-wrap text-center`
    const commonTableRow = `py-[10px] border flex-wrap text-center`
    return (
        <table className="w-full">
            <tbody className="border">
                <tr className="bg-gray-200">
                    <td className={`${commonTableCell}`}>Sr No.</td>
                    <td className={`${commonTableCell}`}>Aisle Name</td>
                    <td className={`${commonTableCell}`}>Aisle Code</td>
                    <td className={`${commonTableCell}`}>Created At</td>
                    <td className={`${commonTableCell}`}>Aisle Photo</td>

                </tr>
                {aisleData && aisleData.map((row: any, index: any) => (
                    <tr key={index} className="hover:bg-[#FAFAFA] cursor-pointer">
                        <td className={`${commonTableRow}`}>{index + 1}</td>
                        <td className={`${commonTableRow} flex gap-[5px]`}>
                            <img src={row.img} alt="" />
                            {row.aisleName}
                        </td>
                        <td className={`${commonTableRow} text-[#21A0C3] font-bold underline cursor-pointer`}>{row.aisleCode}</td>
                        <td className={`${commonTableRow}`}>{row.createdAt.slice(0,10)}</td>
                        <td className={`${commonTableRow}`}>
                            <img src={row.imageLogs} alt="" />
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
