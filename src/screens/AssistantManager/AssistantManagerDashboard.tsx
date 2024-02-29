import useHeight from '@src/modules/hooks/useHeight';
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import addIcon from '@src/assets_/icons/add.svg';
import { TableforAssistant } from './Components/TableforAssistant';
import { AssistantManagerPopupForm } from './Components/AddAssistantManagerPopup';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssistantManagerDataAsync, getAssistantManagerAsync, updateAssistantManagerDataAsync } from '@src/Redux/Slice/Admin/AssistantManagerSlice';
import toast from 'react-hot-toast';
import { getManagerAsync } from '@src/Redux/Slice/Admin/ManagerSlice';

export const AssistantManagerDashboard = () => {
    const [AddAssistantManager, setAddAssistantManaget] = useState(false)
    const [editPopupVisible, setEditPopupVisible] = useState(false);


    const heightHandle = useHeight();
    const dispatch = useDispatch();

    const close = () => {
        setAddAssistantManaget(false)
        setEditPopupVisible(false)
    }
    const addManagerClicked = () => {
        setAddAssistantManaget(true)
    }

    const AssistantGodowndata = useSelector((state: any) => state.Assistantmanager?.data);
    const managerData = useSelector((state: any) => state.manager?.data?.data);

    useEffect(() => {
        dispatch(getAssistantManagerAsync());
        dispatch(getManagerAsync());

    }, [dispatch]);

    const AddManager = (managerAdd: any) => {
        dispatch(addAssistantManagerDataAsync(managerAdd)).then((res: any) => {
            if (res.payload.status) {
                toast.success(res.payload.message);
                dispatch(getAssistantManagerAsync());
                close();
            } else {
                toast.error(res.payload.message);
            }

        })
    }
    const EditedData = (editesData: any) => {
        dispatch(updateAssistantManagerDataAsync(editesData)).then((res: any) => {
            if (res.payload) {
                toast.success(res.payload.message);
                dispatch(getAssistantManagerAsync());
                close();
            } else {
                toast.error(res.error.message);
            }

        });
    }


    return (
        <div className="flex w-full " style={{ height: "100vh" }}>
            <div>
                <Sidebar />
            </div>
            <div className="flex grow flex-col overflow-auto bg-white">
                <div ref={heightHandle.ref}>
                    <Navbar Pagename="Assistant Manager" />
                </div>
                <div
                    className="py-8 px-8"
                    style={{
                        height: `calc( 100vh - ${heightHandle.height}px )`,
                        overflow: "auto",
                    }}
                >
                    <div className='flex flex-col gap-10'>

                        <div className="flex justify-between gap-[10px] items-center">
                            <p className="text-[28px] text-[#005D7F]  font-bold ">Assistant Manager </p>

                            {/* <div className='flex gap-2'>
                                <select
                                    style={{ outline: "none", boxShadow: "none" }}
                                    className="cursor-pointer flex gap-2 py-[16px]  px-[20px] border-2  border-[#005D7F] text-[#005D7F]  justify-center text-center items-center rounded-[8px] shadow-lg text-[18px] bold " >

                                    <option value="">Choose Manager</option>
                                </select>

                            </div> */}
                            <div
                                onClick={addManagerClicked}
                                className="cursor-pointer flex gap-2 py-[16px]  px-[20px] bg-[#005D7F] text-white  justify-center text-center items-center rounded-[8px] shadow-lg text-[18px] bold " >
                                <img src={addIcon} alt="" />
                                Add Assistant Manager
                            </div>
                        </div>

                        {AddAssistantManager && (
                            <AssistantManagerPopupForm close={close} AddManager={AddManager} managerData={managerData} />
                        )}

                        <div className='gap-5 flex flex-col'>
                            <div className='text-[#62C6D7] font-semibold  text-[24px]'>
                                List of Assistant Managers ({AssistantGodowndata?.total})
                            </div>
                            <div>
                                <TableforAssistant AssistantGodowndata={AssistantGodowndata?.data} EditedData={EditedData}
                                editPopupVisible={editPopupVisible} setEditPopupVisible={setEditPopupVisible}
                                
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
