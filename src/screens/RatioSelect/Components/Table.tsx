
export const Table = () => {
  return (
    <div>
           <table className='w-full'>
                <tbody>
                    <tr className='border-b-4'>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">SR NO</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Raw Material 1</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Number</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Unit</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Raw Material 2</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Number</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Unit</td>
                    </tr>
                    {/* {filteredData && filteredData.map((element:any, index:any) => (
                        <tr key={index} className='border-b-4'>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{index + 1}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element.voucherName}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element.voucherMethod}</td>
                            <td className="px-4 text-[#21A0C3]  underline  text-xs font-bold h-[56px] whitespace-nowrap">{element.typeOfVoucher}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element.voucherCode}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element.updatedAt.slice(0, 10)}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
    </div>
  )
}
