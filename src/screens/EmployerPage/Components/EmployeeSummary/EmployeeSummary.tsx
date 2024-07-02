import React from 'react'
import { Icon } from '@iconify/react';

const EmployeeSummary = () => {
    return (
        <div>
            <div className='flex px-4 pb-8'>
                <div>
                    <h1 className='text-zinc-700 text-md font-medium text-base'>Employee Summary</h1>
                </div>
                <div className='ml-auto'>
                    {/* <button className="bg-theme-btn-gray-2 text-white text-sm px-4 rounded-xl py-1 font-light ">
                        <Icon className='inline-block mr-3 relative bottom-0.5' icon="material-symbols:add" width="30" />  Add Employee
                    </button> */}
                </div>
            </div>

            <div className='flex px-4 '>
                <div className='bg-white py-3 w-1/2 rounded-xl shadow'>
                    <div className='flex'>
                        <div className='mx-4 px-2 py-2 bg-slate-200 rounded-lg'>
                            <Icon className='text-gray-600' icon="ic:outline-people-alt" width="20" />
                        </div>
                        <div className='ml-auto text-xs text-gray-400 mx-4'>
                            <p>This Week <Icon className='inline-block' icon="ic:round-keyboard-arrow-down" width="20" /></p>
                        </div>
                    </div>

                    <div className='flex pt-8 px-6'>
                        <div className='text-left'>
                            <p className='text-sm text-zinc-400'>Employees</p>
                            <h1 className='text-xl font-medium pt-1'>450</h1>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-3 w-1/2 rounded-xl ml-4 shadow'>
                    <div className='flex '>
                        <div className='mx-4 px-2 py-2 bg-slate-200 rounded-lg'>
                            <Icon className='text-gray-600' icon="ph:bag-bold" width="20" />
                        </div>
                        <div className='ml-auto text-xs text-gray-400 mx-4'>
                            <p>This Week <Icon className='inline-block' icon="ic:round-keyboard-arrow-down" width="20" /></p>
                        </div>
                    </div>

                    <div className='flex justify-between pt-8 px-6'>
                        <div className='text-left '>
                            <p className='text-sm text-zinc-400'>Purchaser</p>
                            <h1 className='text-xl font-medium pt-1'>45</h1>
                        </div>
                        <div className='text-left '>
                            <p className='text-sm text-zinc-400'>Sales</p>
                            <h1 className='text-xl font-medium pt-1'>20</h1>
                        </div>
                        <div className='text-left '>
                            <p className='text-sm text-zinc-400'>Help Center</p>
                            <h1 className='text-xl font-medium pt-1'>5</h1>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default EmployeeSummary