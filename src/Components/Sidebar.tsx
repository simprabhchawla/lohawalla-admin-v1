import React from 'react'
import Logo from "../Assets/LogoLohawalla.svg"
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useLocation } from "react-router-dom";
import { useAuthGuardContext } from "@src/auth/AuthGuard/AuthGuard";

// import { SidebarState } from '../screens/Dashboard/types';
// import { initialState } from '../screens/Dashboard/Management/States/initialState';
// import { useSidebarActions } from '../screens/Dashboard/Management/Actions/SideBarAction';



const Sidebar = () => {
    const { pathname } = useLocation();
    const { user, loginData, action } = useAuthGuardContext();

    return (
        <>
            <aside className="flex flex-col w-56 h-full px-3 py-3 overflow-y-auto bg-white border-r border-r-slate-200 rtl:border-r-0 rtl:border-l ">
                <div className='px-4' >
                    <img className="" src={Logo} alt="" />
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className=" ">
                        <ul className='mt-16 text-left text-sm py-2 text-zinc-600'>
                            <Link to='/'>
                                <li
                                    className={`my-3 px-4 py-2 rounded-lg transition duration-300 hover:bg-slate-700 hover:text-white ${pathname === '/' ? 'bg-slate-700 text-white' : ''
                                        }`}

                                >
                                    <Icon className='mr-2 inline-block hover:text-white' icon="material-symbols:dashboard" width="26" />
                                    Dashboard
                                </li>
                            </Link>


                            <Link to='/ratio'>
                                <li
                                    className={`my-3 px-4 py-2 rounded-lg transition duration-300 hover:bg-slate-700 hover:text-white ${pathname === '/ratio' ? 'bg-slate-700 text-white' : ''
                                        }`}

                                >
                                    <Icon className='mr-2 inline-block hover:text-white' icon="ph:bag" width="26" />
                                    Ratio
                                </li>
                            </Link>

                            <Link to='/manager'>
                                <li
                                    className={`my-3 px-4 py-2 rounded-lg transition duration-300 hover:bg-slate-700 hover:text-white ${pathname === '/manager' ? 'bg-slate-700 text-white' : ''
                                        }`}

                                >
                                    <Icon className='mr-2 inline-block hover:text-white' icon="ph:bag" width="26" />
                                    Manager
                                </li>
                            </Link>
                            <Link to='/godown'>
                                <li
                                    className={`my-3 px-4 py-2 rounded-lg transition duration-300 hover:bg-slate-700 hover:text-white ${pathname === '/godown' ? 'bg-slate-700 text-white' : ''
                                        }`}

                                >
                                    <Icon className='mr-2 inline-block hover:text-white' icon="ph:bag" width="26" />
                                    Godown
                                </li>
                            </Link>
                            <Link to='/employer'>
                                <li
                                    className={`my-3 px-4 py-2 rounded-lg transition duration-300 hover:bg-slate-700 hover:text-white ${pathname === '/employer' ? 'bg-slate-700 text-white' : ''
                                        }`}

                                >
                                    <Icon className='mr-2 inline-block hover:text-white' icon="ph:bag" width="26" />
                                    Employees
                                </li>
                            </Link>

                            <li className='my-3 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white'>
                                <Icon className=' inline-block hover:text-white' icon="ph:arrows-down-up" width="26" />
                                Purchaser Switch
                            </li>
                            <li className='my-3 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white'>
                                <Icon className='mr-2 inline-block hover:text-white' icon="material-symbols:settings" width="26" />
                                <Link to='/settings'>Settings</Link>
                            </li>
                        </ul>

                        <ul className=''>
                            <ul className='mt-32 text-left text-sm py-2 text-zinc-600'>
                                <li className='bg-gray-200 my-3 px-4 py-2 rounded-xl hover:bg-slate-700 hover:text-white '><Icon className=' mr-2 inline-block hover:text-white' icon="ri:headphone-line" width="26" /> Contact Support</li>
                                <li
                                    onClick={() => {
                                        action.logOut();
                                    }}
                                    className='my-3 px-4 py-2 rounded-xl text-theme-btn-red hover:bg-theme-btn-red hover:text-white'><Icon className='mr-2 inline-block hover:text-white' icon="solar:logout-2-bold-duotone" rotate={2} width="26" /> Logout</li>
                            </ul>
                        </ul>
                    </nav>
                </div>
            </aside>




        </>
    )
}

export default Sidebar