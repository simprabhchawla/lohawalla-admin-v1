import React, { useEffect, useState } from 'react';
import { TotalRequests } from './components/ActiveTable/TotalRequests';
import { PendingRequest } from './components/ActiveTable/PendingRequest';
import { RejectedRequest } from './components/ActiveTable/RejectedRequest';
import { Popup } from './components/Popup/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { getRecouncilationAsync } from '@src/Redux/Slice/GodownManager/RecouncilationSlice';
import { getShelfsAsync } from '@src/Redux/Slice/GodownManager/ShelfSlice';

export const Reconcilation = () => {
    const [godownFilter, setGodownFilter] = useState('');
    const [selfsFilter, setSelfsFilter] = useState('');
    const [aislesFilter, setAislesFilter] = useState('');
    const [filteredData, setFilteredData] = useState<any>([]); 

    const [activeTab, setActiveTab] = useState('total');

    const toggleTab = (tab: any) => {
        setActiveTab(tab);
    };

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getShelfsAsync());
      }, [dispatch]);
    


      const godownOptions = ['A', 'B', 'C'];
      const selfsOptions = ['1A', '1B', '2A', '2B'];
      const aislesOptions = ['A1', 'A2', 'B1', 'B2'];
  


    const data = useSelector((state:any)=> state.recouncilation?.data?.Reconciliations)


    console.log("recounsil", data)
    useEffect(() => {
        dispatch(getRecouncilationAsync());
        setFilteredData(data);
    }, [dispatch]);


    const filterData = () => {
        let filtered = data;

        if (godownFilter) {
            filtered = filtered.filter((item: any) => item.godown === godownFilter);
        }

        if (selfsFilter) {
            filtered = filtered.filter((item: any) => item.selfs === selfsFilter);
        }

        if (aislesFilter) {
            filtered = filtered.filter((item: any) => item.aisles === aislesFilter);
        }

        setFilteredData(filtered);
    };


    const handleGodownChange = (e: any) => {
        setGodownFilter(e.target.value);
    };

    const handleSelfsChange = (e: any) => {
        setSelfsFilter(e.target.value);
    };

    const handleAislesChange = (e: any) => {
        setAislesFilter(e.target.value);
    };

    // popup

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };



    return (
        <div className="flex gap-[40px] px-[30px] py-[20px] flex-col">
            <div className="flex justify-between">
                <div className="text-[24px] text-[#005D7F] font-semibold">Reconciliation</div>
                <div
                    className="text-white cursor-pointer px-[16px] py-[10px] rounded-lg  bg-[#005D7F]"
                    onClick={openPopup} 
                >
                    Send Request
                </div>

                {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="modal-bg absolute inset-0 bg-gray-800 opacity-50"></div>
                        <div className="modal overflow-x-auto relative bg-white p-6 rounded-lg shadow-lg">
                            <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} openPopup={openPopup}
                                closePopup={closePopup} data={data}/>
                        </div>
                    </div>
                )}
            </div>

            <div className='flex gap-[20px]'>

                <select onChange={handleGodownChange} value={godownFilter} className='px-[20px] py-[12px] rounded-[30px] bg-[#fafafa] border-[#dedeede] cursor-pointer shadow-sm'>
                    <option value="">Select Godown</option>
                    {data && data.map((option:any) => (
                        <option key={option?.godown?.godownName} value={option?.godown?.godownName}>
                            {option?.godown?.godownName}
                        </option>
                    ))}
                </select>

                <select onChange={handleSelfsChange} value={selfsFilter} className='px-[20px] py-[12px] rounded-[30px] bg-[#fafafa] border-[#dedeede] cursor-pointer shadow-sm'>
                    <option value="">Select Selfs</option>
                    {data && data.map((option:any) => (
                        <option key={option?.shelf?.shelfName} value={option?.shelf?.shelfName}>
                            {option?.shelf?.shelfName}
                        </option>
                    ))}
                </select>

                <select onChange={handleAislesChange} value={aislesFilter} className='px-[20px] py-[12px] rounded-[30px] bg-[#fafafa] border-[#dedeede] cursor-pointer shadow-sm'>
                    <option value="">Select Aisles</option>
                    {data && data.map((option:any) => (
                        <option key={option?.aisle?.aisleName} value={option?.aisle?.aisleName}>
                            {option?.aisle?.aisleName}
                        </option>
                    ))}
                </select>

            </div>
            <div className='flex  gap-[16px] flex-col '>
                <div className="flex w-[600px] px-[24px] py-[8px] items-start justify-around  rounded-[8px]">
                    <button
                        className={`p-2 ${activeTab === 'total'
                            ? 'text-[#005D7F] text-[20px] underline font-medium'
                            : 'text-black'
                            }`}
                        onClick={() => toggleTab('total')}
                    >
                        Total Request
                    </button>
                    <button
                        className={`p-2 ${activeTab === 'pending'
                            ? 'text-[#005D7F] text-[20px] underline font-medium'
                            : 'text-black'
                            }`}
                        onClick={() => toggleTab('pending')}
                    >
                        Pending Request
                    </button>
                    <button
                        className={`p-2 ${activeTab === 'rejected'
                            ? 'text-[#005D7F] text-[20px] underline font-medium'
                            : 'text-black'
                            }`}
                        onClick={() => toggleTab('rejected')}
                    >
                        Rejected Request
                    </button>


                </div>

                <div>
                    {activeTab === 'total' && (
                        <div className="p-[16px]">
                            <TotalRequests data={filteredData} />

                        </div>
                    )}

                    {activeTab === 'pending' && (
                        <div className="p-[16px]"><PendingRequest data={filteredData} /></div>
                    )}

                    {activeTab === 'rejected' && (
                        <div className="p-[16px]"><RejectedRequest data={filteredData} /></div>
                    )}


                </div>
            </div>

        </div>
    );
};
