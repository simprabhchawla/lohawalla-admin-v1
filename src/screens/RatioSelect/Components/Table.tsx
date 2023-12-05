
export const Table = ({ ratioData }: any) => {
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
                    </tr>
                    {ratioData && ratioData.map((element: any, index: any) => (
                        <tr key={index} className=''>
                            <td className={`${tableData}`}>{index + 1}</td>
                            <td className={`${tableData}`}>{element.item1.name}</td>
                            <td className={`${tableData}`}>{element.value1}</td>
                            <td className={`${tableData}`}>{element.unit1}</td>
                            <td className={`${tableData}`}>{element.item2.name}</td>
                            <td className={`${tableData}`}>{element.value2}</td>
                            <td className={`${tableData}`}>{element.unit2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
