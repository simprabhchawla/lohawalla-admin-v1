import { useState } from 'react';
import { SalesOrderTab } from './Button Components/SalesOrderTab';
import { PartyDetailsTab } from './Button Components/PartyDetailsTab';
import { SalesOrderDetailsTab } from './Button Components/SalesOrderDetailsTab';
import { Link } from 'react-router-dom';
import right from "../../../../assets_/Godown Ions images//arrow-right.svg";
import edit from "../../../../assets_/Godown Ions images//edit.svg";

export const SalesOrderDetail = () => {
    const [activeTab, setActiveTab] = useState('Sales Order');
    const [salesOrderDisabled, setSalesOrderDisabled] = useState(true);
    const [partyDetailsDisabled, setPartyDetailsDisabled] = useState(true);
    const [salesOrderDetailsDisabled, setSalesOrderDetailsDisabled] = useState(true);
    
    const toggleTab = (tab: any) => {
        setActiveTab(tab);
    };

    const handleEditClick = () => {
        switch (activeTab) {
            case 'Sales Order':
                setSalesOrderDisabled(!salesOrderDisabled);
                break;
            case 'Party Details':
                setPartyDetailsDisabled(!partyDetailsDisabled);
                break;
            case 'Sales Order Details Page':
                setSalesOrderDetailsDisabled(!salesOrderDetailsDisabled);
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex gap-[40px] px-[30px] py-[20px] flex-col">
            <div className="flex text-[#005D7F] text-[24px] font-medium">Sales Order</div>
            <div className="flex gap-[31px] flex-col">
                <div className="flex justify-between items-center">
                    <div className="flex py-[8px] items-start rounded-[8px] space-x-4">
                        <button
                            className={`p-2 ${activeTab === 'Sales Order'
                                ? 'text-[#283093] underline font-bold text-[20px]'
                                : 'font-bold text-[#6B778C] text-[16px]'
                                }`}
                            onClick={() => toggleTab('Sales Order')}
                        >
                            Sales Order
                        </button>
                        <button
                            className={`p-2 ${activeTab === 'Party Details'
                                ? 'text-[#283093] underline font-bold text-[20px]'
                                : 'font-bold text-[#6B778C] text-[16px]'
                                }`}
                            onClick={() => toggleTab('Party Details')}
                        >
                            Party Details
                        </button>
                        <button
                            className={`p-2 ${activeTab === 'Sales Order Details Page'
                                ? 'text-[#283093] underline font-bold text-[20px]'
                                : 'font-bold text-[#6B778C] text-[16px]'
                                }`}
                            onClick={() => toggleTab('Sales Order Details Page')}
                        >
                            Sales Order Details Page
                        </button>
                    </div>

                    <div className="flex gap-[5px]">
                        <button
                            className="border-2 border-[#005D7F] flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg "
                            onClick={handleEditClick}
                        >
                            <img src={edit} alt="" />
                            <span className="text-[#005D7F] font-bold">Edit</span>
                        </button>
                        <Link
                            to=""
                            className="bg-[#005D7F] flex gap-[10px] items-center px-[16px] py-[12px] rounded-lg "
                        >
                            <span className="text-white">Next</span>
                            <img src={right} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="">
                    {activeTab === 'Sales Order' && (
                        <div className={`p-[16px] ${salesOrderDisabled ? 'disabled' : ''}`}>
                            <SalesOrderTab disabled={salesOrderDisabled} />
                        </div>
                    )}
                    {activeTab === 'Party Details' && (
                        <div className={`p-[16px] ${partyDetailsDisabled ? 'disabled' : ''}`}>
                            <PartyDetailsTab disabled={partyDetailsDisabled} />
                        </div>
                    )}

                    {activeTab === 'Sales Order Details Page' && (
                        <div className={`p-[16px] ${salesOrderDetailsDisabled ? 'disabled' : ''}`}>
                            <SalesOrderDetailsTab disabled={salesOrderDetailsDisabled} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
