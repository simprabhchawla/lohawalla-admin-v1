import { useState } from 'react';
import { PurchaseOrderTab } from './Button Components/PurchaseOrderTab';
import { PartyDetailsTab } from './Button Components/PartyDetailsTab';
import { PurchaseOrderDetailsTab } from './Button Components/PurchaseOrderDetailsTab';
import { Link } from 'react-router-dom';
// import right from "../../../assets/arrow-right.svg";
import right from "../../../../assets_/Godown Ions images/arrow-right.svg";
import edit from "../../../../assets_/Godown Ions images/edit.svg";

export const PurchaseOrderDetail = () => {
    const [activeTab, setActiveTab] = useState('Purchase Order');
    const [PurchaseOrderDisabled, setPurchaseOrderDisabled] = useState(true);
    const [partyDetailsDisabled, setPartyDetailsDisabled] = useState(true);
    const [PurchaseOrderDetailsDisabled, setPurchaseOrderDetailsDisabled] = useState(true);
    
    const toggleTab = (tab: any) => {
        setActiveTab(tab);
    };

    const handleEditClick = () => {
        switch (activeTab) {
            case 'Purchase Order':
                setPurchaseOrderDisabled(!PurchaseOrderDisabled);
                break;
            case 'Party Details':
                setPartyDetailsDisabled(!partyDetailsDisabled);
                break;
            case 'Purchase Order Details Page':
                setPurchaseOrderDetailsDisabled(!PurchaseOrderDetailsDisabled);
                break;
            default:
                break;
        }
    };


    return (
        <div className="flex gap-[40px] px-[30px] py-[20px] flex-col">
            <div className="flex text-[#005D7F] text-[24px] font-medium">Purchase Order</div>
            <div className="flex gap-[31px] flex-col">
                <div className="flex justify-between items-center">
                    <div className="flex py-[8px] items-start rounded-[8px] space-x-4">
                        <button
                            className={`p-2 ${activeTab === 'Purchase Order'
                                ? 'text-[#283093] underline font-bold text-[20px]'
                                : 'font-bold text-[#6B778C] text-[16px]'
                                }`}
                            onClick={() => toggleTab('Purchase Order')}
                        >
                            Purchase Order
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
                            className={`p-2 ${activeTab === 'Purchase Order Details Page'
                                ? 'text-[#283093] underline font-bold text-[20px]'
                                : 'font-bold text-[#6B778C] text-[16px]'
                                }`}
                            onClick={() => toggleTab('Purchase Order Details Page')}
                        >
                            Purchase Order Details Page
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
                    {activeTab === 'Purchase Order' && (
                        <div className={`p-[16px] ${PurchaseOrderDisabled ? 'disabled' : ''}`}>
                            <PurchaseOrderTab disabled={PurchaseOrderDisabled} />
                        </div>
                    )}
                    {activeTab === 'Party Details' && (
                        <div className={`p-[16px] ${partyDetailsDisabled ? 'disabled' : ''}`}>
                            <PartyDetailsTab disabled={partyDetailsDisabled} />
                        </div>
                    )}

                    {activeTab === 'Purchase Order Details Page' && (
                        <div className={`p-[16px] ${PurchaseOrderDetailsDisabled ? 'disabled' : ''}`}>
                            <PurchaseOrderDetailsTab disabled={PurchaseOrderDetailsDisabled} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
