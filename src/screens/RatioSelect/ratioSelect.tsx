import Navbar from '@src/Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import { Table } from './Components/Table'
import add from "../../assets_/icons/add.svg"
import edit from "../../assets_/icons/edit.svg"
import { useEffect, useState } from 'react'
import AddRatioCreationForm from './Components/addRatioSelect'
import { useDispatch, useSelector } from 'react-redux'
import { addRatioDataAsync, getItemAsync, getRatioAsync, getUnitAsync } from '@src/Redux/Slice/Admin/ratioSlice'
export const RatioSelect = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };
    const handleFormSubmit = (formData: any) => {
        

        dispatch(addRatioDataAsync(formData)).then(() => {
            dispatch(getRatioAsync());
        });
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUnitAsync())
        dispatch(getItemAsync())
        dispatch(getRatioAsync());

    }, [])
    const Unitdata = useSelector((state: any) => state.ratio.units)
    const ItemsData = useSelector((state: any) => state.ratio.items)
    const RatioData = useSelector((state: any) => state.ratio.ratio)
    

    return (
        <>
            <div className='flex '>
                <div>
                    <Sidebar />
                </div>
                <div className='flex grow content flex-col'>

                    <div>
                        <Navbar Pagename='Ratio' />
                    </div>
                    <div className='px-[20px]'>
                        <div className='flex  pt-[32px] justify-between '>
                            <div className='p-[10px] text-[24px] text-[#005D7F] font-bold'>
                                Ratio Creation
                            </div>
                            <div className='flex gap-[10px]'>

                                <div className='border-2 flex px-[30px] cursor-pointer text-white  items-center bg-[#005D7F] font-bold gap-[5px] rounded-[8px]' onClick={() => {
                                    openPopup()
                                }}>
                                    <img src={add} alt="" />
                                    Create
                                </div>
                                {isPopupOpen && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50">
                                        <div className="modal-bg absolute inset-0 "></div>
                                        <div className="modal w-[700px] relative bg-white p-6 rounded-lg shadow-lg">
                                            <AddRatioCreationForm onClose={closePopup} onSubmit={handleFormSubmit} UnitData={Unitdata} ItemData={ItemsData} />
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className='flex items-center gap-3 pt-[20px] pb-2'>
                            <div className='text-[#62C6D7] text-[24px] font-medium '>
                                Ratio Lists
                            </div>
                            <div className='bg-[#62C6D7] w-[381px] h-[1px] '>

                            </div>

                        </div>

                        <div className='overflow-auto h-[460px]'>

                            <Table ratioData={RatioData} />
                        </div>
                    </div>

                </div>
            </div>
        </>)
}
