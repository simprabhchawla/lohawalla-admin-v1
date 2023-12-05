
export const Table = ({ratioData}:any) => {
    console.log("HII",ratioData)
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
                    {ratioData && ratioData.map((element:any, index:any) => (
                        <tr key={index} className='border-b-4'>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{index + 1}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element.item1.name}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element.value1}</td>
                            <td className="px-4 text-[#21A0C3]  underline  text-xs font-bold h-[56px] whitespace-nowrap">{element.unit1}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element.item2.name}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element.value2}</td>
                            <td className="px-4  text-xs font-medium text-[12px] h-[56px] whitespace-nowrap">{element.unit2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}
