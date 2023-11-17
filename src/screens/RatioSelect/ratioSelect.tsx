import Navbar from '@src/Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import { Table } from './Components/Table'

export const RatioSelect = () => {



    return (
        <>
            <div className='flex   bg-theme-white'>
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
                                <div className='border-2 flex px-[20px] cursor-pointer py-[16px] text-[#005D7F] font-bold gap-[5px] rounded-[5px]'>
                                    Edit
                                </div>
                                <div className='border-2 flex px-[20px] cursor-pointer text-white py-[16px] bg-[#005D7F] font-bold gap-[5px] rounded-[5px]'>
                                    Create
                                </div>

                            </div>
                        </div>
                        <div className='flex items-center pt-[20px] gap-[5px]'>
                            <div className='text-[#62C6D7] text-[24px] font-medium '>
                                Ratio Lists
                            </div>
                            <div className='bg-[#62C6D7] w-[381px] h-[1px] '>

                            </div>

                        </div>

                        <Table/>
                    </div>

                </div>
            </div>
        </>)
}
