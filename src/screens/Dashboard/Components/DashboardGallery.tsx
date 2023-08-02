import React from 'react'
import DashboardCard1 from '../../../Components/DashboardCard1'
import DashboardCard2 from '../../../Components/DashboardCard2'
import DashboardCard3 from '../../../Components/DashboardCard3'
import RecentOrders from './RecentOrders'
import BarGraphCard from './BarGraphCard'
import { ReactComponent as ChartIcon } from '../../../Assets/Icons/Dashboard/ChartIcon.svg'
import { ReactComponent as BagIcon } from '../../../Assets/Icons/Dashboard/BagIcon.svg'
import { ReactComponent as UserIcon } from '../../../Assets/Icons/Dashboard/UserIcon.svg'
import { ReactComponent as CartIcon } from '../../../Assets/Icons/Dashboard/CartIcon.svg'
import { ReactComponent as FileIconDark } from '../../../Assets/Icons/Dashboard/FileIconDark.svg'


const DashboardGallery = () => {
    return (
        <div className='relative'>
            {/* row-1 */}
            <div className='flex justify-center'>
                <div className='w-4/12 px-2'>
                    <DashboardCard1 head1='Sales' head2='Volume' CardIcon={<ChartIcon />} backgroundColor='white' />
                </div>
                <div className='w-4/12 px-2'>
                    <DashboardCard1 head1='Customers' head2='Active' CardIcon={<UserIcon />} backgroundColor='white' />
                </div>
                <div className='w-5/12 px-2'>
                    <DashboardCard2 head1='All Orders' head2='Pending' head3='Completed' CardIcon={<BagIcon />} />
                </div>
            </div>

            {/* row-2 */}
            <div className='flex justify-center mt-6'>
                <div className='w-4/12  px-2'>
                    <DashboardCard3 />
                </div>
                <div className='w-4/12 px-2'>
                    <div className='bg-gray-100'>
                        <DashboardCard1 head1='All Products' head2='Active' CardIcon={<FileIconDark />} backgroundColor='#374151' textColor='text-white' />
                    </div>
                    <div className='mt-4'>
                        <DashboardCard1 head1='Abandoned Cart' head2='Active' CardIcon={<CartIcon />} backgroundColor='white' />
                    </div>
                </div>
                <div className='w-5/12 px-2'>
                    <RecentOrders />
                </div>
            </div>

            <div className=' w-8/12 pl-2 pr-16  absolute bottom-0'>
                <BarGraphCard />
            </div>

        </div>
    )
}

export default DashboardGallery