import React from 'react'
import { Icon } from '@iconify/react';

import { ReactComponent as BarGraph } from '../../../Assets/Dashboard/EmptyBarGraph.svg'

const BarGraphCard = () => {
    return (
        <div>
            <div className='bg-white rounded-xl'>
                <div className='flex justify-between'>
                    <div className='mx-4  flex'>
                        <h1 className='pt-4 px-2'>Summary</h1>
                        <div className='pt-4 px-2'>
                            <p className='text-theme-blue-2 px-4 py-0.5 text-sm rounded-lg bg-theme-white'>Sales <Icon className='inline-block pl-2' icon="material-symbols:keyboard-arrow-down-rounded"  width="24" /></p>
                        </div>
                    </div>
                    <div className='mx-4 mt-4 text-xs text-gray-400'>
                        <p>Last 7 Days <Icon className='inline-block' icon="ic:round-keyboard-arrow-down" width="20" /></p>
                    </div>
                </div>
                <div className='flex justify-between pt-6 px-6 pb-6'>
                    <BarGraph />
                </div>
            </div>
        </div>
    )
}

export default BarGraphCard