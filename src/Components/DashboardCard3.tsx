import React from 'react'
import { Icon } from '@iconify/react';
import { ReactComponent as EmptyChart } from '../Assets/Dashboard/EmptyChart.svg'







const DashboardCard3 = () => {
    return (
        <div>
            <div className='bg-white rounded-xl'>
                <div className='flex justify-between'>
                    <div className='mx-4 mt-4 px-2  py-2 '>
                        <h1>Marketing</h1>
                    </div>
                    <div className='mx-4 mt-7 text-xs text-theme-gray-1'>
                        <p>This Week <Icon className='inline-block' icon="ic:round-keyboard-arrow-down" width="20" /></p>
                    </div>
                </div>

                <div className='flex justify-around text-xs px-2'>
                    <div>
                        <p className=''><Icon className='inline' icon="carbon:dot-mark" color="#5570f1" width="16" /><span className=''>Acquisition</span></p>
                    </div>
                    <div>
                        <p className=''><Icon className='inline' icon="carbon:dot-mark" color="#97A5EB" width="16" /><span className=''>Purchase</span></p>
                    </div>
                    <div>
                        <p className=''><Icon className='inline' icon="carbon:dot-mark" color="#FFCC91" width="16" /><span className=''>Retention</span></p>
                    </div>
                </div>
                <div className='flex justify-center py-9 px-6'>
                    <EmptyChart />
                </div>

            </div>

        </div>
    )
}

export default DashboardCard3