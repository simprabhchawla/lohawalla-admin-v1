import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import DashboardGallery from './Components/DashboardGallery'

const Dashboard = () => {
  return (
    <>
      <div className='flex  bg-theme-white'>
        <div>
          <Sidebar />
        </div>
        <div className='flex grow content flex-col'>
          <div>
            <Navbar Pagename='DashBoard' />
          </div>
          <div className='px-6 py-8'>
            <DashboardGallery />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard