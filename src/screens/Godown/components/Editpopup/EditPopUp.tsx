import check from "../../../../assets_/icons/save.svg"
// import search from "../../../../assets/icons/Search.svg"
const EditPopUp = ({ handleFormSubmit, closed, selectedRow, setSelectedRow }: any) => {

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="fixed inset-0 flex items-center p-[50px] z-50 justify-center bg-black bg-opacity-50">
                <div className="modal-bg absolute inset-0 bg-gray-800 opacity-50"></div>
                <div className="relative w-[656px] bg-white p-[40px] rounded-lg shadow-lg">
                    <div className="scrollable-content max-h-[550px] overflow-y-scroll">
                        <div className='flex flex-col gap-[44px]'>
                            <div className='flex flex-col gap-[28px]'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-[32px] bold'>Edit Details</h1>
                                    <button type='submit' className='flex items-center px-[32px] py-[12px] bg-[#005D7F]  rounded-[8px] gap-[8px]'>
                                    <img src={check} alt="" className='w-[20px] h-[20px]' />
                                        <span className='text-white bold text-[14px]'>Save</span>
                                    </button>
                                </div>

                               
                            </div>

                            <div className='flex py-[16px] px-[20px] gap-[24px] flex-col border rounded-[24px]'>

                                <div className='flex gap-[5px] items-center'>
                                    <span>
                                        Add Details
                                    </span>
                                    <div className='w-[430px] h-[1px] bg-[#dcdcdc]'></div>
                                </div>

                                <div className='border  rounded-[8px] px-[16px] py-[8px] flex flex-col'>
                                    <span className="text-[12px]">Godown</span>
                                    <input
                                        className="border-none focus:outline-none outline-none"
                                        type="text"
                                        value={selectedRow.godownName}
                                        onChange={(e) => setSelectedRow({ ...selectedRow, godownName: e.target.value })}
                                    />
                                </div>



                                <div className='border rounded-[8px] px-[16px] py-[8px] flex flex-col'>
                                    <span className="text-[12px] ">CODE</span>
                                    <input
                                        className="border-none focus:outline-none outline-none"
                                        type="text"
                                        value={selectedRow.godownCode}
                                        onChange={(e) => setSelectedRow({ ...selectedRow, godownCode: e.target.value })}
                                    />
                                </div>
                                <div className='border rounded-[8px] px-[16px] py-[8px] flex flex-col'>
                                    <span className="text-[12px] ">Number of Selfs</span>
                                    <input
                                        className="border-none focus:outline-none outline-none"
                                        type="text"
                                        value={selectedRow.numberOfShelfs}
                                        onChange={(e) => setSelectedRow({ ...selectedRow, numberOfShelfs: e.target.value })}
                                    />
                                </div>

                                <div className='border items-start gap-[10px] rounded-[8px] px-[16px] py-[8px] flex flex-col'>
                                    <span className="text-[12px]">Address</span>
                                    <select onChange={(e) => setSelectedRow({ ...selectedRow, address: e.target.value })}
                                        value={selectedRow.address} className='w-full border-none outline-none'>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                    </select>
                                </div>


                            </div>
                        </div>
                        {closed()}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default EditPopUp;
