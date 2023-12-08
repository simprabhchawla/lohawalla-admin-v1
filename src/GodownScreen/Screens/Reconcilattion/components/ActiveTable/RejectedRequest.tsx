import React from 'react'

export const RejectedRequest = ({ data }: any) => {
  console.log("total", data)
  const commonTableCell = `text-[#6B778C] border flex-wrap text-center`
  const commonTableRow = `py-[10px] border flex-wrap text-center`

  const rejectedData = data.filter((element: any) => element.status === 'Rejected');

  return (
    <table className="w-full">
      {rejectedData.length > 0 ? (

        <tbody className="border">
          <tr className="bg-gray-200">
            <td className={`${commonTableCell}`}>Sr No.</td>
            <td className={`${commonTableCell}`}>Shelf Code</td>
            <td className={`${commonTableCell}`}>Aisles Number</td>
            <td className={`${commonTableCell}`}>Status</td>
            <td className={`${commonTableCell}`}>Last Updated</td>

          </tr>
          {rejectedData.map((element: any, index: any) => (
            <tr key={index} className="hover:bg-[#FAFAFA]">
              <td className={`${commonTableRow}`}>{index + 1}</td>
              <td className={`${commonTableRow}`}>{element?.shelf?.shelfCode}</td>
              <td className={`${commonTableRow}`}>{element?.aisle?.aisleCode}</td>
              <td className={`${commonTableRow} m-[20px] `}>
                <span className={`p-[10px] ${element?.status === "Pending" ? "bg-yellow-300 rounded-[20px]" :
                  element?.status === "Rejected" ? "bg-red-500 rounded-[20px]" :
                    element?.status === "Approved" ? "bg-green-500 rounded-[20px]" : ""
                  }`}>
                  {element?.status}
                </span>
              </td>
              <td className={`${commonTableRow}`}>{element?.updatedAt.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      ) : (
        <p>No data with status "Pending" available</p>
      )}
    </table>

  )
}
