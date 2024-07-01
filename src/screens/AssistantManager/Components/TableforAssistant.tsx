import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";


export const TableforAssistant = ({ AssistantGodowndata ,EditedData,editPopupVisible,    setEditPopupVisible}: any) => {
    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [editedName, setEditedName] = useState("");
    const [editedEmail, setEditedEmail] = useState("");

    const tableHeading = `text-[#6B778C] px-4 max-w-[500px] border-e flex-wrap text-lg text-start py-6`;
    const tableData = `py-[10px] px-4 flex-wrap  border-e  font-semibold text-[#5C5C77] capitalize `;

    const openEditPopup = (rowData: any) => {
        setSelectedRow(rowData);
        setEditedName(rowData.assistantName);
        setEditedEmail(rowData.assistantEamil);
        setEditPopupVisible(true);
    };

    const closeEditPopup = () => {
        setEditPopupVisible(false);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedEmail(event.target.value);
    };

    const handleSaveChanges = () => {
        const edited = {
            name: editedName,
            email: editedEmail,
            id:selectedRow?.assistantId
        }
        EditedData(edited)
    }; 
    return (
        <div>
            <table className="min-w-full border border-gray-300">
                <tbody className="border">
                    <tr className="sticky top-0 z-10 bg-[#FAFAFA] border">
                        <th className={`${tableHeading}`}>Sr No</th>
                        <th className={`${tableHeading}`}>Name</th>
                        <th className={`${tableHeading}`}>Phone No.</th>
                        <th className={`${tableHeading}`}>Manager Code</th>
                        <th className={`${tableHeading}`}>Email</th>
                        <th className={`${tableHeading}`}>Role</th>
                        <th className={`${tableHeading}`}>Godown Name</th>
                        <th className={`${tableHeading}`}></th>
                    </tr>
                    {AssistantGodowndata && AssistantGodowndata.length > 0 && AssistantGodowndata.map((element: any, index: any): any => {
                        return <tr
                            className=""
                            key={index}
                        >
                            <td className={`${tableData}`}>{index + 1}</td>
                            <td className={`${tableData}`}>{element.assistantName}</td>
                            <td className={`${tableData}`}>{element.assistantPhoneNumber}</td>
                            <td className={`${tableData}`}>{element.managerCode}</td>
                            <td className={`${tableData}`}>{element.assistantEamil}</td>
                            <td className={`${tableData}`}>{element.assistantRole}</td>
                            <td className={`${tableData}`}>{element.godownName}</td>
                            <td className={`${tableData}`}>
                                <div className="cursor-pointer text-[20px]" onClick={() => openEditPopup(element)}>
                                    <FaRegEdit />
                                </div>
                            </td>
                        </tr>
                    })}


                    {editPopupVisible && selectedRow && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[100]">
                            <div className="bg-white p-8 rounded-lg w-[600px]">
                                <h2 className="text-lg font-semibold mb-4">Edit Assistant</h2>
                                <input
                                    type="text"
                                    value={editedName}
                                    onChange={handleNameChange}
                                    className="border rounded-md p-2 mb-2 block w-full"
                                />
                                <input
                                    type="email"
                                    value={editedEmail}
                                    onChange={handleEmailChange}
                                    className="border rounded-md p-2 mb-4 block w-full"
                                />
                                <button onClick={handleSaveChanges} className="bg-[#005D7F] text-white px-4 py-2 rounded-md">Save</button>
                                <button onClick={closeEditPopup} className="ml-2 px-4 py-2 rounded-md border">Cancel</button>
                            </div>
                        </div>
                    )}

                </tbody>
            </table>
        </div>
    )
}
