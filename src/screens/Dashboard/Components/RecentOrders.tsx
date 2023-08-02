import React from 'react'
import { Icon } from '@iconify/react';
import { ReactComponent as EmptyCart } from '../../../Assets/Dashboard/EmptyCart.svg'






const RecentOrders = () => {
    return (
        <div>
            <div className='bg-white rounded-xl '>
                <div className='flex justify-between'>
                    <div className='mx-4 mt-4 px-2  py-2 '>
                        <h1>Recent Orders</h1>
                    </div>
                </div>


                <div className='flex justify-center pt-40 px-6 mb-4'>
                    <EmptyCart />
                </div>
                <div className='pb-52'>
                    <h1 className='fontPoppins text-slate-800 font-medium text-2xl pt-6'>No Orders Yet?</h1>
                    <div className='text-sm pt-4 text-slate-500'>
                        <p>Add products to your Lohawalla and start</p>
                        <p>selling to see orders here.</p>
                    </div>

                    <button className='bg-slate-700 text-white px-8 py-2 rounded-xl mt-4'>
                        <Icon icon="akar-icons:plus" className='text-2xl inline-block' />
                        New Product
                    </button>
                </div>

            </div>

        </div>
    )
}

export default RecentOrders