import React from 'react'
import { Icon } from '@iconify/react';




interface CardProps {
    head1: string;
    head2: string;
    head3: string;
    CardIcon: React.ReactNode;
}



const DashboardCard2 = ({ head1, head2, head3, CardIcon }: CardProps) => {
    return (
        <div>
            <div className='bg-white rounded-xl'>
                <div className='flex justify-between'>
                    <div className='mx-4 mt-4  bg-slate-200 rounded-lg'>
                        {CardIcon}
                    </div>
                    <div className='mx-4 mt-4 text-xs text-theme-gray-1'>
                        <p>This Week <Icon className='inline-block' icon="ic:round-keyboard-arrow-down" width="20" /></p>
                    </div>
                </div>
                <div className='flex justify-between pt-8 px-6'>
                    <div className='text-left my-4 '>
                        <p className='text-sm text-slate-500 '>{head1}</p>
                        <h1 className='text-xl font-medium pt-1'>450 <span className='text-xs text-theme-green-2'> + 0.00%</span></h1>
                    </div>
                    <div className='text-left my-4 '>
                        <p className='text-sm text-slate-500 '>{head2}</p>
                        <h1 className='text-xl font-medium pt-1'>0</h1>
                    </div>
                    <div className='text-left my-4 '>
                        <p className='text-sm text-slate-500 '>{head2}</p>
                        <h1 className='text-xl font-medium pt-1'>0 <span className='text-xs'> +0.00% </span></h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DashboardCard2