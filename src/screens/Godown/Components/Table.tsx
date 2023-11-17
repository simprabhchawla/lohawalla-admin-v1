
export const Table = () => {
  return (
    <div>
           <table className='w-full mt-[30px]'>
                <tbody>
                    <tr className='border-b-4'>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">SR NO</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Name</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Phone No.</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Employee Code</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Email</td>
                        <td className="px-4 text-[#6B778C] text-xs font-bold h-[56px] whitespace-nowrap">Role</td>
                    </tr>
                    {/* {managerData && managerData.map((element:any, index:any) => (
                        <tr key={index} className='border-b-4'>
                            <td className="px-4  text-xs font-bold h-[56px] whitespace-nowrap">{index + 1}</td>
                            <td className="px-4  text-xs font-bold h-[56px] whitespace-nowrap">{element?.user?.name}</td>
                            <td className="px-4  text-xs font-bold h-[56px] whitespace-nowrap">{element?.user?.phoneNumber}</td>
                            <td className="px-4  text-xs font-bold h-[56px] whitespace-nowrap">{element?.employeeCode}</td>
                            <td className="px-4  text-xs font-bold h-[56px] whitespace-nowrap">{element?.user?.email}</td>
                            <td className="px-4  text-xs font-bold h-[56px] whitespace-nowrap">{element?.user?.role}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
    </div>
  )
}
